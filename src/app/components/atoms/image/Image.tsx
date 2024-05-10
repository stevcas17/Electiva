import React from 'react';
import './Image.scss';

export const Image = ({ className, src, alt, width, height }) => {
  return <img src={src} alt={alt ? alt : ''} width={width} height={height} className={className ? className : ''} />;
};
