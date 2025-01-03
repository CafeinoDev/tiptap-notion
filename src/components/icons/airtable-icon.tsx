import { rem } from '@mantine/core';

interface Props {
  size?: number | string;
}

export function AirtableIcon({ size }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 215"
      style={{ width: rem(size), height: rem(size) }}
    >
      <path
        fill="#ffbf00"
        d="M114.259 2.701 18.86 42.176c-5.305 2.195-5.25 9.73.089 11.847l95.797 37.989a35.544 35.544 0 0 0 26.208 0l95.799-37.99c5.337-2.115 5.393-9.65.086-11.846L141.442 2.7a35.549 35.549 0 0 0-27.183 0"
      />
      <path
        fill="#26b5f8"
        d="M136.35 112.757v94.902c0 4.514 4.55 7.605 8.746 5.942l106.748-41.435a6.39 6.39 0 0 0 4.035-5.941V71.322c0-4.514-4.551-7.604-8.747-5.941l-106.748 41.434a6.392 6.392 0 0 0-4.035 5.942"
      />
      <path
        fill="#ed3049"
        d="m111.423 117.654-31.68 15.296-3.217 1.555L9.65 166.548C5.411 168.593 0 165.504 0 160.795V71.72c0-1.704.874-3.175 2.046-4.283a7.266 7.266 0 0 1 1.618-1.213c1.598-.959 3.878-1.215 5.816-.448l101.41 40.18c5.155 2.045 5.56 9.268.533 11.697"
      />
      <path
        fillOpacity={0.25}
        d="m111.423 117.654-31.68 15.296L2.045 67.438a7.266 7.266 0 0 1 1.618-1.213c1.598-.959 3.878-1.215 5.816-.448l101.41 40.18c5.155 2.045 5.56 9.268.533 11.697"
      />
    </svg>
  );
}
