import React from 'react'
import { Container, Drawer, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { toggleDrawer } from '../Store/Actions'

const useStyles = makeStyles({
  list: {
    width: 250,
  }
})

const NavigationBar = ({open, dataType, toggleDrawer}) => {
    const classes = useStyles();
    // const {open, dataType, toggleDrawer} = props
    // const list = () => (
    //   <Container
    //     className={classes.list}
    //     role="presentation"
    //     onClick={toggleDrawer}
    //     onKeyDown={toggleDrawer}
    //   >
    //     <CardContent component={'span'}>
    //       this is a list<br/>
    //       first line<br/>
    //       second line<br/>
    //     </CardContent>
    //   </Container>
    // );
    
    // return (
    //   <Container>
    //         <Drawer anchor={'left'} open={open} onClose={toggleDrawer} component={"span"}>
    //           {list}
    //         </Drawer>
    //   </Container>
    // );
    return (
      <Container
      className={classes.list}
      // role="presentation"
      // onClick={toggleDrawer}
      // onKeyDown={toggleDrawer}
    >
      <CardContent component={'span'}>
        this is a list<br/>
        first line<br/>
        second line<br/>
      </CardContent>
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
)(NavigationBar);

        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}