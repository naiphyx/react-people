import React from 'react';

export default function Input({onChange, value, placeholder, className}) {
  return <input type="text" className={className} placeholder={placeholder} value={value} onChange={onChange}/>
}