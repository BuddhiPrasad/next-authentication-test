import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  label: string;
}

export const Input: React.FC<InputProps> = ({
  icon: Icon,
  label,
  className = '',
  ...props
}) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          className={`
            block w-full rounded-md border-gray-300 shadow-sm
            ${Icon ? 'pl-10' : 'pl-3'} pr-3 py-2
            focus:ring-1 focus:ring-blue-500 focus:border-blue-500
            sm:text-sm ${className}
          `}
          {...props}
        />
      </div>
    </div>
  );
};