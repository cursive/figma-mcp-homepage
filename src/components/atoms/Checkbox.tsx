import React from 'react';
import './Checkbox.css';

interface CheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
    style?: React.CSSProperties;
}

const Checkbox: React.FC<CheckboxProps> = ({
    checked = false,
    onChange,
    className = '',
    style
}) => {
    const handleClick = () => {
        onChange?.(!checked);
    };

    return (
        <div
            className={`checkbox ${checked ? 'checkbox-checked' : 'checkbox-unchecked'} ${className}`}
            onClick={handleClick}
            style={style}
        >
            <div className="checkbox-background">
                <div className="checkbox-border" />
            </div>
            {checked && (
                <div className="checkbox-check">
                    <svg className="checkbox-check-icon" fill="none" viewBox="0 0 13 9">
                        <path
                            d="M11.6667 1L4.33333 8.33333L1 5"
                            stroke="var(--foreground-invert-primary)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default Checkbox;
