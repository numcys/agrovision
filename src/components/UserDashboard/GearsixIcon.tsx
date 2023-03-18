import { memo, SVGProps } from 'react';

const GearsixIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.4823 8.55576C19.462 8.46402 19.4221 8.37773 19.3655 8.30272C19.3089 8.22772 19.2368 8.16574 19.1542 8.12099L17.2019 7.03818C17.098 6.8249 16.9831 6.61982 16.8573 6.42294L16.8901 4.19169C16.8909 4.09811 16.8723 4.00537 16.8356 3.91927C16.7989 3.83318 16.7449 3.75557 16.6769 3.6913C15.7048 2.80993 14.5551 2.14701 13.3054 1.74716C13.2156 1.71918 13.121 1.71056 13.0276 1.72187C12.9343 1.73318 12.8444 1.76417 12.764 1.81279L10.8526 2.96123C10.6148 2.95302 10.3851 2.95302 10.1472 2.96123L8.23585 1.81279C8.15538 1.76417 8.06552 1.73318 7.97219 1.72187C7.87886 1.71056 7.78419 1.71918 7.69444 1.74716C6.44302 2.14732 5.29292 2.81331 4.32296 3.69951C4.25433 3.76157 4.19979 3.8376 4.163 3.9225C4.12621 4.00739 4.10803 4.09918 4.10968 4.19169L4.15069 6.42294C4.01944 6.61982 3.9046 6.8249 3.78975 7.03818L1.84561 8.12099C1.76195 8.16439 1.68906 8.22596 1.63228 8.30119C1.5755 8.37642 1.53628 8.4634 1.51749 8.55576C1.23856 9.83684 1.23856 11.163 1.51749 12.444C1.53786 12.5358 1.5777 12.6221 1.63431 12.6971C1.69092 12.7721 1.76298 12.8341 1.84561 12.8788L3.79796 13.9616C3.90262 14.1738 4.02042 14.3793 4.15069 14.5769L4.10968 16.8081C4.10893 16.9017 4.12748 16.9944 4.16417 17.0805C4.20087 17.1666 4.25492 17.2442 4.32296 17.3085C5.2964 18.188 6.4456 18.8507 7.69444 19.2526C7.78419 19.2806 7.87886 19.2892 7.97219 19.2779C8.06552 19.2666 8.15538 19.2356 8.23585 19.187L10.1472 18.0386H10.8526L12.7722 19.187C12.872 19.2526 12.9891 19.2869 13.1085 19.2854C13.1752 19.2826 13.2413 19.2715 13.3054 19.2526C14.5568 18.8525 15.7069 18.1865 16.6769 17.3003C16.7455 17.2382 16.8 17.1622 16.8368 17.0773C16.8736 16.9924 16.8918 16.9006 16.8901 16.8081L16.8573 14.5769C16.9804 14.38 17.0952 14.1749 17.2101 13.9616L19.1624 12.8788C19.2439 12.8336 19.3146 12.7713 19.3698 12.6963C19.425 12.6213 19.4634 12.5352 19.4823 12.444C19.7613 11.163 19.7613 9.83684 19.4823 8.55576V8.55576ZM14.1093 10.4999C14.1093 11.2138 13.8976 11.9116 13.501 12.5052C13.1044 13.0987 12.5407 13.5613 11.8812 13.8345C11.2216 14.1077 10.4959 14.1792 9.79576 14.0399C9.09561 13.9007 8.45248 13.5569 7.9477 13.0521C7.44292 12.5473 7.09916 11.9042 6.95989 11.2041C6.82062 10.5039 6.8921 9.77818 7.16528 9.11865C7.43847 8.45912 7.90109 7.89541 8.49465 7.49881C9.08821 7.10221 9.78604 6.89052 10.4999 6.89052C11.4572 6.89052 12.3752 7.27079 13.0521 7.94768C13.729 8.62457 14.1093 9.54263 14.1093 10.4999Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(GearsixIcon);
export { Memo as GearsixIcon };
