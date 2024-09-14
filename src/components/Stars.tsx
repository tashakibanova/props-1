// Stars.tsx
import React, { useState } from 'react';
import Star from './Star';
import '../css/stars.css';

// Определяем типы пропсов
interface StarsProps {
  count?: number; // Рейтинг, который можно задать как пропс
}

const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
  const [rating, setRating] = useState<number>(count); // Состояние для рейтинга

  // Проверяем, что значение рейтинга является числом и находится в допустимом диапазоне
  if (typeof rating !== 'number' || rating < 0 || rating > 5) {
    return null; // Возвращаем null, если условие не выполнено
  }

  // Генерируем массив звезд в зависимости от рейтинга
  const starsArray = Array.from({ length: 5 }, (_, index) => (
    <li key={index}>
      <Star
        filled={index < rating} // Проверяем, заполнена звезда или нет
        onClick={() => setRating(index + 1)} // Устанавливаем новый рейтинг при клике
      />
    </li>
  ));

  return (
    <ul className="card-body-stars u-clearfix">
      {starsArray}
    </ul>
  );
};

export default Stars;
