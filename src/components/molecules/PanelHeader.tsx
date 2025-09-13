import React from 'react';
import './PanelHeader.css';

interface PanelHeaderProps {
    variant?: 'primary' | 'secondary';
    label?: string;
    title?: string;
    subtitle?: string;
    showChevron?: boolean;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
}

const PanelHeader: React.FC<PanelHeaderProps> = ({
    variant = 'primary',
    label = "What you'll get",
    title = "What you'll get",
    subtitle = "Sub",
    showChevron = true,
    onClick,
    className = '',
    style
}) => {
    return (
        <div
            className={`panel-header panel-header-${variant} ${className}`}
            onClick={onClick}
            style={style}
        >
            <div className="panel-header-label">
                <p>{label}</p>
            </div>
            <div className="panel-header-title">
                <div className="panel-header-title-text">
                    <p>{title}</p>
                </div>
                {showChevron && (
                    <div className="panel-header-chevron">
                        <svg className="chevron-icon" fill="none" viewBox="0 0 16 9">
                            <path
                                d="M15 1L8 8L1 1"
                                stroke="var(--foreground-base-primary)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                )}
            </div>
            <div className="panel-header-subtitle">
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default PanelHeader;
