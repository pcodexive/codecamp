import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    primaryColor: string;
    secondaryColor: string;

    backgroundColor: string;
  }
}

const theme: DefaultTheme = {
  // Border Width
  borderRadius: '5px',

  // Theme Color
  primaryColor: 'red',
  secondaryColor: 'blue',

  // Background Color
  backgroundColor: 'white',
};

export default theme;
