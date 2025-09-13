import React, { useState } from 'react';
import './Tile.css';

interface TileProps {
    title?: string;
    price?: string;
    additionalPrice?: string;
}

const Tile: React.FC<TileProps> = ({
    title = "Delivery",
    price = "$73",
    additionalPrice = "+$15"
}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    };

    return (
        <div
            className={`tile ${isSelected ? 'tile--selected' : 'tile--default'}`}
            onClick={handleClick}
        >
            <div className="tile__content">
                <div className="tile__top">
                    <div className="tile__left">
                        <div className="tile__heart">
                            <HeartIcon />
                        </div>
                        <div className="tile__title">
                            <p>{title}</p>
                        </div>
                    </div>
                    <div className="tile__right">
                        <div className="tile__additional-price">
                            <p>{additionalPrice}</p>
                        </div>
                        <div className="tile__radio">
                            {isSelected ? <RadioCheckedIcon /> : <RadioEmptyIcon />}
                        </div>
                    </div>
                </div>
                <div className="tile__price">
                    <p>{price}</p>
                </div>
            </div>
            <div className="tile__border" />
        </div>
    );
};

// Heart Icon Component
const HeartIcon: React.FC = () => (
    <div className="heart-icon">
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
            <path
                d="M18 12C19.49 10.54 21 8.79 21 6.5C21 5.04131 20.4205 3.64236 19.3891 2.61091C18.3576 1.57946 16.9587 1 15.5 1C13.74 1 12.5 1.5 11 3C9.5 1.5 8.26 1 6.5 1C5.04131 1 3.64236 1.57946 2.61091 2.61091C1.57946 3.64236 1 5.04131 1 6.5C1 8.8 2.5 10.55 4 12L11 19L18 12Z"
                stroke="var(--foreground-base-primary)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    </div>
);

// Radio Empty Icon Component
const RadioEmptyIcon: React.FC = () => (
    <div className="radio-empty-icon">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
                d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                stroke="var(--foreground-base-primary)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    </div>
);

// Radio Checked Icon Component
const RadioCheckedIcon: React.FC = () => (
    <div className="radio-checked-icon">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
                d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                stroke="var(--foreground-base-primary)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="radio-checked-icon__dot">
            <circle cx="6" cy="6" r="6" fill="var(--foreground-base-primary)" />
        </svg>
    </div>
);

export default Tile;
