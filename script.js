// Initialize Lucide Icons
lucide.createIcons();

// --- DATA ---
const pythonCourse = {
  title: "Python Mastery",
  modules: [
    {
      id: "p1",
      title: "1. Python Setup & Basics",
      content: "# 1. Python Setup and Basics\nWelcome to Python! Python is a high-level, interpreted programming language known for its strict syntax rules regarding indentation and its highly readable nature.\n\n## The Print Statement\nThe `print()` function outputs text to the console.\n```python\nprint(\"I love pizza!\")\nprint(\"It's really good!\")\n```\n\n## Variables and Data Types\nA variable is a container for storing a data value. Python is dynamically typed.\n- **String (str):** A series of characters enclosed in quotes.\n- **Integer (int):** A whole number without a decimal point.\n- **Float (float):** A numeric value with a decimal component.\n- **Boolean (bool):** Represents `True` or `False`.\n\n```python\nname = \"Bro\"\nage = 21\nheight = 250.5\nhuman = True\n```\n"
    },
    {
      id: "p2",
      title: "2. String Methods & Math",
      content: "# 2. Strings and Math Functions\n\n## String Methods\nStrings are objects in Python, meaning they have built-in methods you can call using the dot notation (`.`).\n```python\nname = \"Bro Code\"\nprint(len(name))       # Output: 8\nprint(name.find(\"o\"))  # Output: 2\nprint(name.upper())    # \"BRO CODE\"\n```\n\n## Typecasting\nTypecasting is converting a variable from one data type to another.\n```python\nx = 1   # int\nx = float(x) # becomes 1.0\n```\n"
    },
    {
      id: "p3",
      title: "3. Slicing & Control Flow",
      content: "# 3. String Slicing and Control Flow\n\n## String Slicing\nSlicing extracts elements from another string using the syntax `[start:stop:step]`.\n```python\nname = \"Bro Code\"\nfirst_name = name[0:3] # \"Bro\"\n```\n\n## If Statements\nControl the flow of your program using boolean conditions.\n```python\nage = 18\nif age >= 18:\n    print(\"You are an adult!\")\nelse:\n    print(\"You are a child!\")\n```\n"
    }
  ],
  flashcards: [
    { front: "How do you output text to the console in Python?", back: "print('Hello World')" },
    { front: "How do you find the length of a string named 'text'?", back: "len(text)" },
    { front: "What function gets input from the user?", back: "input('Enter something: ')" },
    { front: "What's the difference between a list and a tuple?", back: "Lists are mutable [], Tuples are immutable ()" }
  ],
  quiz: [
    {
      question: "Which of the following is a mutable data type?",
      options: ["Tuple", "List", "String", "Integer"],
      correctAnswer: 1,
      explanation: "Lists are mutable, meaning their contents can be changed after creation."
    },
    {
      question: "What does the Walrus operator (:=) do?",
      options: ["Checks for equality", "Checks for identity", "Assigns values as part of a larger expression", "Concatenates strings"],
      correctAnswer: 2,
      explanation: "Introduced in Python 3.8, it allows you to assign a value to a variable within an expression."
    }
  ]
};

const ictCourse = {
  title: "ICT A/L Master",
  modules: [
    {
      id: "i9.6",
      title: "9.6 IDEs (Integrated Dev Environments)",
      content: "# 9.6 Basic features of an Integrated Development Environment (IDE)\n\n## Simple Explanation\nAn IDE gives you a single \"workshop\" (like PyCharm, VS Code, or IDLE) that contains everything you need to write, test, and fix your code efficiently.\n\n## Technical Deep Dive\n*   **Opening/Saving:** Manage projects easily.\n*   **Compiling/Interpreting:** Translating source code into machine code.\n*   **Executing (Running):** Running the translated code.\n*   **Debugging:** Pause execution (using *breakpoints*) and step through code line-by-line to find logical errors.\n"
    },
    {
      id: "i9.7",
      title: "9.7 Imperative Programming",
      content: "# 9.7 Imperative Programming\n\n## Simple Explanation\nYou are the boss giving the computer a sequence of direct commands to change its state and achieve a result.\n\n## Core Concepts\n*   **Structure:** Sequential execution.\n*   **Primitive Data Types:** Integer, Float, Character, Boolean.\n*   **Operators:** Arithmetic (`+`, `-`, `*`, `/`, `%`), Assignment (`=`).\n*   **I/O:** Input and Output.\n"
    },
    {
      id: "i9.8",
      title: "9.8 Control Structures",
      content: "# 9.8 Control Structures\n\nControl structures alter the sequential flow of execution, allowing programs to make decisions or repeat tasks.\n\n1. **Sequence:** Default line-by-line execution.\n2. **Selection:** Decision making using `if`, `else`, or `switch/case`.\n3. **Repetition:** Looping via `for` (fixed iterations) or `while` (condition-based).\n"
    }
  ],
  flashcards: [
    { front: "What does IDE stand for?", back: "Integrated Development Environment." },
    { front: "What is the main purpose of an IDE?", back: "To provide comprehensive facilities for software development in a single application." },
    { front: "What is Imperative Programming?", back: "A programming paradigm where the developer writes a sequence of explicit, step-by-step commands." },
    { front: "What are the three fundamental Control Structures in programming?", back: "Sequence, Selection, and Repetition (Iteration)." }
  ],
  quiz: [
    {
      question: "Which of the following best describes the role of a debugger in an IDE?",
      options: ["It writes code for you", "It converts high-level language into machine code", "It allows you to pause execution and inspect variables", "It compresses files"],
      correctAnswer: 2,
      explanation: "A debugger's primary function is to help you find logical errors by pausing execution and letting you inspect the program's state."
    },
    {
      question: "A program calculating the average temperature over 365 days should use which control structure?",
      options: ["Sequence", "Selection (If-Else)", "Repetition (For Loop)", "Nested Selection"],
      correctAnswer: 2,
      explanation: "Because we know exactly how many times the operation must occur (365 times), a For Loop is the correct choice."
    }
  ]
};

