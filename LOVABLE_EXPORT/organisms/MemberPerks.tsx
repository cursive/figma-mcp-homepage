import React from 'react';
import IconLine from '../molecules/IconLine';
import './MemberPerks.css';

interface MemberPerksProps {
  title?: string;
  perks?: string[];
  showTitle?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MemberPerks: React.FC<MemberPerksProps> = ({
  title = "Member perks",
  perks = [
    "Priority reservations",
    "Exclusive menu items", 
    "Member-only events"
  ],
  showTitle = true,
  className = '',
  style
}) => {
  return (
    <div className={`member-perks ${className}`} style={style}>
      {showTitle && (
        <h4 className="member-perks-title">{title}</h4>
      )}
      <div className="member-perks-list">
        {perks.map((perk, index) => (
          <IconLine 
            key={index}
            text={perk}
            showIcon={true}
          />
        ))}
      </div>
    </div>
  );
};

export default MemberPerks;
