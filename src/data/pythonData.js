export const pythonCourse = {
  title: "Python Mastery (Bro Code)",
  description: "Comprehensive 12-hour Python course covering everything from print statements to building a Snake Game in Tkinter.",
  modules: [
    {
      id: "p1",
      title: "1. Python Setup & Basics",
      content: `
# 1. Python Setup and Basics

Welcome to Python! Python is a high-level, interpreted programming language known for its strict syntax rules regarding indentation and its highly readable nature.

## The Print Statement
The \`print()\` function outputs text to the console. It is the most fundamental way to display data.
\`\`\`python
print("I love pizza!")
print("It's really good!")
\`\`\`

## Variables and Data Types
A variable is a container for storing a data value. Python is dynamically typed, meaning you don't explicitly declare the type.
- **String (str):** A series of characters enclosed in quotes.
- **Integer (int):** A whole number without a decimal point.
- **Float (float):** A numeric value with a decimal component.
- **Boolean (bool):** Represents \`True\` or \`False\`.

\`\`\`python
# String
name = "Bro" 
print("Hello " + name)
print(type(name)) # <class 'str'>

# Integer
age = 21 
age += 1 
print("Your age is: " + str(age)) # We must cast 'age' to string to concatenate!

# Float
height = 250.5 
print("Your height is: " + str(height) + "cm")

# Boolean
human = True 
print("Are you a human: " + str(human))
\`\`\`

## Multiple Assignment
You can assign values to multiple variables in a single line, making your code cleaner.
\`\`\`python
name, age, attractive = "Bro", 21, True
print(name, age, attractive)

# Or assign the same value to multiple variables:
Spongebob = Patrick = Squidward = Sandy = 30
\`\`\`
      `
    },
    {
      id: "p2",
      title: "2. String Methods & Math",
      content: `
# 2. Strings and Math Functions

## String Methods
Strings are objects in Python, meaning they have built-in methods you can call using the dot notation (\`.\`).
\`\`\`python
name = "Bro Code"

print(len(name))       # Output: 8 (Length of string)
print(name.find("o"))  # Output: 2 (Find index of first 'o')
print(name.capitalize()) # "Bro code" (Capitalize first letter)
print(name.upper())    # "BRO CODE" (Convert all to UPPERCASE)
print(name.lower())    # "bro code" (Convert all to lowercase)
print(name.isdigit())  # False (Returns True if string contains ONLY digits)
print(name.isalpha())  # False (Because of the space!)
print(name.count("o")) # Output: 2
print(name.replace("o", "a")) # "Bra Cade"
print(name * 3)        # "Bro CodeBro CodeBro Code"
\`\`\`

## Typecasting
Typecasting is converting a variable from one data type to another using constructor functions.
\`\`\`python
x = 1   # int
y = 2.0 # float
z = "3" # str

x = float(x) # becomes 1.0
y = int(y)   # becomes 2
z = int(z)   # becomes 3

print(z * 3) # Output: 9 instead of "333"
\`\`\`

## Math Functions
Python includes built-in math functions, and you can import the \`math\` module for advanced operations.
\`\`\`python
import math

pi = 3.14

print(round(pi))     # 3
print(math.ceil(pi)) # 4 (Rounds UP to nearest integer)
print(math.floor(pi))# 3 (Rounds DOWN to nearest integer)
print(abs(-pi))      # 3.14 (Absolute value)
print(pow(pi, 2))    # 9.8596 (pi to the power of 2)
print(math.sqrt(420))# 20.4939 (Square root)

# Max and Min
print(max(1, 2, 3)) # 3
print(min(1, 2, 3)) # 1
\`\`\`
      `
    },
    {
      id: "p3",
      title: "3. Slicing & Control Flow",
      content: `
# 3. String Slicing and Control Flow

## String Slicing
Slicing extracts elements from another string using the syntax \`[start:stop:step]\`.
\`\`\`python
name = "Bro Code"
first_name = name[0:3] # "Bro" (exclusive of index 3)
last_name = name[4:]   # "Code" (to the end)
funky_name = name[0:8:2] # "BoCd" (every 2nd character)
reversed_name = name[::-1] # "edoC orB" (reverses the string!)

# Slicing with slice() object
website1 = "http://google.com"
slice_obj = slice(7, -4)
print(website1[slice_obj]) # "google"
\`\`\`

## If Statements
Control the flow of your program using boolean conditions.
\`\`\`python
age = int(input("How old are you?: "))

if age == 100:
    print("You are a century old!")
elif age >= 18:
    print("You are an adult!")
elif age < 0:
    print("You haven't been born yet!")
else:
    print("You are a child!")
\`\`\`

## Logical Operators (\`and\`, \`or\`, \`not\`)
Used to combine conditional statements.
\`\`\`python
temp = int(input("What is the temperature outside?: "))

if temp >= 0 and temp <= 30:
    print("the temperature is good today!")
elif temp < 0 or temp > 30:
    print("the temperature is bad today!")
    
# NOT operator flips the boolean
if not(temp == 0):
    print("It is not exactly freezing.")
\`\`\`
      `
    },
    {
      id: "p4",
      title: "4. Loops (While & For)",
      content: `
# 4. Loops

## While Loops
A \`while\` loop executes a block of code infinitely as long as its condition remains \`True\`.
\`\`\`python
# This forces the user to enter their name.
name = ""
while len(name) == 0:
    name = input("Enter your name: ")
print("Hello " + name)
\`\`\`

## For Loops
A \`for\` loop iterates over a sequence (like a list, string, or a range object). Used when you know how many times to execute.
\`\`\`python
# range(stop)
for i in range(10):
    print(i) # Prints 0 through 9

# range(start, stop, step)
for i in range(50, 100, 2):
    print(i) # Prints 50, 52, 54...

# Iterating over a string
for i in "Bro Code":
    print(i)
\`\`\`

## Loop Control Statements
- **break:** Terminates the loop entirely.
- **continue:** Skips the rest of the current iteration and jumps to the next iteration.
- **pass:** Does nothing, acts as a placeholder.
\`\`\`python
# Break example
while True:
    name = input("Enter name: ")
    if name != "":
        break # Exits the infinite loop

# Continue example
phone_number = "123-456-7890"
for i in phone_number:
    if i == "-":
        continue
    print(i, end="") # 1234567890
\`\`\`
      `
    },
    {
      id: "p5",
      title: "5. Data Collections",
      content: `
# 5. Lists, Tuples, Sets, and Dictionaries

## Lists (Mutable, Ordered)
Lists store multiple items in a single variable.
\`\`\`python
food = ["pizza", "hamburger", "hotdog", "spaghetti"]
food[0] = "sushi" # Changes pizza to sushi
food.append("ice cream") # Adds to the end
food.remove("hotdog")
food.pop() # Removes the last item
food.insert(0, "cake") # Inserts cake at index 0
food.sort() # Sorts alphabetically

for x in food:
    print(x)
\`\`\`

## Tuples (Immutable, Ordered)
Used to group together related data that should NOT be changed.
\`\`\`python
student = ("Bro", 21, "male")
print(student.count("Bro")) # Returns 1
print(student.index("male")) # Returns 2 (the index)
\`\`\`

## Sets (Mutable, Unordered, Unique)
A set is a collection which is unordered and unindexed. No duplicate values are allowed.
\`\`\`python
utensils = {"fork", "spoon", "knife", "knife"} # Only stores one knife!
dishes = {"bowl", "plate", "cup", "knife"}

utensils.add("napkin")
utensils.remove("fork")
# Set Math
dinner_table = utensils.union(dishes)
print(utensils.intersection(dishes)) # {'knife'}
\`\`\`

## Dictionaries (Mutable, Key-Value Pairs)
Changeable, unordered collection of unique key:value pairs.
\`\`\`python
capitals = {'USA':'Washington DC',
            'India':'New Delhi',
            'China':'Beijing',
            'Russia':'Moscow'}

# Use .get() to avoid KeyError if key doesn't exist
print(capitals.get('Germany')) # Returns None 
capitals.update({'Germany':'Berlin'})
capitals.pop('China')

for key, value in capitals.items():
    print(key, value)
\`\`\`
      `
    },
    {
      id: "p6",
      title: "6. Functions & Scope",
      content: `
# 6. Functions, Args, Kwargs, and Scope

## Functions
A block of code that is executed only when called.
\`\`\`python
def hello(first_name, last_name, age):
    print("Hello " + first_name + " " + last_name)
    print("You are " + str(age) + " years old")

hello("Bro", "Code", 21)
\`\`\`

## Return Statements
Functions can send data back to the caller.
\`\`\`python
def multiply(number1, number2):
    return number1 * number2

result = multiply(6, 8)
print(result) # 48
\`\`\`

## *args (Positional Arguments)
Packs all arguments into a \`tuple\`. Useful so a function can accept varying amounts of arguments.
\`\`\`python
def add(*args):
    total = 0
    # args is a tuple! e.g., (1, 2, 3)
    # Note: Tuples are immutable, so you can't do args[0] = 5
    # If you need to mutate it: args = list(args)
    for i in args:
        total += i
    return total

print(add(1, 2, 3, 4, 5, 6)) # 21
\`\`\`

## **kwargs (Keyword Arguments)
Packs all keyword arguments into a \`dictionary\`.
\`\`\`python
def hello(**kwargs):
    # kwargs is a dictionary! {'title': 'Mr.', 'first': 'Bro'}
    print("Hello", end=" ")
    for key, value in kwargs.items():
        print(value, end=" ")

hello(title="Mr.", first="Bro", last="Code")
\`\`\`

## Variable Scope
The region that a variable is recognized.
- **L:** Local
- **E:** Enclosing
- **G:** Global
- **B:** Built-in
Python resolves variables in the LEGB order.
\`\`\`python
name = "Bro" # Global scope (Available everywhere)

def display_name():
    name = "Code" # Local scope (Only available inside this function)
    print(name)

display_name() # Prints "Code"
print(name)    # Prints "Bro"
\`\`\`
      `
    },
    {
      id: "p7",
      title: "7. Exception & File Handling",
      content: `
# 7. Exception Handling and File Operations

## Exception Handling
Exceptions interrupt the flow of a program. You can handle them to prevent crashes.
\`\`\`python
try:
    numerator = int(input("Enter a number to divide: "))
    denominator = int(input("Enter a number to divide by: "))
    result = numerator / denominator
except ZeroDivisionError as e:
    print(e)
    print("You can't divide by zero! idiot!")
except ValueError as e:
    print(e)
    print("Enter only numbers plz")
except Exception as e:
    print(e)
    print("something went wrong :(")
else:
    # Executes ONLY if no exceptions were raised
    print(result)
finally:
    # ALWAYS executes
    print("This will always execute")
\`\`\`

## File Handling
\`\`\`python
import os

path = "test.txt"

# Detect if a file exists
if os.path.exists(path):
    print("That location exists!")
    if os.path.isfile(path):
        print("That is a file")
else:
    print("That location doesn't exist!")

# Read a file
# 'with open' automatically closes the file after the block!
try:
    with open('test.txt', 'r') as file:
        print(file.read())
except FileNotFoundError:
    print("That file was not found :(")

# Write to a file ('w' overwrites, 'a' appends)
text = "Yooooo\\nThis is some text\\nHave a good one!\\n"
with open('test.txt', 'w') as file:
    file.write(text)

# Delete a file
# os.remove('test.txt')
\`\`\`
      `
    },
    {
      id: "p8",
      title: "8. Object Oriented Programming (OOP)",
      content: `
# 8. Object Oriented Programming (OOP)

## Classes and Objects
An object is an instance of a class. A class is a blueprint.
\`\`\`python
# car.py (Class Definition)
class Car:
    # Class variable (shared across all instances)
    wheels = 4 

    # Constructor method
    def __init__(self, make, model, year, color):
        # Instance variables (unique to each instance)
        self.make = make 
        self.model = model
        self.year = year
        self.color = color

    # Instance methods
    def drive(self):
        print("This "+self.model+" is driving")

    def stop(self):
        print("This "+self.model+" is stopped")

# main.py (Object Instantiation)
car_1 = Car("Chevy", "Corvette", 2021, "blue")
car_2 = Car("Ford", "Mustang", 2022, "red")

print(car_1.make)
car_1.drive()
Car.wheels = 2 # Changes class variable for all instances
\`\`\`

## Inheritance
Inheritance allows a class (child) to inherit attributes and methods from another class (parent).
\`\`\`python
class Animal:
    alive = True
    def eat(self):
        print("This animal is eating")
    def sleep(self):
        print("This animal is sleeping")

# Rabbit inherits from Animal
class Rabbit(Animal):
    def run(self):
        print("This rabbit is running")

class Fish(Animal):
    def swim(self):
        print("This fish is swimming")

rabbit = Rabbit()
fish = Fish()

print(rabbit.alive) # True
fish.eat()
rabbit.run()
\`\`\`

## Method Overriding & Super Function
Child classes can override parent methods, or use \`super()\` to access parent methods.
\`\`\`python
class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

class Square(Rectangle):
    def __init__(self, length, width):
        super().__init__(length, width) # Calls Rectangle's __init__

    def area(self):
        return self.length * self.width

class Cube(Rectangle):
    def __init__(self, length, width, height):
        super().__init__(length, width)
        self.height = height

    def volume(self):
        return self.length * self.width * self.height
\`\`\`
      `
    },
    {
      id: "p9",
      title: "9. Advanced Topics (Lambda, Map, Filter)",
      content: `
# 9. Advanced Python Features

## Walrus Operator (:=)
Assigns values to variables as part of a larger expression. Available in Python 3.8+.
\`\`\`python
# Without Walrus
foods = list()
while True:
    food = input("What food do you like?: ")
    if food == "quit":
        break
    foods.append(food)

# With Walrus
foods = list()
while food := input("What food do you like?: ") != "quit":
    foods.append(food)
\`\`\`

## Higher Order Functions
Functions that either accept a function as an argument or return a function.
\`\`\`python
def loud(text):
    return text.upper()

def quiet(text):
    return text.lower()

# 'func' is a function passed as an argument
def hello(func):
    text = func("Hello")
    print(text)

hello(loud)  # HELLO
hello(quiet) # hello
\`\`\`

## Lambda Functions
A small anonymous function written in one line. Useful for passing functions as arguments.
\`\`\`python
# lambda parameters: expression
double = lambda x: x * 2
multiply = lambda x, y: x * y
full_name = lambda first_name, last_name: first_name + " " + last_name
age_check = lambda age: True if age >= 18 else False

print(double(5)) # 10
print(multiply(5, 6)) # 30
\`\`\`

## Map, Filter, Reduce
Powerful built-in functions for functional programming.
\`\`\`python
# MAP: applies a function to every item in an iterable
store = [("shirt",20.00), ("pants",25.00), ("jacket",50.00), ("socks",10.00)]
to_euros = lambda data: (data[0], data[1]*0.82)
store_euros = list(map(to_euros, store))

# FILTER: creates a collection of elements from an iterable for which a function returns True
friends = [("Rachel", 19), ("Monica", 18), ("Phoebe", 17), ("Joey", 16)]
age = lambda data: data[1] >= 18
drinking_buddies = list(filter(age, friends))

# REDUCE: applies a function cumulatively to items of an iterable, reducing it to a single value
import functools
letters = ["H","E","L","L","O"]
word = functools.reduce(lambda x, y: x + y, letters)
print(word) # HELLO
\`\`\`
      `
    },
    {
      id: "p10",
      title: "10. Comprehensions & Multithreading",
      content: `
# 10. Comprehensions and Multithreading

## List Comprehensions
A concise, readable way to create lists.
\`\`\`python
# Standard way
squares = []
for i in range(1, 11):
    squares.append(i * i)

# List Comprehension [expression for item in iterable]
squares = [i * i for i in range(1, 11)]

# List Comprehension with condition [expression for item in iterable if condition]
students = [100, 90, 80, 70, 60, 50, 40, 30, 0]
passed_students = [i for i in students if i >= 60]
# With if-else [expression_if_true if condition else expression_if_false for item in iterable]
passed_students_str = [i if i >= 60 else "FAILED" for i in students]
\`\`\`

## Dictionary Comprehensions
Create dictionaries using an expression.
\`\`\`python
# dictionary = {key: expression for (key,value) in iterable}
cities_in_F = {'New York': 32, 'Boston': 75, 'Los Angeles': 100, 'Chicago': 50}
cities_in_C = {key: round((value-32)*(5/9)) for (key,value) in cities_in_F.items()}
\`\`\`

## Multithreading
A thread is a flow of execution. Multithreading runs multiple threads concurrently.
\`\`\`python
import threading
import time

def eat_breakfast():
    time.sleep(3)
    print("You ate breakfast")

def drink_coffee():
    time.sleep(4)
    print("You drank coffee")

def study():
    time.sleep(5)
    print("You finish studying")

# Create threads targeting the functions
x = threading.Thread(target=eat_breakfast, args=())
x.start()

y = threading.Thread(target=drink_coffee, args=())
y.start()

z = threading.Thread(target=study, args=())
z.start()

# Wait for threads to finish before moving on
x.join()
y.join()
z.join()

print("Active threads:", threading.active_count())
print("Main Thread Finished")
\`\`\`
      `
    },
    {
      id: "p11",
      title: "11. GUI with Tkinter (Basics)",
      content: `
# 11. Graphical User Interfaces (GUI) with Tkinter

Tkinter is the standard GUI library for Python.

## Windows and Labels
\`\`\`python
from tkinter import *

window = Tk() # instantiate an instance of a window
window.geometry("420x420")
window.title("Bro Code First GUI Program")
window.config(background="#5cfcff")

# Creating a Label widget
label = Label(window, 
              text="Hello World", 
              font=('Arial', 40, 'bold'), 
              fg='#00FF00', 
              bg='black',
              relief=RAISED, # Border style
              bd=10,         # Border width
              padx=20,
              pady=20)
label.pack() # Add to window

window.mainloop() # Listen for events (must be at the end)
\`\`\`

## Buttons
\`\`\`python
from tkinter import *

count = 0
def click():
    global count
    count += 1
    print("You clicked the button", count, "times")

window = Tk()
button = Button(window,
                text="click me!",
                command=click, # Notice we don't use () here
                font=("Comic Sans", 30),
                fg="#00FF00",
                bg="black",
                activeforeground="#00FF00",
                activebackground="black",
                state=ACTIVE) # or DISABLED
button.pack()

window.mainloop()
\`\`\`

## Entry box (Text Input)
\`\`\`python
from tkinter import *

def submit():
    username = entry.get()
    print("Hello " + username)
    entry.config(state=DISABLED) # Disable after submit

def delete():
    entry.delete(0, END)

def backspace():
    entry.delete(len(entry.get())-1, END)

window = Tk()
entry = Entry(window,
              font=("Arial", 50),
              show="*") # Hides text for passwords
entry.pack(side=LEFT)

submit_button = Button(window, text="submit", command=submit)
submit_button.pack(side=RIGHT)

window.mainloop()
\`\`\`
      `
    },
    {
      id: "p12",
      title: "12. Advanced Tkinter & Games",
      content: `
# 12. Advanced Tkinter Concepts

## Checkboxes, Radio Buttons, and Scales
Tkinter provides many widgets for user interaction.
- **Checkbutton**: For boolean (True/False) inputs. Use an \`IntVar()\` or \`BooleanVar()\` to track state.
- **Radiobutton**: To select one option from a group. All radio buttons in a group must share the same \`IntVar()\`.
- **Scale**: A slider for numerical values.
- **Listbox**: A selectable list of text items.

## Canvas (Drawing & Animations)
The Canvas widget allows you to draw shapes and images.
\`\`\`python
from tkinter import *

window = Tk()
canvas = Canvas(window, height=500, width=500)
# create_line(startX, startY, endX, endY)
canvas.create_line(0, 0, 500, 500, fill="blue", width=5)
# create_rectangle(topLeftX, topLeftY, bottomRightX, bottomRightY)
canvas.create_rectangle(50, 50, 250, 250, fill="purple")
# create_oval(topLeftX, topLeftY, bottomRightX, bottomRightY of bounding box)
canvas.create_oval(100, 100, 200, 200, fill="red")
canvas.pack()

window.mainloop()
\`\`\`

## Keyboard & Mouse Events
You can bind functions to specific key presses or mouse clicks.
\`\`\`python
from tkinter import *

def doSomething(event):
    print("You pressed: " + event.keysym)
    # event.x and event.y give mouse coordinates

window = Tk()
window.bind("<Key>", doSomething) # binds ANY key press to the function
# window.bind("<Button-1>", doSomething) # Left mouse click
window.mainloop()
\`\`\`

## Building Games (Concept)
In Bro Code's full course, these concepts are combined to build complete applications like:
1. **A Calculator**: Using a \`grid()\` layout manager instead of \`pack()\` to arrange buttons in rows and columns.
2. **Tic-Tac-Toe**: Using a 2D list of Button objects and checking for winning combinations after every click.
3. **Snake Game**: Using a \`Canvas\` to draw squares representing the snake body and food. The snake is moved by updating coordinates in a loop and using \`window.after(delay, function)\` to create a game tick/animation frame.
      `
    }
  ],
  flashcards: [
    { id: "pf1", front: "How do you output text to the console in Python?", back: "print('Hello World')" },
    { id: "pf2", front: "How do you find the length of a string named 'text'?", back: "len(text)" },
    { id: "pf3", front: "What function gets input from the user?", back: "input('Enter something: ')" },
    { id: "pf4", front: "How do you convert a string '10' into an integer?", back: "int('10')" },
    { id: "pf5", front: "What is the result of 10 // 3 in Python?", back: "3 (Integer/Floor division)" },
    { id: "pf6", front: "How do you write a list containing 'apple', 'banana'?", back: "['apple', 'banana']" },
    { id: "pf7", front: "What's the difference between a list and a tuple?", back: "Lists are mutable [], Tuples are immutable ()" },
    { id: "pf8", front: "How do you define a function named 'greet'?", back: "def greet():" },
    { id: "pf9", front: "What does **kwargs do in a function definition?", back: "Packs keyword arguments into a dictionary." },
    { id: "pf10", front: "What block of code handles an exception?", back: "try... except..." },
    { id: "pf11", front: "How do you open a file named 'test.txt' for reading?", back: "with open('test.txt', 'r') as file:" },
    { id: "pf12", front: "What is an object in OOP?", back: "An instance of a class." },
    { id: "pf13", front: "What method acts as the constructor for a Python class?", back: "def __init__(self):" },
    { id: "pf14", front: "How does a class 'Dog' inherit from a class 'Animal'?", back: "class Dog(Animal):" },
    { id: "pf15", front: "What operator allows assigning a value within an expression?", back: "The Walrus Operator (:=)" },
    { id: "pf16", front: "Write a lambda function to double a number 'x'.", back: "double = lambda x: x * 2" },
    { id: "pf17", front: "What is a list comprehension?", back: "A concise way to create lists, e.g. [i*2 for i in range(5)]" },
    { id: "pf18", front: "What function applies a function to all items in an iterable?", back: "map(function, iterable)" },
    { id: "pf19", front: "Which module provides standard GUI tools in Python?", back: "tkinter" },
    { id: "pf20", front: "What Tkinter method runs the event loop for a window?", back: "window.mainloop()" }
  ],
  quiz: [
    {
      id: "pq1",
      question: "Which of the following is a mutable data type?",
      options: ["Tuple", "List", "String", "Integer"],
      correctAnswer: 1,
      explanation: "Lists are mutable, meaning their contents can be changed after creation. Tuples, Strings, and Integers are immutable."
    },
    {
      id: "pq2",
      question: "What is the output of print(3 * 'A')?",
      options: ["AAA", "3A", "Error", "A A A"],
      correctAnswer: 0,
      explanation: "Multiplying a string by an integer N concatenates the string N times."
    },
    {
      id: "pq3",
      question: "What does the Walrus operator (:=) do?",
      options: ["Checks for equality", "Checks for identity", "Assigns values as part of a larger expression", "Concatenates strings"],
      correctAnswer: 2,
      explanation: "Introduced in Python 3.8, it allows you to assign a value to a variable within an expression (like inside a while loop condition)."
    },
    {
      id: "pq4",
      question: "Which keyword is used for handling exceptions in Python?",
      options: ["catch", "except", "handle", "error"],
      correctAnswer: 1,
      explanation: "Python uses the try...except block to handle exceptions, whereas languages like Java use try...catch."
    },
    {
      id: "pq5",
      question: "How do you run the event loop in a Tkinter window named 'root'?",
      options: ["root.run()", "root.start()", "root.execute()", "root.mainloop()"],
      correctAnswer: 3,
      explanation: "The mainloop() method must be called to render the window and start listening for events (like clicks and keypresses)."
    }
  ]
};
