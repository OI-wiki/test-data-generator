import React from 'react'
import { Container, Typography, AppBar, Box, Toolbar, IconButton,
    Button, Tooltip } from '@material-ui/core'
import { Settings, GitHub, Menu, HighlightOff } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { useDispatch, useSelector } from 'react-redux'
import { OPEN_DRAWER,CLOSE_DRAWER } from '../Store/Actions/ActionTypes'

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
    },
    hiddenDrawer: {
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
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
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }))

const Header = () => {
    const dispatch = useDispatch();
    const open = useSelector(state => state.open)
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
                      {
                        open ?
                              <Tooltip title="关闭菜单">
                                    <IconButton
                                    // color="inherit"
                                    aria-label="close drawer"
                                    onClick={()=>dispatch({type:CLOSE_DRAWER})}
                                    className={classes.menuButton}
                                >
                                    <HighlightOff />
                                </IconButton>
                              </Tooltip>
                             :
                              <Tooltip title="选择数据类型">
                                <IconButton
                                    // color="inherit"
                                    aria-label="open drawer"
                                    onClick={() => dispatch({ type: OPEN_DRAWER })}
                                    className={classes.menuButton}
                                >
                                    <Menu />
                                </IconButton>
                              </Tooltip>
                      }

                      <Button href="/" 
                        // color="inherit"
                      >
                          <Typography component="span"
                          noWrap>
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

export default Header

// const mapStateToProps = (state, props) => {
//   console.log("header",state.open)
//     return {
//         ...state,
//         open: props.open,
//         dataType: state.dataType
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleDrawer: () => dispatch(toggleDrawer())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Header);