/** @jsxImportSource theme-ui */
import { spinnerAnimation } from '../styles/animations';

// Example of a more custom SVG with programmatic attributes
export const SpinnerIcon = (props) => (
  <svg
    sx={{ ...spinnerAnimation }}
    width={props.width}
    height={props.height}
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M25.5 3.44206C23.0373 1.89482 20.1231 1 17 1C8.16344 1 1 8.16344 1 17C1 25.8366 8.16344 33 17 33C25.8366 33 33 25.8366 33 17C33 15.4376 32.776 13.9275 32.3585 12.5'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
    />
    <circle cx='30' cy='7' r='1' fill='currentColor' />
  </svg>
);
