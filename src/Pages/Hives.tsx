import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Box from '../components/Box';

const Hive = () => {
  const [boxes, setBoxes] = useState<string[]>([]);
  const [, ref] = useDrop({
    accept: 'BOX',
    drop: (item) => setBoxes(prev => [...prev, item.type]),
  });
  return (
    <div ref={ref} style={{ width: 210, border: '1px solid black', minHeight: 200 }}>
      {boxes.map((box, index) => <Box key={index} type={box} />)}
    </div>
  );
}

export default Hive;