import { configure } from "@storybook/react";
import { WrapperDecorator, AppDecorator } from 'src/utils/storybook/decorators'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {

    default: 'light',
    values: [
      {
        name: 'light',
        value: '#F8FAFC',
      },
      {
        name: 'dark',
        value: '#3f3f4c',
      },
    ],
  }
}

export const decorators = [AppDecorator, WrapperDecorator];
