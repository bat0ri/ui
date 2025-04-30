import { ChangeEvent, ReactNode } from 'react';

type StringInputProps = {
  label: string | ReactNode; // Можно передать как строку, так и React-элемент
  value: string;
  onChange: (value: string) => void;
  type?: string; // Опциональный тип инпута
  id?: string; // Опциональный id
  required?: boolean; // Опциональное обязательное поле
  placeholder?: string; // Опциональный плейсхолдер
  className?: string; // Дополнительные классы для кастомизации
};

export default function StringInput({
  label,
  value,
  onChange,
  type = 'text',
  id,
  required = false,
  placeholder,
  className = ''
}: StringInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-gray-800 mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="w-full bg-gray-300 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 transition text-gray-800"
        value={value}
        onChange={handleChange}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}