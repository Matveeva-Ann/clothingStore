
export const theme = Object.freeze (
  {
    colors: {
      BASE:{
        baseColor: '#8A33FD',
        black: '#191919',
        white: '#fff',
        grayText: '#807D7E',
        accentText: '#3C4242',
        blackText: '#2A2F2F',
        backgroundAccent: '#F6F6F6',
        backgroundField: '#ececec',
        backgroundAccentHover: '#e0e0e0',
      },
      GREEN:{
        baseColor: '#157145',
        black: '#191919',
        white: '#fff',
        grayText: '#353535',
        accentText: '#507290',
        blackText: '#165252',
        backgroundAccent: '#e5e9e8',
        backgroundField: '#afeed74f',
        backgroundAccentHover: '#b0b0b0',
      },
      RED: {
        baseColor: '#fd2d00',
        black: '#191919',
        white: '#fff',
        grayText: '#807D7E',
        accentText: '#FF5733',
        blackText: '#6e1502',
        backgroundAccent: '#F6F6F6',
        backgroundField: '#ececec',
        backgroundAccentHover: '#e0e0e0',
      },
      YELLOW: {
        baseColor: '#FFD700',
        black: '#191919',
        white: '#fff',
        grayText: '#353535',
        accentText: '#ffb700',
        blackText: '#7b5c00',
        backgroundAccent: '#e5e9e8',
        backgroundField: '#afeed74f',
        backgroundAccentHover: '#b0b0b0',
      },
    },
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
    }
  }
)