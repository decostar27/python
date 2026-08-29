import React, { useState, useEffect } from 'react';
import { RotateCcw, CheckCircle, XCircle } from 'lucide-react';

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export default function PracticeArena({ quiz }) {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setShuffledQuestions(shuffleArray(quiz));
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  }, [quiz]);

  const handleAnswerClick = (index) => {
    if (selectedAnswer !== null) return; // Prevent multiple clicks

    setSelectedAnswer(index);

    if (index === shuffledQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setShuffledQuestions(shuffleArray(quiz)); // Shuffle again!
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  if (shuffledQuestions.length === 0) return null;

  const currentQ = shuffledQuestions[currentQuestion];

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="glass-panel score-display">
          <h2>Quiz Complete!</h2>
          <div className="score-text">
            {score} / {shuffledQuestions.length}
          </div>
          <p>
            {score === shuffledQuestions.length 
              ? "Perfect score! You are a master! 🏆" 
              : "Great job! Keep practicing to improve your skills."}
          </p>
          <button className="btn-primary" onClick={restartQuiz} style={{margin: '24px auto 0'}}>
            <RotateCcw size={20} /> Try Again (Shuffle)
          </button>
        </div>
      ) : (
        <div className="glass-panel question-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: 'var(--text-muted)' }}>
            <span>Question {currentQuestion + 1} of {shuffledQuestions.length}</span>
            <span>Score: {score}</span>
          </div>
          <h2 className="question-text">{currentQ.question}</h2>
          
          <div className="options-grid">
            {currentQ.options.map((option, index) => {
              let btnClass = "option-btn";
              if (selectedAnswer !== null) {
                if (index === currentQ.correctAnswer) {
                  btnClass += " correct";
                } else if (index === selectedAnswer) {
                  btnClass += " wrong";
                }
              }

              return (
                <button
                  key={index}
                  className={btnClass}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>{option}</span>
                    {selectedAnswer !== null && index === currentQ.correctAnswer && (
                      <CheckCircle size={20} color="#10b981" />
                    )}
                    {selectedAnswer === index && index !== currentQ.correctAnswer && (
                      <XCircle size={20} color="#ef4444" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {selectedAnswer !== null && (
            <div className="explanation">
              <strong>{selectedAnswer === currentQ.correctAnswer ? "Correct!" : "Incorrect."}</strong> 
              <br/>
              {currentQ.explanation}
              <div style={{marginTop: '16px', display: 'flex', justifyContent: 'flex-end'}}>
                <button className="btn-primary" onClick={handleNextQuestion}>
                  {currentQuestion + 1 < shuffledQuestions.length ? "Next Question" : "View Results"}
                </button>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
