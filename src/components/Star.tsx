// Star.tsx
import React from 'react';

// Определяем типы пропсов
interface StarProps {
  filled: boolean; // Используем boolean для свойства filled
  onClick?: () => void; // Опциональный обработчик клика
}

const Star: React.FC<StarProps> = ({ filled, onClick }) => {
  return (
    <svg
      fill={filled ? "#D3BCA2" : "#e0e0e0"} // Цвет звезды в зависимости от заполнения
      height="28"
      viewBox="0 0 18 18"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick} // Добавление обработчика клика
    >
      <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
      <path d="M0 0h18v18H0z" fill="none" />
    </svg>
  );
};

export default Star;
