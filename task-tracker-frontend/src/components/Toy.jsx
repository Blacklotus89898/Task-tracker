import React, { useState } from 'react';

const Toy = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const startDrag = (e) => {
    e.preventDefault();
    setIsDragging(true);

    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const drag = (e) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="draggable w-80 border-4 p-10 border-green-600"
      style={{ transform: `translate(${position.x}px, ${position.y}px)`,

    }}
      onMouseDown={startDrag}
      onMouseMove={drag}
      onMouseUp={stopDrag}
    >
      Drag me! 
    </div>
  );
};

export default Toy; //add release transition
//performance depends on browser

