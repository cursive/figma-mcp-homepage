import React, { useState } from 'react';
import { HeartIcon, RadioEmptyIcon, RadioCheckedIcon } from '../icons';
import './Tile.css';

interface TileProps {
    // Variants
    status?: 'default' | 'selected';

    // Boolean toggles from Figma
    showIcon?: boolean;
    showRightLabel?: boolean;
    showPill?: boolean;
    showDescription?: boolean;
    showRadio?: boolean;

    // Text content
    title?: string;
    description?: string;
    price?: string;
    additionalPrice?: string;

    // Interactive callbacks
    onClick?: () => void;
    onChange?: (value: boolean) => void;

    // Style overrides
    className?: string;
    style?: React.CSSProperties;
}

const Tile: React.FC<TileProps> = ({
    status = 'default',
    showIcon = true,
    showRightLabel = false,
    showPill = true,
    showDescription = true,
    showRadio = true,
    title = 'Delivery',
    description,
    price = '$73',
    additionalPrice = '+$15',
    onClick,
    onChange,
    className = '',
    style
}) => {
    const [isSelected, setIsSelected] = useState(status === 'selected');

    const handleClick = () => {
        const newSelected = !isSelected;
        setIsSelected(newSelected);
        onClick?.();
        onChange?.(newSelected);
    };

    return (
        <div
            className={`tile ${isSelected ? 'tile-selected' : 'tile-default'} ${className}`}
            onClick={handleClick}
            style={style}
        >
            <div className="tile-content">
                <div className="tile-top">
                    <div className="tile-left">
                        {showIcon && (
                            <div className="tile-icon">
                                <HeartIcon size={24} />
                            </div>
                        )}
                        <div className="tile-title">
                            <p>{title}</p>
                        </div>
                    </div>
                    <div className="tile-right">
                        {showRightLabel && additionalPrice && (
                            <div className="tile-additional-price">
                                <p>{additionalPrice}</p>
                            </div>
                        )}
                        {showRadio && (
                            <div className="tile-radio">
                                {isSelected ? <RadioCheckedIcon size={24} /> : <RadioEmptyIcon size={24} />}
                            </div>
                        )}
                    </div>
                </div>
                {showDescription && price && (
                    <div className="tile-price">
                        <p>{price}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tile;
