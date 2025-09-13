import React from 'react';
import SectionCarousel from './SectionCarousel';
import SectionHero from './SectionHero';
import Divider from './Divider';
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
