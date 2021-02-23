import React from 'react';

export interface Props {
  size: number;
  axis?: 'vertical' | 'horizontal';
  style?: any;
  delegated?: any;
}

export default function Spacer(props: Props) {
  const width = props.axis === 'vertical' ? 1 : props.size;
  const height = props.axis === 'horizontal' ? 1 : props.size;
  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...props.style,
      }}
      {...props.delegated}
    />
  );
}
