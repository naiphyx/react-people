import React from 'react';

export default function Button({onClick, btnVal, className}) {
  return <button className={className} onClick={onClick}>{btnVal}</button>
}