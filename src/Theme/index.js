import { createMuiTheme } from '@material-ui/core'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

export const globalStyles = withStyles((theme) => ({
  '@global': {
    a: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
      },
    },
    blockquote: {
      paddingLeft: '1em',
      margin: '1em 3em 1em 2em',
      borderLeft: `4px solid ${theme.palette.blockquote}`,
    },
    code: {
      padding: '2px 4px',
      'border-radius': '2px',
      'font-size': '90%',
      color: theme.palette.inlineCode.color,
      backgroundColor: theme.palette.inlineCode.background,
    },
    'pre code': {
      'font-size': '100%',
      padding: '0.2em 0',
      backgroundColor: '#1E1E1E',
    },
    img: {
      maxWidth: '100%',
    },
  },
}))

function CustomCssEl () {
  return null
}

CustomCssEl.propTypes = { classes: PropTypes.object.isRequired }

export const CustomCssBaseline = globalStyles(CustomCssEl)

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    footer: {
      background: grey[200],
      text: grey[700],
    },
    details: {
      border: blue[500],
      main: blue[50],
    },
    blockquote: 'rgba(0,0,0,.12)',
    inlineCode: {
      color: '#37474f',
      background: 'hsla(0,0%,85%,.5)',
    },
    search: {
      messageBackground: grey[100],
      highlight: '#174d8c',
    },
    tab: {
      colorOnHover: '#000',
    },
    subTitle: 'rgba(0,0,0,.7)',
  },
})

export const darkTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        img: {
          filter: 'brightness(0.8) contrast(1.2)',
          transition: 'filter 0.2s',
          transitionTimingFunction: 'ease',
          '&:hover': {
            filter: 'brightness(1) contrast(1)',
          },
        },
      },
    },
  },
  palette: {
    type: 'dark',
    footer: {
      background: grey[900],
      text: grey[300],
    },
    details: {
      border: blue[500],
      main: grey[700],
    },
    blockquote: 'rgba(255,255,255,.12)',
    inlineCode: {
      color: '#37474f',
      background: 'hsla(0,0%,60%,.5)',
    },
    search: {
      messageBackground: grey[700],
      highlight: '#acccf1',
    },
    tab: {
      colorOnHover: '#fff',
    },
    subTitle: 'rgba(255,255,255,.7)',
  },
})

export default lightTheme