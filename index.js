class StringCalculator {
    add(numbers) {
        if (numbers === "") return 0;

        let delimiter = ",";
        if (numbers.startsWith("//")) {
            const delimiterIndex = numbers.indexOf("\n");
            delimiter = numbers.slice(2, delimiterIndex);
            numbers = numbers.slice(delimiterIndex + 1);
        }


        const regex = new RegExp(`[${delimiter}\n]`);
        const numberArray = numbers.split(regex);


        let sum = 0;
        const negativeNumbers = [];

        for (const num of numberArray) {
            const parsedNum = parseInt(num, 10);
            if (isNaN(parsedNum)) continue; 
            if (parsedNum < 0) {
                negativeNumbers.push(parsedNum);
            }
            sum += parsedNum;
        }

        if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed: ${negativeNumbers.join(", ")}`);
        }

        return sum;
    }
}


// Testing Some Inputs
const calculator = new StringCalculator();
console.log(calculator.add("")); // Output: 0
console.log(calculator.add("1")); // Output: 1
console.log(calculator.add("1,5")); // Output: 6
console.log(calculator.add("1\n2,3")); // Output: 6
console.log(calculator.add("//;\n1;2")); // Output: 3
try {
    console.log(calculator.add("1,-2,3,-4")); // Throws error
} catch (e) {
    console.error(e.message); // Output: negative numbers not allowed: -2, -4
}