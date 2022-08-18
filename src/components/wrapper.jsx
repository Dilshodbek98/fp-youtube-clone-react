import React from 'react'
import { Content } from './content';
import { Navbar } from './navbar'

export const Wrapper = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
      <Navbar />
      <Content/>
    </div>
  );
}
