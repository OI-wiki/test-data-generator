import React from 'react'
import { Container, Typography, AppBar, Box, Toolbar, IconButton,
    Button, Tooltip } from '@material-ui/core'
import { Settings, GitHub, Menu } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    hiddenDrawer: {
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    // appBar: (props) => ({
    //   zIndex: theme.zIndex.drawer + 1,
    //   background: props.appBar.background,
    //   color: props.appBar.color,
    // }),
    appBar: {
      background: grey[50],
      color: grey[700]
    },
    toolbar: {
      paddingLeft: '7.5px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    placeholder: {
      [theme.breakpoints.down('md')]: {
        minHeight: 64,
      },
      minHeight: 48 + 64,
      alignItems: 'flex-start',
    },
    // drawerPaper: scrollbarStyle(theme, {
    //   width: drawerWidth,
    // }),
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }))

const Header = () => {
    const classes = useStyles()
    const OIWikiGithub = 'https://github.com/OI-wiki/test-data-generator'
    return(
        <Container>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    {/* Left half */}
                    <Box
                      display="flex"
                      flexGrow={1}
                    >
                      <Tooltip title="数据类型">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            // onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <Menu />
                        </IconButton>
                      </Tooltip>
                      <Button href="/" color="inherit">
                          <Typography variant="h6" noWrap>
                          OI Wiki 测试用例生成工具
                          </Typography>
                      </Button>
                    </Box>
                    {/* Right half */}
                    <Box>
                        <Tooltip title="设置" placement="bottom" arrow>
                            <IconButton component="a" href="/settings" color="inherit">
                            <Settings />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="GitHub仓库" placement="bottom" arrow>
                            <IconButton component="a" href={OIWikiGithub} color="inherit">
                            <GitHub />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>
        </Container>
    )
}

export default Header;