// --- APP STATE ---
let currentTrack = null;
let currentTrackData = null;
let currentModuleId = null;

// --- DOM ELEMENTS ---
const dashboardView = document.getElementById('dashboard-view');
const appView = document.getElementById('app-view');
const sidebar = document.getElementById('sidebar');
const brandTitle = document.getElementById('brand-title');
const moduleListContainer = document.getElementById('module-list');
const lessonContent = document.getElementById('lesson-content');

// --- NAVIGATION LOGIC ---
function selectTrack(track) {
  currentTrack = track;
  currentTrackData = track === 'python' ? pythonCourse : ictCourse;
  
  // Update Brand Title
  brandTitle.innerHTML = track === 'python' ? '<i data-lucide="code-2"></i> Python Mastery' : '<i data-lucide="monitor"></i> ICT A/L Master';
  lucide.createIcons();

  // Populate Modules
  populateModules();
  
  // Reset Flashcards & Quiz
  initFlashcards();
  initQuiz();

  // Switch Views
  dashboardView.classList.remove('view-active');
  dashboardView.classList.add('view-hidden');
  appView.classList.remove('view-hidden');
  appView.classList.add('view-active');

  // Go to course tab
  switchTab('course');
}

function goToDashboard() {
  currentTrack = null;
  currentTrackData = null;
  appView.classList.remove('view-active');
  appView.classList.add('view-hidden');
  dashboardView.classList.remove('view-hidden');
  dashboardView.classList.add('view-active');
}

function switchTab(tabId) {
  // Update Nav Buttons
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('nav-active'));
  document.getElementById("nav-" + tabId).classList.add('nav-active');

  // Update Tab Content
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('view-hidden'));
  document.getElementById("tab-" + tabId).classList.remove('view-hidden');

  closeSidebarIfOpen();
}

function toggleSidebar() {
  sidebar.classList.toggle('open');
}

function closeSidebarIfOpen() {
  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  }
}

// --- MODULES LOGIC ---
function populateModules() {
  moduleListContainer.innerHTML = '';
  currentTrackData.modules.forEach((module, index) => {
    const btn = document.createElement('button');
    btn.className = 'module-btn';
    btn.innerText = module.title;
    btn.onclick = () => loadModule(module.id, btn);
    moduleListContainer.appendChild(btn);

    // Load first by default
    if (index === 0) loadModule(module.id, btn);
  });
}

function loadModule(id, btnElement) {
  currentModuleId = id;
  
  // Update Active Button
  document.querySelectorAll('.module-btn').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  // Parse Markdown and Display
  const moduleData = currentTrackData.modules.find(m => m.id === id);
  if (moduleData) {
    if (typeof marked !== 'undefined' && typeof marked.parse === 'function') {
      lessonContent.innerHTML = marked.parse(moduleData.content);
    } else {
      lessonContent.innerHTML = "<p>Error loading Markdown parser. Please check your internet connection.</p>";
    }
  }
}

// --- FLASHCARDS LOGIC ---
let currentCardIndex = 0;
let isFlipped = false;

function initFlashcards() {
  currentCardIndex = 0;
  isFlipped = false;
  updateFlashcardUI();
}

function updateFlashcardUI() {
  if (!currentTrackData) return;
  const cards = currentTrackData.flashcards;
  const currentCard = cards[currentCardIndex];

  document.getElementById('flashcard-counter').innerText = "Card " + (currentCardIndex + 1) + " of " + cards.length;
  document.getElementById('flashcard-front').innerText = currentCard.front;
  document.getElementById('flashcard-back').innerText = currentCard.back;
  
  const el = document.getElementById('flashcard-element');
  if (isFlipped) {
    el.classList.add('is-flipped');
  } else {
    el.classList.remove('is-flipped');
  }
}

