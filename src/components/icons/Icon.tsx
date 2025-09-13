import React from 'react';
import './Icon.css';

interface IconProps {
    name: string;
    size?: number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({
    name,
    size = 24,
    color = 'var(--foreground-base-primary)',
    className = '',
    style,
    children
}) => {
    const iconStyle = {
        width: size,
        height: size,
        color,
        ...style
    };

    return (
        <div
            className={`icon icon-${name} ${className}`}
            style={iconStyle}
        >
            {children}
        </div>
    );
};

export default Icon;
