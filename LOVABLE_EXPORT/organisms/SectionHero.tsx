import React from 'react';
import Tile from '../molecules/Tile';
import './SectionHero.css';

const SectionHero: React.FC = () => {
    return (
        <div className="section-hero">
            <div className="logo">
                <img src="data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFRUUiIC8+CiAgICA8L3N2Zz4=" alt="Logo" />
            </div>
            <h1 className="title">THE SUPPER CLUB</h1>
            <p className="description">Each month we bring you a tasting menu featuring signature dishes to prepare at home, and some members-only surprises</p>
            <div className="rating">
                <div className="stars">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                </div>
                <p className="rating-text">Based on 83 reviews</p>
            </div>
            <div className="tile-container">
                <Tile showRightLabel={true} />
            </div>
        </div>
    );
};

export default SectionHero;
