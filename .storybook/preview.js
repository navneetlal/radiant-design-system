import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../src/themes';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: false,
    iframeHeight: "250px",
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'lightTheme',
    toolbar: {
      icon: 'contrast',
      items: [
        { value: 'lightTheme', left: '🌖', title: 'light' },
        { value: 'darkTheme', left: '🌒', title: 'dark' }
      ],
      showName: true,
    },
  },
};

const getTheme = (themeName) => {
  return theme[themeName]
}

const withThemeProvider = (Story, context) => {
  const currentTheme = getTheme(context.globals.theme);
  return (
    <ThemeProvider theme={currentTheme}>
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider];
