export type Theme = {
  colors: {
    background: string;
    primary: string;
    secondary: string;
    card: string;
    accent: string;
    success: string;
    error: string;
    tabbar: string;
    white: string;
    input: string;
    icon: string;
  };
};

export const lightTheme: Theme = {
  colors: {
    background: '#F9F8F8',
    primary: '#1F7AAB',
    secondary: '#A2B2CA',
    accent: '#F3B955',
    card: '#F9FAFC',
    success: '#4BB843',
    error: '#D84242',
    tabbar: '#1F7AAB',
    white: '#FFFFFF',
    input: '#E6E7E9',
    icon: '#9CA0AF',
  },
};

export const darkTheme: Theme = {
  colors: {
    background: '#01507F',
    primary: '#F1EFEF',
    secondary: '#B7BCC4',
    accent: '#D9A134',
    card: '#A2B2CA',
    success: '#48AD41',
    error: '#A23030',
    tabbar: '#1F7AAB',
    white: '#FFFFFF',
    input: '#DEE3E6',
    icon: '#B7BCC4',
  },
};
