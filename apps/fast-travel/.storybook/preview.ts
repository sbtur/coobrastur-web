import type { Preview } from '@storybook/react';
import '@workspace/ui/globals.css';

const BREAKPOINTS_INT = {
  'xsmall-375': 375,
  'small-640': 640,
  'medium-768': 768,
  'large-1024': 1024,
  'xlarge-1280': 1280,
  '2xlarge-1536': 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: '100%',
        },
      },
    ];
  })
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports,
    },
    layout: 'fullscreen',
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
