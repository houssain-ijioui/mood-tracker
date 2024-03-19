import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Container from './Container'; // import your component

test('renders mood when set', () => {
  render(<Container />);
  
  const moodButton = (mood) => screen.getByText(mood); // Helper function to get mood button
  const moodElement = screen.queryByTestId('mood'); // Using queryByTestId because mood might not be initially present
  
  expect(moodElement).toBeNull(); // Assert that mood element is initially not present
  
  fireEvent.click(moodButton('Happy')); // Click on the Happy button
  expect(screen.getByTestId('mood')).toHaveTextContent('You are Happy'); // Assert that mood element is present and displaying correct mood
  
  fireEvent.click(moodButton('Sad')); // Click on the Sad button
  expect(screen.getByTestId('mood')).toHaveTextContent('You are Sad'); // Assert that mood element is present and displaying correct mood
});


