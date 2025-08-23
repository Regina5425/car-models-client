export type Theme = {
  colors: {
    background: string;
    primary: string;
    secondary: string;
    card: string;
    accent: string;
    success: string;
    error: string;
    warning: string;
    tabbar: string;
    white: string;
    input: string;
    icon: string;
    focus: string;
    border: string;
  };
};

export const lightTheme: Theme = {
  colors: {
    background: '#E9EAEF',
    primary: '#20263B',
    secondary: '#51576C',
    accent: '#D8A800',
    card: '#F9FAFC',
    success: '#209A1B',
    error: '#D80000',
    warning: '#F58110',
    tabbar: '#F0F1F2',
    white: '#FFFFFF',
    input: '#F9FAFC',
    icon: '#BCBEC4',
    focus: '#1C47BE',
    border: '#E0E2EA',
  },
};

export const darkTheme: Theme = {
  colors: {
    background: '#19191B',
    primary: '#F1EFEF',
    secondary: '#B9BDCB',
    accent: '#D9A134',
    card: '#27282E',
    success: '#1E8F1A',
    error: '#E93636',
    warning: '#F58110',
    tabbar: '#2D323A',
    white: '#FFFFFF',
    input: '#27282E',
    icon: '#4C4F5A',
    focus: '#314A95',
    border: '#464C60',
  },
};
