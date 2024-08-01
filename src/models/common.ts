import React, { HTMLProps } from 'react';

/**
* Component Types
*/
export interface ComponentType<P = {}> {
  children: React.ReactNode,
  params?: P
  className ?: HTMLProps<HTMLElement>['className'];
}
