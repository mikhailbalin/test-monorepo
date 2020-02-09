import React from 'react';
export default ({ children, ...rest }) => (
  <button type="button" {...rest}>
    {children}sc
  </button>
);
