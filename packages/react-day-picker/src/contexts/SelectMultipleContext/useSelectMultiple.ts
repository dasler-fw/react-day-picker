import React from 'react';

import { SelectMultipleContext } from './SelectMultipleContext';
import { SelectMultipleContextValue } from './types';

/** Hook to access the [[SelectMultipleContext]]. */
export function useSelectMultiple(): SelectMultipleContextValue {
  const context = React.useContext(SelectMultipleContext);
  if (!context) {
    throw new Error(
      'useSelectMultiple must be used within a SelectMultipleProvider'
    );
  }
  return context;
}
