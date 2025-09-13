import React from 'react';
import './RadioChecked.css';

interface RadioCheckedProps {
    className?: string;
    style?: React.CSSProperties;
}

const RadioChecked: React.FC<RadioCheckedProps> = ({
    className = '',
    style
}) => {
    return (
        <div className={`radio-checked ${className}`} style={style}>
            <svg
                className="radio-checked-outline"
                fill="none"
                viewBox="0 0 22 22"
            >
                <path
                    d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                    stroke="var(--foreground-base-primary)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
            </svg>
            <svg
                className="radio-checked-dot"
                fill="none"
                viewBox="0 0 12 12"
            >
                <circle
                    cx="6"
                    cy="6"
                    r="6"
                    fill="var(--foreground-base-primary)"
                />
            </svg>
        </div>
    );
};

export default RadioChecked;
