import React from 'react';
import IconLine from '../molecules/IconLine';
import './WhatYouNeedToKnow.css';

interface WhatYouNeedToKnowProps {
  title?: string;
  items?: string[];
  showTitle?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const WhatYouNeedToKnow: React.FC<WhatYouNeedToKnowProps> = ({
  title = "What you need to know",
  items = [
    "Pick-up or delivery",
    "Next order June 2025",
    "Pause or cancel any time"
  ],
  showTitle = true,
  className = '',
  style
}) => {
  const getIconForItem = (item: string, index: number) => {
    // Different icons for different items
    if (item.includes("Pick-up") || item.includes("delivery")) {
      return (
        <svg width="20" height="20" viewBox="0 0 17 19" fill="none">
          <path 
            d="M8.5 17.665V9.33171M8.5 9.33171L1.2417 5.16504M8.5 9.33171L15.7584 5.16504M4.75 2.89006L12.25 7.18172M7.66667 17.44C7.92003 17.5862 8.20744 17.6632 8.5 17.6632C8.79256 17.6632 9.07997 17.5862 9.33333 17.44L15.1667 14.1066C15.4198 13.9605 15.63 13.7504 15.7763 13.4973C15.9225 13.2443 15.9997 12.9572 16 12.665V5.99829C15.9997 5.70602 15.9225 5.41897 15.7763 5.16593C15.63 4.91289 15.4198 4.70276 15.1667 4.55662L9.33333 1.22329C9.07997 1.07701 8.79256 1 8.5 1C8.20744 1 7.92003 1.07701 7.66667 1.22329L1.83333 4.55662C1.58022 4.70276 1.36998 4.91289 1.22372 5.16593C1.07745 5.41897 1.0003 5.70602 1 5.99829V12.665C1.0003 12.9572 1.07745 13.2443 1.22372 13.4973C1.36998 13.7504 1.58022 13.9605 1.83333 14.1066L7.66667 17.44Z" 
            stroke="var(--foreground-base-primary)" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
          />
        </svg>
      );
    } else if (item.includes("Next order") || item.includes("June")) {
      return (
        <svg width="20" height="20" viewBox="0 0 17 19" fill="none">
          <path 
            d="M5.16667 1V4.33333M11.8333 1V4.33333M1 7.66667H16M5.16667 11H5.175M8.5 11H8.50833M11.8333 11H11.8417M5.16667 14.3333H5.175M8.5 14.3333H8.50833M11.8333 14.3333H11.8417M2.66667 2.66667H14.3333C15.2538 2.66667 16 3.41286 16 4.33333V16C16 16.9205 15.2538 17.6667 14.3333 17.6667H2.66667C1.74619 17.6667 1 16.9205 1 16V4.33333C1 3.41286 1.74619 2.66667 2.66667 2.66667Z" 
            stroke="var(--foreground-base-primary)" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
          />
        </svg>
      );
    } else {
      return (
        <svg width="20" height="20" viewBox="0 0 19 19" fill="none">
          <path 
            d="M7.66667 11.8333V6.83333M11 11.8333V6.83333M17.6667 9.33333C17.6667 13.9357 13.9357 17.6667 9.33333 17.6667C4.73096 17.6667 1 13.9357 1 9.33333C1 4.73096 4.73096 1 9.33333 1C13.9357 1 17.6667 4.73096 17.6667 9.33333Z" 
            stroke="var(--foreground-base-primary)" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
          />
        </svg>
      );
    }
  };

  return (
    <div className={`what-you-need-to-know ${className}`} style={style}>
      {showTitle && (
        <h4 className="what-you-need-to-know-title">{title}</h4>
      )}
      <div className="what-you-need-to-know-list">
        {items.map((item, index) => (
          <IconLine 
            key={index}
            text={item}
            icon={getIconForItem(item, index)}
            showIcon={true}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatYouNeedToKnow;
