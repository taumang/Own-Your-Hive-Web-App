import React from 'react';
import { useDrag } from 'react-dnd';

type BoxProps = {
  type: string;
}

const Box = ({ type }: BoxProps) => {
  const [, ref] = useDrag({
    type,
  });
  return (
    <div ref={ref} style={{ width: 200, height: 100, backgroundColor: 'lightbrown', margin: 5 }}>
      {type}
    </div>
  );
}

export default Box;