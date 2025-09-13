import React from 'react';
import Icon from '../Icon';

interface YoutubeIconProps {
    size?: number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
}

const YoutubeIcon: React.FC<YoutubeIconProps> = ({
    size = 24,
    color = 'var(--foreground-base-primary)',
    className = '',
    style
}) => {
    return (
        <Icon
            name="youtube"
            size={size}
            color={color}
            className={className}
            style={style}
        >
            <svg
                fill="none"
                viewBox="0 0 23 17"
                style={{ width: '100%', height: '100%' }}
            >
                <g>
                    <path
                        d="M1.52393 13.0664C0.825356 9.76967 0.825356 6.36314 1.52393 3.06641C1.61572 2.73162 1.79307 2.42648 2.03854 2.18101C2.28401 1.93554 2.58914 1.75819 2.92393 1.66641C8.28738 0.777865 13.7605 0.777865 19.1239 1.66641C19.4587 1.75819 19.7639 1.93554 20.0093 2.18101C20.2548 2.42648 20.4321 2.73162 20.5239 3.06641C21.2225 6.36314 21.2225 9.76967 20.5239 13.0664C20.4321 13.4012 20.2548 13.7063 20.0093 13.9518C19.7639 14.1973 19.4587 14.3746 19.1239 14.4664C13.7605 15.3551 8.28737 15.3551 2.92393 14.4664C2.58914 14.3746 2.28401 14.1973 2.03854 13.9518C1.79307 13.7063 1.61572 13.4012 1.52393 13.0664Z"
                        stroke={color}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                    <path
                        d="M9.02393 11.0664L14.0239 8.06641L9.02393 5.06641V11.0664Z"
                        stroke={color}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                </g>
            </svg>
        </Icon>
    );
};

export default YoutubeIcon;
