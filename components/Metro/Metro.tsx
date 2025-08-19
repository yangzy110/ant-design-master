import React, { useState } from 'react';
import type { CSSProperties } from 'react';

export interface MetroProps {
  className?: string;
  style?: CSSProperties;
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Metro: React.FC<MetroProps> = ({ className, style }) => {
  const [color, setColor] = useState('#000');

  const handleClick = () => {
    setColor(getRandomColor());
  };

  return (
    <span
      className={className}
      style={{ color, ...style }}
      onClick={handleClick}
    >
      点击我，文字颜色会随机变化
    </span>
  );
};

export default Metro;
