import { ComponentType, createElement } from 'react';

import { render } from '@testing-library/react';

export const renderComponent = <Props extends Record<string, unknown>>(
  Component: ComponentType<Props>,
  props: Props,
) => {
  return render(createElement(Component, props));
};
