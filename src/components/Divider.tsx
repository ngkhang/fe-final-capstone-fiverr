import clsx from 'clsx';
import React, { HTMLProps } from 'react';

interface Props {
  className?: HTMLProps<HTMLElement>['className'];
}

const Divider = ({ className }: Props) => (
  <hr className={clsx(className)}></hr>
);

export default Divider;
