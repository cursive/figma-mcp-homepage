import React from 'react';
import PanelHeader from '../molecules/PanelHeader';
import './SectionSupporting.css';

interface SectionSupportingProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  showImage?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const SectionSupporting: React.FC<SectionSupportingProps> = ({
  title = "What you'll get",
  description = "I grew up watching my aunt cook and exploring San Francisco's food scene. Instead of a night out, I wanted to create something you could enjoy at home—relaxed, personal, and just as special.",
  imageUrl,
  showImage = true,
  showTitle = true,
  showDescription = true,
  className = '',
  style
}) => {
  return (
    <div className={`section-supporting ${className}`} style={style}>
      {showTitle && (
        <div className="section-supporting-header">
          <PanelHeader 
            variant="primary"
            showChevron={false}
            showSubtitle={false}
            title={title}
          />
        </div>
      )}
      
      <div className="section-supporting-content">
        {showImage && (
          <div className="section-supporting-image">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt="Supporting content" 
                className="section-supporting-image-content"
              />
            ) : (
              <div className="section-supporting-image-placeholder">
                <div className="placeholder-content">
                  <p>Image placeholder</p>
                </div>
              </div>
            )}
          </div>
        )}
        
        {showDescription && (
          <div className="section-supporting-description">
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionSupporting;
