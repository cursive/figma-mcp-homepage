import React from 'react';
import Icon from '../Icon';

interface MenuIconProps {
    size?: number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
}

const MenuIcon: React.FC<MenuIconProps> = ({
    size = 24,
    color = 'var(--foreground-base-primary)',
    className = '',
    style
}) => {
    return (
        <Icon
            name="menu"
            size={size}
            color={color}
            className={className}
            style={style}
        >
            <svg
                fill="none"
                viewBox="0 0 18 14"
                style={{ width: '100%', height: '100%' }}
            >
                <path
                    d="M1 7H17M1 1H17M1 13H17"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
            </svg>
        </Icon>
    );
};

export default MenuIcon;
