import colors from './colors';

const darkTheme = {};

darkTheme.primary = colors.blue;

darkTheme.background = colors.background[0];

darkTheme.colors = colors;

darkTheme.title = {
  fontFamily: 'Nunito, Roboto, sans-serif',
  color: 'white',
};

darkTheme.text = {
  lineHeight: '1.5em',
  color: 'white',
  fontSize: '16px',
  fontFamily: 'NunitoSans, Roboto, sans-serif',
};

darkTheme.input = {
  placeholderColor: colors.gray[4],
  borderColor: colors.gray[4],
};

export default darkTheme;
