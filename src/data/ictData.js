export const ictCourse = {
  title: "ICT A/L Syllabus (Mastery)",
  description: "A comprehensive guide to Competencies 9, 10, and 11 covering Programming, Web Development, and IoT for Advanced Level ICT.",
  modules: [
    {
      id: "i9.6",
      title: "9.6 IDEs (Integrated Dev Environments)",
      content: `
# 9.6 Basic features of an Integrated Development Environment (IDE)

## Simple Explanation
Imagine you are building a wooden table. You *could* cut the wood with a hand saw, hammer nails with a rock, and sand it with rough paper—but it would be slow, messy, and error-prone. Instead, you'd want a fully equipped workshop with power tools, a workbench, and safety gear all in one place. 

An **IDE (Integrated Development Environment)** is exactly that, but for programming. Instead of writing code in a plain text editor and using separate, clunky tools to run it, an IDE gives you a single "workshop" (like PyCharm, VS Code, or IDLE) that contains everything you need to write, test, and fix your code efficiently.

## Technical Deep Dive
To effectively use an IDE, you must understand its five core features:
*   **Opening/Creating:** The ability to start a new project or open an existing source code file. IDEs often set up folder structures automatically.
*   **Saving:** Storing your source code to the hard drive. Good IDEs offer auto-save and version control integration (like Git) to prevent data loss.
*   **Compiling/Interpreting:** Translating your human-readable source code into machine code (1s and 0s) that the computer understands. 
    * *Compilers* translate the whole program at once (like in C++).
    * *Interpreters* translate line-by-line (like in Python). The IDE handles this translation in the background.
*   **Executing (Running):** Running the translated code so you can see the output or interact with the program directly within the IDE's built-in console/terminal.
*   **Debugging:** The most powerful feature of an IDE. Debugging tools allow you to pause execution (using *breakpoints*), inspect the values of variables in real-time, and step through your code line-by-line to find logical errors (bugs).

## Code/Syntax Examples
While this section is more about the *tool* rather than the *code*, here is how the workflow looks in a typical Python IDE:

\`\`\`python
# 1. OPENING: You open a new file named 'calculator.py' in your IDE.

# 2. WRITING/SAVING: You write the following code and hit Ctrl+S to save.
print("Starting the calculator...") 
x = 10
y = 0

# 3. DEBUGGING: You set a 'breakpoint' on the next line because you suspect an error.
# The IDE pauses the program here so you can inspect 'x' and 'y'.
result = x / y  # This will cause a ZeroDivisionError!

# 4. EXECUTING: You press the 'Run' button (often a green play icon).
print("The result is:", result)
\`\`\`
      `
    },
    {
      id: "i9.7",
      title: "9.7 Imperative Programming",
      content: `
# 9.7 Imperative Programming 

## Simple Explanation
Think of imperative programming like giving a recipe to a chef. You don't just say "make me a cake." You have to give explicit, step-by-step instructions: "First, take 2 eggs (variables). Then, mix them with flour (operations). Next, put them in the oven for 30 minutes." 

In imperative programming, you are the boss giving the computer a sequence of direct commands to change its state and achieve a result. It is the most fundamental paradigm (style) of programming.

## Technical Deep Dive
To write imperative code, you must understand the basic building blocks of a program:
*   **Structure:** Programs execute sequentially, from top to bottom. A standard structure includes importing libraries at the top, defining variables, performing operations, and finally outputting the result.
*   **Comments:** Lines of text ignored by the compiler/interpreter. Used by programmers to explain what the code does. Essential for maintaining and sharing code.
*   **Variables:** Named memory locations used to store data that can change during execution. Think of them as labeled boxes holding values.
*   **Primitive Data Types:** The most basic forms of data the computer understands natively:
    *   *Integer (int):* Whole numbers (e.g., 5, -10).
    *   *Float (float / real):* Decimal numbers (e.g., 3.14, 2.0).
    *   *Character (char):* A single letter or symbol (e.g., 'A', '?').
    *   *Boolean (bool):* Represents truth values: True or False (1 or 0).
*   **Operators:** Symbols that tell the compiler to perform specific mathematical or logical manipulations. 
    *   *Arithmetic:* \`+\` (add), \`-\` (subtract), \`*\` (multiply), \`/\` (divide), \`%\` (modulus - returns the remainder).
    *   *Assignment:* \`=\` (assigns the value on the right to the variable on the left).
*   **Input/Output (I/O):** How the program interacts with the outside world.
    *   *Input:* Reading data from the user (via keyboard).
    *   *Output:* Displaying data back to the user (via the screen/console).

## Code/Syntax Examples
Here is how all these elements come together in Python:

\`\`\`python
# 1. COMMENTS: This is a single-line comment explaining the program.
""" 
This is a multi-line comment.
This program calculates the area of a rectangle.
"""

# 2. VARIABLES & PRIMITIVE DATA TYPES
length = 10         # Integer type
width = 5.5         # Float type
is_calculating = True # Boolean type
unit = 'm'          # Character/String type

# 3. INPUT (I/O)
# We use input() to get data from the user. We wrap it in int() to convert the text to a number.
user_multiplier = int(input("Enter a multiplier: "))

# 4. OPERATORS
# Arithmetic operators (* for multiplication) and Assignment operator (=)
base_area = length * width 
final_area = base_area * user_multiplier

# 5. OUTPUT (I/O)
# We use print() to output the result to the screen.
print("The final area is:", final_area, "square", unit)
\`\`\`
      `
    },
    {
      id: "i9.8",
      title: "9.8 Control Structures",
      content: `
# 9.8 Control Structures

## Simple Explanation
Imagine you are driving a car to a new destination. 
*   Most of the time, you drive straight down the road one block after another. (**Sequence**)
*   Eventually, you hit a fork in the road and have to decide: "If the map says left, go left. Else, go right." (**Selection**)
*   Later, you find yourself on a roundabout, and you keep driving in circles *until* you find the correct exit. (**Repetition/Iteration**)

In programming, **Control Structures** dictate the flow of execution. Without them, a program would just run straight from top to bottom and stop. Control structures allow the program to make decisions and repeat tasks, giving it actual "intelligence."

## Technical Deep Dive
There are three fundamental control structures, plus one advanced concept:

*   **1. Sequence:** The default behavior. The computer executes instructions line by line, strictly in the order they are written.
*   **2. Selection (Decision Making):** Allows the program to choose between different paths based on a condition (a boolean expression evaluating to True or False). 
    *   *If-Then:* If a condition is true, do X.
    *   *If-Then-Else:* If a condition is true, do X; otherwise, do Y.
    *   *Switch/Case:* (Available in languages like C++/Java) Evaluates a single variable against multiple specific values.
*   **3. Repetition / Iteration (Looping):** Allows the program to execute a block of code multiple times.
    *   *For Loop:* Used when you know *exactly* how many times you want to repeat (e.g., "Count from 1 to 10").
    *   *While Loop:* Used when you want to repeat *until* a condition changes (e.g., "Keep asking for a password until it is correct").
*   **4. Nested Structures:** Placing one control structure inside another. For example, putting an \`If\` statement inside a \`For loop\` (e.g., "Look at 10 students, and *if* their score is > 50, mark them as passed").

## Code/Syntax Examples
Here is how we use these control structures in Python:

\`\`\`python
# 1. SEQUENCE
# These three lines execute one after another in order.
print("Starting sequence...")
x = 5
y = 10

# 2. SELECTION (If / Else)
# The program checks a condition to decide what to do next.
if x > y:
    print("x is greater than y")
elif x == y:
    print("x is equal to y")
else:
    print("x is less than y") # This line will execute

# 3. REPETITION (Loops)
# A 'For' loop iterating a set number of times
print("Counting to 3:")
for i in range(1, 4):
    print(i)

# A 'While' loop repeating based on a condition
countdown = 3
while countdown > 0:
    print("Liftoff in...", countdown)
    countdown = countdown - 1 # We must change the condition, or it loops forever!

# 4. NESTED STRUCTURES
# A 'For' loop containing an 'If' statement
print("Checking even numbers:")
for number in range(1, 6): # Loops from 1 to 5
    if number % 2 == 0:    # Selection inside the loop
        print(number, "is even!")
\`\`\`
      `
    },
    {
      id: "i10.1",
      title: "10.1-10.4 WWW & HTML",
      content: `
# 10.1 to 10.4 Web Development Basics

## WWW and Types of Websites
The World Wide Web (WWW) is an information system where documents and other web resources are identified by Uniform Resource Locators (URLs). 
- **Information Sites**: Static sites providing details (e.g., Wikipedia).
- **News Sites**: Frequently updated articles.
- **Web Portals**: A customized entry point for users (e.g., Yahoo, University Portals).

## User Requirements
Before building a site, developers must define:
1. **Objectives**: What should the site achieve?
2. **Layouts**: Wireframing the visual structure.
3. **Navigation**: How users will move between pages (menus, breadcrumbs).

## HTML Tags
HTML (HyperText Markup Language) provides the skeletal structure of a webpage.

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>My First ICT Page</title>
  <!-- This is a comment. The <head> contains metadata -->
</head>
<body bgcolor="#f4f4f4">
  <h1>Main Heading</h1>
  <p>This is a paragraph with <b>bold text</b> and <i>italic text</i>.</p>
  
  <h2>Unordered List</h2>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>

  <h2>Ordered List</h2>
  <ol>
    <li>First step</li>
    <li>Second step</li>
  </ol>

  <!-- Hyperlinks and Images -->
  <a href="https://google.com">Go to Google</a>
  <br/>
  <img src="logo.png" alt="Company Logo" width="200" />

  <!-- Tables -->
  <table border="1">
    <tr>
      <th>Name</th>
      <th>Subject</th>
    </tr>
    <tr>
      <td>Alice</td>
      <td>ICT</td>
    </tr>
  </table>
</body>
</html>
\`\`\`
      `
    },
    {
      id: "i10.5",
      title: "10.5 CSS & 10.7 PHP/MySQL",
      content: `
# 10.5 CSS and 10.7 Dynamic Pages (PHP & MySQL)

## CSS (Cascading Style Sheets)
While HTML is the skeleton, CSS is the skin and clothes. It styles the webpage.
CSS can be applied in three ways:
1. **Inline**: Directly in the HTML tag \`<p style="color: red;">\`
2. **Internal**: Inside the \`<head>\` within \`<style>\` tags.
3. **External**: In a separate \`.css\` file linked in the \`<head>\`.

\`\`\`css
/* External CSS Example */
body {
    background-color: #333;
    font-family: Arial, sans-serif;
}

h1 {
    color: white;
    text-align: center;
}

.button {
    background-color: blue;
    padding: 10px;
}
\`\`\`

## Dynamic Web Pages (PHP)
A static site looks the same for everyone. A dynamic site (like Facebook) changes based on user input or database data. PHP is a Server-Side language that handles this logic.

### Forms (GET vs POST)
- **GET**: Sends form data via the URL (e.g., \`?search=cats\`). Visible and less secure. Good for searches.
- **POST**: Sends form data in the HTTP body. Hidden and secure. Essential for passwords.

\`\`\`html
<!-- HTML Form submitting to a PHP script -->
<form action="process.php" method="POST">
    Name: <input type="text" name="username">
    <input type="submit" value="Send">
</form>
\`\`\`

### PHP Script to Handle Data and Connect to MySQL
\`\`\`php
<?php
  // This is PHP code running on the server
  $user = $_POST['username']; // Capturing POST data
  echo "Welcome, " . $user . "!";

  // Database Connection (MySQL)
  $conn = new mysqli("localhost", "root", "password", "school_db");
  
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Saving data to MySQL
  $sql = "INSERT INTO Students (Name) VALUES ('$user')";
  if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  }
  
  $conn->close();
?>
\`\`\`
      `
    },
    {
      id: "i11.1",
      title: "11.1-11.2 IoT & Microprocessors",
      content: `
# 11.1 Microprocessors & 11.2 IoT Applications

## Microprocessor Development Systems
The "brain" of IoT devices. Popular boards include:
- **Arduino**: A microcontroller board excellent for reading sensors and controlling motors/LEDs. Programmed in C/C++.
- **Raspberry Pi**: A fully functioning microcomputer running Linux. Better for complex processing and video.

### Analog vs Digital I/O
- **Digital I/O**: Reads/writes binary states (ON/OFF, 1/0, HIGH/LOW). E.g., turning on an LED or reading a magnetic door switch.
- **Analog I/O**: Reads/writes a range of values. E.g., reading an LDR (Light Dependent Resistor) where light intensity varies from 0 to 1023, or reading a temperature sensor (LM35).

\`\`\`cpp
// Arduino Code Example: Blinking an LED based on an LDR sensor
int ledPin = 13;
int ldrPin = A0; // Analog pin

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int lightValue = analogRead(ldrPin); // Read light level (0-1023)
  Serial.println(lightValue);
  
  if (lightValue < 300) { // If it's dark
    digitalWrite(ledPin, HIGH); // Turn LED ON
  } else {
    digitalWrite(ledPin, LOW);  // Turn LED OFF
  }
  delay(500); // Wait half a second
}
\`\`\`

## IoT Applications
IoT (Internet of Things) means connecting everyday physical objects to the internet so they can send and receive data.
- **Needs**: Efficiency, remote monitoring, automation (e.g., Smart Homes).
- **Enabling Tech**: Wi-Fi chips (like ESP8266), Cloud Servers, Mobile Apps.
- **Example - Remote Switch**: Constructing a system where an Arduino connects to Wi-Fi. A user taps a button on a website on their phone, which sends a signal to a cloud database. The Arduino reads the database and physically switches on a relay connected to a real lightbulb.
      `
    }
  ],
  flashcards: [
    { id: "if1", front: "What does IDE stand for?", back: "Integrated Development Environment." },
    { id: "if2", front: "What is the main purpose of an IDE?", back: "To provide comprehensive facilities for software development in a single application (editing, compiling, running, and debugging)." },
    { id: "if3", front: "What is Imperative Programming?", back: "A programming paradigm where the developer writes a sequence of explicit, step-by-step commands to change the program's state." },
    { id: "if4", front: "Name four primitive data types.", back: "Integer (whole numbers), Float (decimals), Character (single symbols), and Boolean (True/False)." },
    { id: "if5", front: "What are the three fundamental Control Structures in programming?", back: "Sequence, Selection, and Repetition (Iteration)." },
    { id: "if6", front: "What is a Nested Structure?", back: "When one control structure is placed inside another (e.g., an If statement inside a While loop)." },
    { id: "if7", front: "What is the difference between GET and POST in PHP?", back: "GET sends data in the URL (visible/insecure), POST sends data in the HTTP body (hidden/secure)." },
    { id: "if8", front: "Which SQL command is used to add new data to a database?", back: "INSERT INTO" },
    { id: "if9", front: "What HTML tag is used for the largest heading?", back: "<h1>" },
    { id: "if10", front: "What does an LDR sensor do in an IoT context?", back: "It acts as a Light Dependent Resistor, measuring the intensity of ambient light (Analog Input)." }
  ],
  quiz: [
    {
      id: "iq1",
      question: "Which of the following best describes the role of a debugger in an IDE?",
      options: ["It writes code for you", "It converts high-level language into machine code", "It allows you to pause execution and inspect variables", "It compresses files"],
      correctAnswer: 2,
      explanation: "A debugger's primary function is to help you find logical errors by pausing execution (breakpoints) and letting you inspect the program's state."
    },
    {
      id: "iq2",
      question: "A program calculating the average temperature over 365 days should use which control structure to read the data?",
      options: ["Sequence", "Selection (If-Else)", "Repetition (For Loop)", "Nested Selection"],
      correctAnswer: 2,
      explanation: "Because we know exactly how many times the operation must occur (365 times), a Repetition control structure (specifically a For Loop) is the correct choice."
    },
    {
      id: "iq3",
      question: "In PHP, which method is considered more secure for sending passwords in a form?",
      options: ["POST", "GET", "SEND", "SECURE"],
      correctAnswer: 0,
      explanation: "The POST method sends form data within the HTTP request body, hiding it from the URL, which is crucial for sensitive data like passwords."
    },
    {
      id: "iq4",
      question: "Which device is commonly used as a microprocessor development board for IoT applications requiring analog sensor readings?",
      options: ["Intel Core i9", "Arduino", "Nvidia RTX", "AMD Ryzen"],
      correctAnswer: 1,
      explanation: "Arduino boards are specifically designed for physical computing and IoT, easily reading analog sensors (like LDRs or temperature sensors)."
    },
    {
      id: "iq5",
      question: "What is the primary danger of using a `While` loop compared to a `For` loop?",
      options: ["It is slower", "It requires more memory", "It can become an infinite loop if the condition never changes", "It cannot be nested"],
      correctAnswer: 2,
      explanation: "A While loop continues until its condition is False. If the programmer forgets to update the variables controlling that condition, the loop will run forever and crash the program."
    }
  ]
};
