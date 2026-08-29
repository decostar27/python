import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function CourseModules({ modules }) {
  const [activeModule, setActiveModule] = useState(modules[0].id);

  const selectedModule = modules.find(m => m.id === activeModule);

  return (
    <div style={{ display: 'flex', gap: '32px', height: '100%' }}>
      {/* Module List (Scrollable Sidebar) */}
      <div style={{ width: '300px', flexShrink: 0, overflowY: 'auto', paddingRight: '16px' }}>
        <h2 style={{ marginBottom: '24px' }}>Modules</h2>
        <div className="module-list">
          {modules.map((module) => (
            <button
              key={module.id}
              className={`module-btn ${activeModule === module.id ? 'active' : ''}`}
              onClick={() => setActiveModule(module.id)}
            >
              {module.title}
            </button>
          ))}
        </div>
      </div>

      {/* Module Content */}
      <div className="glass-panel" style={{ flex: 1, overflowY: 'auto' }}>
        <div className="lesson-content">
          <ReactMarkdown>{selectedModule.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
