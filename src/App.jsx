import React, { useState } from 'react';
import CourseModules from './components/CourseModules';
import Flashcards from './components/Flashcards';
import PracticeArena from './components/PracticeArena';
import { Book, Layers, CheckSquare, Menu, X, ArrowLeft } from 'lucide-react';
import { pythonCourse } from './data/pythonData';
import { ictCourse } from './data/ictData';
import './index.css';

function App() {
  const [currentTrack, setCurrentTrack] = useState(null); // 'python' or 'ict'
  const [activeTab, setActiveTab] = useState('course');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  if (!currentTrack) {
    return (
      <div className="app-container">
        <div className="dashboard-container">
          <h1 className="dashboard-header">Select Your Learning Track</h1>
          <div className="track-cards-grid">
            
            <div className="glass-panel track-card" onClick={() => setCurrentTrack('python')}>
              <h2>🐍 Python Mastery</h2>
              <p>{pythonCourse.description}</p>
              <button className="btn-primary">Start Python Course</button>
            </div>

            <div className="glass-panel track-card" onClick={() => setCurrentTrack('ict')}>
              <h2>💻 ICT A/L Master</h2>
              <p>{ictCourse.description}</p>
              <button className="btn-primary" style={{backgroundColor: 'var(--secondary)'}}>Start ICT Course</button>
            </div>

          </div>
        </div>
      </div>
    );
  }

  const trackData = currentTrack === 'python' ? pythonCourse : ictCourse;

  return (
    <div className="app-container">
      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="brand">
          <span>{currentTrack === 'python' ? '🐍' : '💻'}</span> {trackData.title.split(' ')[0]} Master
        </div>
        
        <button 
          className="nav-btn"
          onClick={() => {
            setCurrentTrack(null);
            setIsSidebarOpen(false);
          }}
          style={{marginBottom: '20px', color: 'var(--text-main)', border: '1px solid rgba(255,255,255,0.2)'}}
        >
          <ArrowLeft size={20} /> Back to Dashboard
        </button>

        <button 
          className={`nav-btn ${activeTab === 'course' ? 'active' : ''}`}
          onClick={() => { setActiveTab('course'); setIsSidebarOpen(false); }}
        >
          <Book size={20} /> Course Modules
        </button>
        
        <button 
          className={`nav-btn ${activeTab === 'flashcards' ? 'active' : ''}`}
          onClick={() => { setActiveTab('flashcards'); setIsSidebarOpen(false); }}
        >
          <Layers size={20} /> Flashcards
        </button>
        
        <button 
          className={`nav-btn ${activeTab === 'practice' ? 'active' : ''}`}
          onClick={() => { setActiveTab('practice'); setIsSidebarOpen(false); }}
        >
          <CheckSquare size={20} /> Practice Arena
        </button>
      </div>

      {/* Main Content Area */}
      <div className="main-content" onClick={() => { if(isSidebarOpen) setIsSidebarOpen(false) }}>
        {activeTab === 'course' && <CourseModules modules={trackData.modules} />}
        {activeTab === 'flashcards' && <Flashcards flashcards={trackData.flashcards} />}
        {activeTab === 'practice' && <PracticeArena quiz={trackData.quiz} />}
      </div>
    </div>
  );
}

export default App;
