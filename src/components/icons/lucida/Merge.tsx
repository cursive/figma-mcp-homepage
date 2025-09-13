import React from 'react';
import Icon from '../Icon';

interface MergeIconProps {
    size?: number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
}

const MergeIcon: React.FC<MergeIconProps> = ({
    size = 24,
    color = 'var(--foreground-base-primary)',
    className = '',
    style
}) => {
    return (
        <Icon
            name="merge"
            size={size}
            color={color}
            className={className}
            style={style}
        >
            <svg
                fill="none"
                viewBox="0 0 18 22"
                style={{ width: '100%', height: '100%' }}
            >
                <path
                    d="M5 5L9 1M9 1L13 5M9 1V11.3C9.00571 11.8326 8.90499 12.361 8.70373 12.8542C8.50247 13.3474 8.20474 13.7954 7.828 14.172L1 21M17 21L12 16"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
            </svg>
        </Icon>
    );
};

export default MergeIcon;
