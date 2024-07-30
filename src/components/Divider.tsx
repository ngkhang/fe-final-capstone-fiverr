import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

const Divider = ({ className }: Props) => (
  <hr className={clsx(className)}></hr>
);

export default Divider;
