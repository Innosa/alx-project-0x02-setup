import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({
    children,
    type = 'button',
    size = 'medium',
    shape = 'rounded-md',
    disabled = false,
    onClick,
    className = '',
}) => {
    const sizeClasses = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };
    const shapeClasses = {
        'rounded-sm': 'rounded-sm',
        'rounded-md': 'rounded-md',
        'rounded-full': 'rounded-full',
    };

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`
                ${sizeClasses[size]}
                ${shapeClasses[shape]}
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                ${className}
                transition-colors duration-200 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            `}
        >
            {children}
        </button>
    );
};

export default Button;