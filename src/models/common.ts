import React from 'react';

/**
* Component Types
*/
export interface ComponentType<P = {}> {
  children: React.ReactNode,
  params?: P
}
