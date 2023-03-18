import { memo, SVGProps } from 'react';

const ChatcenteredtextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M12 13H20' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 17H20' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M18.7125 24.4875L16.8625 27.575C16.7719 27.7224 16.6451 27.844 16.4941 27.9284C16.3431 28.0129 16.173 28.0572 16 28.0572C15.827 28.0572 15.6569 28.0129 15.5059 27.9284C15.3549 27.844 15.2281 27.7224 15.1375 27.575L13.2875 24.4875C13.2005 24.3393 13.0763 24.2164 12.9272 24.1309C12.7782 24.0454 12.6094 24.0003 12.4375 24H5C4.73478 24 4.48043 23.8946 4.29289 23.7071C4.10536 23.5196 4 23.2652 4 23V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H27C27.2652 6 27.5196 6.10536 27.7071 6.29289C27.8946 6.48043 28 6.73478 28 7V23C28 23.2652 27.8946 23.5196 27.7071 23.7071C27.5196 23.8946 27.2652 24 27 24H19.5625C19.3906 24.0003 19.2218 24.0454 19.0728 24.1309C18.9237 24.2164 18.7995 24.3393 18.7125 24.4875V24.4875Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(ChatcenteredtextIcon);
export { Memo as ChatcenteredtextIcon };
