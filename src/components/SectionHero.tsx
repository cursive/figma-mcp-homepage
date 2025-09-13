import React from 'react';
import Tile from './Tile';
import './SectionHero.css';

const SectionHero: React.FC = () => {
    return (
        <div className="section-hero">
            <div className="hero-content">
                <div className="logo">
                    {/* Placeholder for logo - you can replace with actual logo */}
                    <div className="logo-placeholder">LOGO</div>
                </div>

                <div className="title">
                    <p>THE SUPPER CLUB</p>
                </div>

                <div className="description">
                    <p>Each month we bring you a tasting menu featuring signature dishes to prepare at home, and some members-only surprises</p>
                </div>

                <div className="rating">
                    <div className="stars">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                    <div className="review-text">
                        <p>Based on 83 reviews</p>
                    </div>
                </div>

                <div className="tile-container">
                    <Tile />
                </div>
            </div>
        </div>
    );
};

export default SectionHero;
