import React from 'react';
import Icon from './Icon';

// This is a utility component for bulk importing icons from Figma
// It can be used to generate all the Lucida icons systematically

interface IconImporterProps {
    iconName: string;
    viewBox: string;
    path: string;
    size?: number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    strokeWidth?: number;
    fill?: string;
}

const IconImporter: React.FC<IconImporterProps> = ({
    iconName,
    viewBox,
    path,
    size = 24,
    color = 'var(--foreground-base-primary)',
    className = '',
    style,
    strokeWidth = 2,
    fill = 'none'
}) => {
    return (
        <Icon
            name={iconName}
            size={size}
            color={color}
            className={className}
            style={style}
        >
            <svg
                fill={fill}
                viewBox={viewBox}
                style={{ width: '100%', height: '100%' }}
            >
                <path
                    d={path}
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={strokeWidth}
                    fill={fill}
                />
            </svg>
        </Icon>
    );
};

export default IconImporter;
