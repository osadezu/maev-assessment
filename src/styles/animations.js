import { keyframes } from '@emotion/react';

export const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

export const spinnerAnimation = {
  animation: `${spin} 2s linear infinite`,
  transformOrigin: 'center',
};
