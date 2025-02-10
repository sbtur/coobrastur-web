import type { Preview } from '@storybook/react';
import '@workspace/ui/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: 'primary', value: '#152656' },
        { name: 'dark', value: '#22262a' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
};

export default preview;
