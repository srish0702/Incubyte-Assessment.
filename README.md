﻿# Incubyte-Assessment.

String Calculator
This project implements a StringCalculator class that adds numbers passed in as a string. The string can include comma-separated numbers, newlines as delimiters, and custom delimiters. It also handles edge cases such as empty input, negative numbers, and non-numeric values.

Features
Empty string: Returns 0.
Single number: Returns the number itself.
Multiple numbers: Adds them together and returns the sum.
Newline as a delimiter: Supports newlines (\n) in addition to commas as delimiters.
Custom delimiter: Supports custom delimiters, specified in the format: "//[delimiter]\n[numbers]".
Negative numbers: Throws an error when negative numbers are passed, displaying all negative numbers in the error message.

Installation and Running the Code
To run this JavaScript file, follow these steps:

Prerequisites
You need Node.js installed on your machine. You can download it from nodejs.org.
Steps
Clone or download this repository.

Navigate to the folder containing the index.js file.

Open a terminal and run the following command:

bash
Copy code
node index.js
You should see the output for various test cases described in the code, including results for different input formats and an error for negative numbers.
