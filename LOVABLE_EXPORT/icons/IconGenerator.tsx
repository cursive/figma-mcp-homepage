import React from 'react';
import Icon from './Icon';

// Icon data structure for easy management
interface IconData {
    name: string;
    viewBox: string;
    path: string;
    strokeWidth?: number;
    fill?: string;
}

// This can be expanded with all your Figma icons
const iconDatabase: Record<string, IconData> = {
    'heart': {
        name: 'heart',
        viewBox: '0 0 22 20',
        path: 'M18 12C19.49 10.54 21 8.79 21 6.5C21 5.04131 20.4205 3.64236 19.3891 2.61091C18.3576 1.57946 16.9587 1 15.5 1C13.74 1 12.5 1.5 11 3C9.5 1.5 8.26 1 6.5 1C5.04131 1 3.64236 1.57946 2.61091 2.61091C1.57946 3.64236 1 5.04131 1 6.5C1 8.8 2.5 10.55 4 12L11 19L18 12Z',
        strokeWidth: 2
    },
    'star': {
        name: 'star',
        viewBox: '0 0 22 22',
        path: 'M10.5268 1.29489C10.5706 1.20635 10.6383 1.13183 10.7223 1.07972C10.8062 1.02761 10.903 1 11.0018 1C11.1006 1 11.1974 1.02761 11.2813 1.07972C11.3653 1.13183 11.433 1.20635 11.4768 1.29489L13.7868 5.97389C13.939 6.28186 14.1636 6.5483 14.4414 6.75035C14.7192 6.95239 15.0419 7.08401 15.3818 7.13389L20.5478 7.88989C20.6457 7.90408 20.7376 7.94537 20.8133 8.00909C20.8889 8.07282 20.9452 8.15644 20.9758 8.2505C21.0064 8.34456 21.0101 8.4453 20.9864 8.54133C20.9627 8.63736 20.9126 8.72485 20.8418 8.79389L17.1058 12.4319C16.8594 12.672 16.6751 12.9684 16.5686 13.2955C16.4622 13.6227 16.4369 13.9708 16.4948 14.3099L17.3768 19.4499C17.3941 19.5477 17.3835 19.6485 17.3463 19.7406C17.3091 19.8327 17.2467 19.9125 17.1663 19.9709C17.086 20.0293 16.9908 20.0639 16.8917 20.0708C16.7926 20.0777 16.6935 20.0566 16.6058 20.0099L11.9878 17.5819C11.6835 17.4221 11.345 17.3386 11.0013 17.3386C10.6576 17.3386 10.3191 17.4221 10.0148 17.5819L5.3978 20.0099C5.31013 20.0563 5.2112 20.0772 5.11225 20.0701C5.0133 20.0631 4.91832 20.0285 4.83809 19.9701C4.75787 19.9118 4.69563 19.8321 4.65846 19.7401C4.62128 19.6482 4.61066 19.5476 4.6278 19.4499L5.5088 14.3109C5.567 13.9716 5.54178 13.6233 5.43534 13.2959C5.32889 12.9686 5.14441 12.672 4.8978 12.4319L1.1618 8.79489C1.09039 8.72593 1.03979 8.63829 1.01576 8.54197C0.991731 8.44565 0.995237 8.34451 1.02588 8.25008C1.05652 8.15566 1.11307 8.07174 1.18908 8.00788C1.26509 7.94402 1.3575 7.90279 1.4558 7.88889L6.6208 7.13389C6.96106 7.08439 7.28419 6.95295 7.56238 6.75088C7.84058 6.54881 8.0655 6.28216 8.2178 5.97389L10.5268 1.29489Z',
        strokeWidth: 2
    },
    'merge': {
        name: 'merge',
        viewBox: '0 0 18 22',
        path: 'M5 5L9 1M9 1L13 5M9 1V11.3C9.00571 11.8326 8.90499 12.361 8.70373 12.8542C8.50247 13.3474 8.20474 13.7954 7.828 14.172L1 21M17 21L12 16',
        strokeWidth: 2
    },
    'menu': {
        name: 'menu',
        viewBox: '0 0 18 14',
        path: 'M1 7H17M1 1H17M1 13H17',
        strokeWidth: 2
    }
};

interface GeneratedIconProps {
    iconName: string;
    size?: number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
}

const GeneratedIcon: React.FC<GeneratedIconProps> = ({
    iconName,
    size = 24,
    color = 'var(--foreground-base-primary)',
    className = '',
    style
}) => {
    const iconData = iconDatabase[iconName];

    if (!iconData) {
        console.warn(`Icon "${iconName}" not found in icon database`);
        return null;
    }

    return (
        <Icon
            name={iconName}
            size={size}
            color={color}
            className={className}
            style={style}
        >
            <svg
                fill="none"
                viewBox={iconData.viewBox}
                style={{ width: '100%', height: '100%' }}
            >
                <path
                    d={iconData.path}
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={iconData.strokeWidth || 2}
                    fill={iconData.fill || 'none'}
                />
            </svg>
        </Icon>
    );
};

export default GeneratedIcon;
export { iconDatabase };
