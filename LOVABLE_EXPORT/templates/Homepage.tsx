import React from 'react';
import SectionCarousel from '../organisms/SectionCarousel';
import SectionHero from '../organisms/SectionHero';
import Divider from '../organisms/Divider';
import './Homepage.css';

const Homepage: React.FC = () => {
    return (
        <div className="homepage">
            <SectionCarousel />
            <SectionHero />
            <Divider />
            <SectionHero />
        </div>
    );
};

export default Homepage;
