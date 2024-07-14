import React, { useEffect } from 'react';
import '../Style/Progressbar.css';

const ProgressBar = ({ skill, percentage }) => {

  useEffect(() => {

  }, [])
  return (
    <div className="progress-bar-wrapper">
    <span className="skill-name">{skill}</span>
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%`, animation: `changeWidth 2s` }}>
        {percentage}%
      </div>
    </div>
  </div>
  );
};

export default ProgressBar;
