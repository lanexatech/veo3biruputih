import React, { useRef, useEffect } from 'react';
import type { Field } from '../types';

interface InputCardProps {
  field: Field;
  value: string;
  onChange: (id: string, value: string) => void;
}

const InputCard: React.FC<InputCardProps> = ({ field, value, onChange }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset height to shrink if needed
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = `${scrollHeight}px`; // Set to content height
    }
  }, [value, field.type]); // Rerun on value or field type change

  const commonClasses = "w-full p-3 pl-10 text-slate-700 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors duration-200 resize-none overflow-y-auto max-h-48";

  const renderInput = () => {
    if (field.type === 'select') {
      return (
        <>
          <select
            id={field.id}
            value={value}
            onChange={(e) => onChange(field.id, e.target.value)}
            className={`${commonClasses} appearance-none pr-8`}
          >
            <option value="" disabled>{field.placeholder}</option>
            {field.options?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </>
      );
    }

    // Both 'text' and 'textarea' types will use a resizable textarea
    return (
      <textarea
        ref={textareaRef}
        id={field.id}
        value={value}
        onChange={(e) => onChange(field.id, e.target.value)}
        placeholder={field.placeholder}
        rows={2}
        className={commonClasses}
      />
    );
  };

  const isMultiLine = field.type === 'textarea' || field.type === 'text';

  return (
    <div className="relative p-4 rounded-xl shadow-lg bg-white transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/40 hover:rotate-x-4 hover:-rotate-y-2">
      <label htmlFor={field.id} className="block text-sm font-medium text-slate-600 mb-2">
        {field.label}
      </label>
      <div className="relative">
        <div className={`absolute left-0 pl-3 flex pointer-events-none ${isMultiLine ? 'top-0 pt-3' : 'inset-y-0 items-center'}`}>
          {field.icon}
        </div>
        {renderInput()}
      </div>
    </div>
  );
};

export default InputCard;