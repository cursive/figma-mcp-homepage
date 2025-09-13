import React from 'react';
import Icon from '../Icon';

interface RadioEmptyIconProps {
    size?: number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
}

const RadioEmptyIcon: React.FC<RadioEmptyIconProps> = ({
    size = 24,
    color = 'var(--foreground-base-primary)',
    className = '',
    style
}) => {
    return (
        <Icon
            name="radio-empty"
            size={size}
            color={color}
            className={className}
            style={style}
        >
            <svg
                fill="none"
                viewBox="0 0 22 22"
                style={{ width: '100%', height: '100%' }}
            >
                <path
                    d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
            </svg>
        </Icon>
    );
};

export default RadioEmptyIcon;
