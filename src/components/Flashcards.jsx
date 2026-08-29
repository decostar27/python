import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';

export default function Flashcards({ flashcards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % flashcards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    }, 150);
  };

  return (
    <div className="flashcards-container">
      <div style={{ color: 'var(--text-muted)' }}>
        Card {currentIndex + 1} of {flashcards.length}
      </div>

      <div className="card-scene" onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
          <div className="card-face card-front">
            {flashcards[currentIndex].front}
          </div>
          <div className="card-face card-back">
            {flashcards[currentIndex].back}
          </div>
        </div>
      </div>

      <div className="controls">
        <button className="btn-primary" onClick={handlePrev}>
          <ChevronLeft size={20} /> Prev
        </button>
        <button className="btn-primary" onClick={() => setIsFlipped(!isFlipped)}>
          <RotateCw size={20} /> Flip
        </button>
        <button className="btn-primary" onClick={handleNext}>
          Next <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
