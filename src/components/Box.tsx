import React from 'react';

interface BoxProps{
  className:string
}

const Box: React.FC<BoxProps> = ({className}) => {
  return (
    <div className={className}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quidem
      reprehenderit dolorem reiciendis saepe modi debitis excepturi magni
      tempore ea.
    </div>
  );
};

export default Box;
