import React from 'react';
import Icon from '../Icon';

interface ZoomInIconProps {
    size?: number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
}

const ZoomInIcon: React.FC<ZoomInIconProps> = ({
    size = 24,
    color = 'var(--foreground-base-primary)',
    className = '',
    style
}) => {
    return (
        <Icon
            name="zoom-in"
            size={size}
            color={color}
            className={className}
            style={style}
        >
            <svg
                fill="none"
                viewBox="0 0 20 20"
                style={{ width: '100%', height: '100%' }}
            >
                <path
                    d="M19 18.9999L14.65 14.6499M9 6V12M6 9H12M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
            </svg>
        </Icon>
    );
};

export default ZoomInIcon;
