export const courseModules = [
  {
    id: "9.6",
    title: "9.6 Features of an IDE",
    content: `
# 9.6 Basic features of an Integrated Development Environment (IDE)

## Simple Explanation
An IDE is a software suite that consolidates basic tools required to write and test software. Instead of using a plain text editor and running a compiler from a separate terminal, an IDE puts everything in one place.

## Technical Deep Dive
- **Opening & Saving:** Easily manage projects, folders, and source files.
- **Compiling / Interpreting:** Automatically translate high-level code into machine code. 
- **Executing:** Run the code within the IDE to see the output.
- **Debugging:** Pause code execution (breakpoints), step through line-by-line, and inspect variables to find logical errors.
    `
  },
  {
    id: "9.7",
    title: "9.7 Imperative Programming",
    content: `
# 9.7 Imperative Programming

## Concept
A programming paradigm that uses statements that change a program's state. You provide explicit, step-by-step commands.

## Core Elements
- **Structure:** Code executes sequentially top-to-bottom.
- **Comments:** Used to explain code (e.g., \`#\` in Python). Ignored by the compiler.
- **Variables:** Named memory locations holding data.
- **Primitive Data Types:** Integer, Float, Character, Boolean.
- **Operators:** Arithmetic (\`+\`, \`-\`, \`*\`, \`/\`, \`%\`), Assignment (\`=\`).
- **I/O:** Input (receiving data) and Output (displaying data).

\`\`\`python
# Example
age = int(input("Enter age: ")) # Input
future_age = age + 10 # Operator
print("In 10 years, you'll be", future_age) # Output
\`\`\`
    `
  },
  {
    id: "9.8",
    title: "9.8 Control Structures",
    content: `
# 9.8 Control Structures

## Concept
Control structures alter the sequential flow of execution, allowing programs to make decisions or repeat tasks.

## Types
1. **Sequence:** Default line-by-line execution.
2. **Selection:** Decision making using \`if\`, \`else\`, or \`switch/case\`.
3. **Repetition / Iteration:** Looping via \`for\` (fixed iterations) or \`while\` (condition-based).
4. **Nested Structures:** Placing one structure inside another.

\`\`\`python
# Nested Selection inside Repetition
for i in range(5):
    if i % 2 == 0:
        print("Even")
    else:
        print("Odd")
\`\`\`
    `
  },
  {
    id: "9.9",
    title: "9.9 Sub-programs",
    content: `
# 9.9 Sub-programs

## Concept
Functions or procedures that encapsulate reusable code blocks.

## Details
- **Built-in vs User-defined:** Standard library functions (like \`print()\`) vs functions you create.
- **Parameter Passing:** Passing values (arguments) into the sub-program.
- **Return Values:** Getting data back from the function using \`return\`.
- **Scope:** Local variables (only exist inside the function) vs Global variables.

\`\`\`python
def calculate_area(length, width):
    return length * width

area = calculate_area(5, 10)
\`\`\`
    `
  },
  {
    id: "9.10",
    title: "9.10 Data Structures",
    content: `
# 9.10 Data Structures

## Collections of Data
- **Strings:** Sequence of characters.
- **Lists:** Ordered, mutable sequences. Allows duplicates.
- **Tuples:** Ordered, immutable sequences. Faster than lists.
- **Dictionaries:** Key-value pairs. Unordered and mutable.

\`\`\`python
my_list = [1, 2, 3]
my_tuple = (1, 2, 3)
my_dict = {"name": "Alice", "age": 20}
\`\`\`
    `
  },
  {
    id: "9.11",
    title: "9.11 File Handling",
    content: `
# 9.11 File Handling

## Operations
- **Open:** Open a file in modes like 'r' (read), 'w' (write), or 'a' (append).
- **Close:** Free up system resources.
- **Read:** Extract data from the file.
- **Write:** Overwrite or write new data.
- **Append:** Add data to the end of a file.

\`\`\`python
with open("data.txt", "w") as file:
    file.write("Hello ICT!")
\`\`\`
    `
  },
  {
    id: "9.12",
    title: "9.12 Databases via SQL",
    content: `
# 9.12 Databases

## SQL Operations
Interacting with databases (like MySQL/SQLite) from a program requires establishing a connection and executing queries.
- **Connecting:** Establishing a link to the DB.
- **Retrieving:** \`SELECT * FROM table\`
- **Adding:** \`INSERT INTO table VALUES (...)\`
- **Modifying:** \`UPDATE table SET ...\`
- **Deleting:** \`DELETE FROM table WHERE ...\`
    `
  },
  {
    id: "9.13",
    title: "9.13 Searching & Sorting",
    content: `
# 9.13 Searching and Sorting

## Sequential (Linear) Search
Checks each element one-by-one until the target is found. Inefficient for large datasets (O(n)).

## Bubble Sort
Repeatedly swaps adjacent elements if they are in the wrong order. Heaviest elements "bubble" to the top (end of the array).

\`\`\`python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
\`\`\`
    `
  },
  {
    id: "10.1",
    title: "10.1-10.4 Web Dev Basics (HTML)",
    content: `
# 10.1 - 10.4 Web Development Basics

## WWW and User Requirements
The World Wide Web hosts information sites, news, and portals. Websites must be built based on user objectives, requiring good layouts and navigation.

## HTML Tags
HTML provides the structure of a webpage.
- \`<html>\`, \`<head>\`, \`<title>\`, \`<body>\`
- **Formatting:** \`<b>\`, \`<i>\`, \`<u>\`
- **Links & Media:** \`<a href="...">\`, \`<img src="...">\`
- **Tables & Lists:** \`<table>\`, \`<ul>\`, \`<ol>\`

\`\`\`html
<html>
<body>
  <h1>Welcome</h1>
  <a href="page2.html">Click Here</a>
</body>
</html>
\`\`\`
    `
  },
  {
    id: "10.5",
    title: "10.5-10.8 CSS, PHP, & MySQL",
    content: `
# 10.5 CSS & 10.7 Dynamic Pages (PHP)

## CSS (Cascading Style Sheets)
Used for formatting presentation (colors, fonts, layouts). Can be inline, internal, or external.

## Dynamic Web Pages (PHP)
PHP is a server-side language embedded in HTML.
- **Forms:** Using \`GET\` and \`POST\` methods to submit data safely.
- **Variables & Arrays:** Storing data on the server.
- **MySQL Integration:** Connecting PHP to a database to save or retrieve user data.

\`\`\`php
<?php
  $name = $_POST['username'];
  echo "Hello " . $name;
?>
\`\`\`
    `
  },
  {
    id: "11.1",
    title: "11.1-11.2 Internet of Things (IoT)",
    content: `
# 11.1 Microprocessors & 11.2 IoT Applications

## Microprocessor Development Systems
Boards like **Arduino** and **Raspberry Pi** are used to interact with the physical world.
- **Analog/Digital I/O:** Reading sensors and controlling outputs.
- **Sensors:** LDR (Light Dependent Resistor) for light sensing, LM35 for temperature, magnetic switches for doors.

## IoT Applications
IoT involves connecting everyday physical objects to the internet.
- Constructing a remote switch through the Internet allows you to control home appliances from anywhere.
    `
  }
];
