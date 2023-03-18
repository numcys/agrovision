import { memo, SVGProps } from 'react';

const Ellipse80Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 89 89'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <circle cx={44.5} cy={44.5} r={44.5} fill='#D9D9D9' />
    <circle cx={44.5} cy={44.5} r={44.5} fill='url(#pattern0)' />
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
        <use xlinkHref='#image0_53_70' transform='translate(0 -0.125326) scale(0.00261097)' />
      </pattern>
      <image
        id='image0_53_70'
        width={383}
        height={479}
        xlinkHref='data:image/jpeg;base64,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'
      />
    </defs>
  </svg>
);
const Memo = memo(Ellipse80Icon);
export { Memo as Ellipse80Icon };
