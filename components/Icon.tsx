import * as icons from 'react-icons/io5';

import React from 'react';

export const Icon = ({ icon, ...props }) => {
  const El = icons[icon];
  return <El {...props} />;
};
export default Icon;
