import React from 'react';
import './IconLine.css';

interface IconLineProps {
  icon?: React.ReactNode;
  text?: string;
  showIcon?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const IconLine: React.FC<IconLineProps> = ({
  icon,
  text = "Priority reservations",
  showIcon = true,
  className = '',
  style
}) => {
  return (
    <div className={`icon-line ${className}`} style={style}>
      {showIcon && (
        <div className="icon-line-icon">
          {icon || (
            <svg width="20" height="20" viewBox="0 0 16 11" fill="none">
              <path 
                d="M14.3333 1L5.16667 10.1667L1 6" 
                stroke="var(--foreground-base-primary)" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.66667" 
              />
            </svg>
          )}
        </div>
      )}
      <div className="icon-line-content">
        <p className="icon-line-text">{text}</p>
      </div>
    </div>
  );
};

export default IconLine;
