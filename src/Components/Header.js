import React from 'react'
import { Container, Typography, AppBar, Box, Toolbar, IconButton,
    Button, Tooltip, Drawer, CardContent, Hidden } from '@material-ui/core'
import { Settings, GitHub, Menu } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import NavBar from '../Components/NavigationBar'
import { connect } from 'react-redux'
import { toggleDrawer } from '../Store/Actions'

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      // flexShrink: 0,
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
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }))

const Header = ({ open, dataType, toggleDrawer }) => {
    // const { open, toggleDrawer } = props
    // console.log("lala",open)
    const classes = useStyles()
    const OIWikiGithub = 'https://github.com/OI-wiki/test-data-generator'
    const list = () => (
      <Container
        className={classes.drawer}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <CardContent component={'span'}>
          this is a list<br/>
          first line<br/>
          second line<br/>
        </CardContent>
      </Container>
    );

    const NavBar = () => (
        <Container>
          <Drawer anchor={'left'} open={open} onClose={toggleDrawer} component={"span"}>
            {list}
          </Drawer>
        </Container>
      )

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
                            // color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            className={classes.menuButton}
                        >
                            <Menu />
                        </IconButton>
                      </Tooltip>
                      <Button href="/" 
                        // color="inherit"
                      >
                          <Typography component="span"
                          // variant="h6" 
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
        <Drawer
          variant="temporary"
          anchor={'left'}
          open={open}
          onClose={toggleDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <NavBar />
        </Drawer>

        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        open: state.open,
        dataType: state.dataType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDrawer: (state) => dispatch(toggleDrawer(state))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);