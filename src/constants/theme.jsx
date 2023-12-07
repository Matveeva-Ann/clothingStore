
export const theme = Object.freeze (
  {
    spacing: (value) => `${4 * value}px`,
    fontSize: {
      small: '14px',
      normal: '18px',
      medium: '22px',
      customText: '24px',
      subTitleLittle: '28px',
      large: '32px',
      subTitle: '34px',
      extraLarge: '60px',
      megaLarge: '94px'
    },
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  }
)