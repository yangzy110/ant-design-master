import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Test from '../components/Test';

describe('Test Component', () => {
  it('should render and change color on click', () => {
    const { getByText } = render(<Test />);
    const textElement = getByText('点击我，文字颜色会随机变化');
    const initialColor = textElement.style.color;
    fireEvent.click(textElement);
    const newColor = textElement.style.color;
    expect(newColor).not.toBe(initialColor);
  });
});