function flipCard() {
  isFlipped = !isFlipped;
  updateFlashcardUI();
}

function nextCard() {
  isFlipped = false;
  updateFlashcardUI(); // reset flip immediately
  setTimeout(() => {
    currentCardIndex = (currentCardIndex + 1) % currentTrackData.flashcards.length;
    updateFlashcardUI();
  }, 150);
}

function prevCard() {
  isFlipped = false;
  updateFlashcardUI();
  setTimeout(() => {
    const len = currentTrackData.flashcards.length;
    currentCardIndex = (currentCardIndex - 1 + len) % len;
    updateFlashcardUI();
  }, 150);
}

// --- PRACTICE ARENA LOGIC ---
let shuffledQuiz = [];
let currentQuizIndex = 0;
let quizScore = 0;
let quizSelectedAnswer = null;

function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function initQuiz() {
  shuffledQuiz = shuffleArray(currentTrackData.quiz);
  currentQuizIndex = 0;
  quizScore = 0;
  quizSelectedAnswer = null;
  
  document.getElementById('quiz-score-view').classList.add('view-hidden');
  document.getElementById('quiz-question-view').classList.remove('view-hidden');
  
  renderQuestion();
}

function restartQuiz() {
  initQuiz();
}

function renderQuestion() {
  const q = shuffledQuiz[currentQuizIndex];
  
  document.getElementById('quiz-counter').innerText = "Question " + (currentQuizIndex + 1) + " of " + shuffledQuiz.length;
  document.getElementById('quiz-current-score').innerText = "Score: " + quizScore;
  document.getElementById('quiz-question-text').innerText = q.question;
  
  const optionsContainer = document.getElementById('quiz-options-container');
  optionsContainer.innerHTML = '';
  
  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'space-between';
    
    const span = document.createElement('span');
    span.innerText = opt;
    div.appendChild(span);
    
    // Icon placeholder
    const iconSpan = document.createElement('span');
    iconSpan.id = "opt-icon-" + index;
    div.appendChild(iconSpan);
    
    btn.appendChild(div);
    
    btn.onclick = () => selectAnswer(index);
    btn.id = "opt-btn-" + index;
    
    optionsContainer.appendChild(btn);
  });
  
  document.getElementById('quiz-explanation-view').classList.add('view-hidden');
  quizSelectedAnswer = null;
}

function selectAnswer(index) {
  if (quizSelectedAnswer !== null) return; // Prevent multiple clicks
  
  quizSelectedAnswer = index;
  const q = shuffledQuiz[currentQuizIndex];
  const isCorrect = index === q.correctAnswer;
  
  if (isCorrect) quizScore++;
  
  // Update Buttons
  q.options.forEach((opt, i) => {
    const btn = document.getElementById("opt-btn-" + i);
    btn.disabled = true;
    
    if (i === q.correctAnswer) {
      btn.classList.add('correct');
      document.getElementById("opt-icon-" + i).innerHTML = '<i data-lucide="check-circle" color="#10b981"></i>';
    } else if (i === index) {
      btn.classList.add('wrong');
      document.getElementById("opt-icon-" + i).innerHTML = '<i data-lucide="x-circle" color="#ef4444"></i>';
    }
  });
  lucide.createIcons();
  
  // Show Explanation
  const expView = document.getElementById('quiz-explanation-view');
  expView.classList.remove('view-hidden');
  
  document.getElementById('quiz-explanation-title').innerText = isCorrect ? "Correct!" : "Incorrect.";
  document.getElementById('quiz-explanation-title').style.color = isCorrect ? "#10b981" : "#ef4444";
  document.getElementById('quiz-explanation-text').innerText = q.explanation;
  
  const nextBtn = document.getElementById('quiz-next-btn');
  nextBtn.innerText = currentQuizIndex + 1 < shuffledQuiz.length ? "Next Question" : "View Results";
}

function nextQuestion() {
  if (currentQuizIndex + 1 < shuffledQuiz.length) {
    currentQuizIndex++;
    renderQuestion();
  } else {
    // Show Results
    document.getElementById('quiz-question-view').classList.add('view-hidden');
    const scoreView = document.getElementById('quiz-score-view');
    scoreView.classList.remove('view-hidden');
    
    document.getElementById('final-score-text').innerText = quizScore + " / " + shuffledQuiz.length;
    document.getElementById('final-score-message').innerText = 
      quizScore === shuffledQuiz.length ? "Perfect score! You are a master! 🏆" : "Great job! Keep practicing to improve your skills.";
  }
}
