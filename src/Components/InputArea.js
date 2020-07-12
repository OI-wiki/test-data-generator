import React from 'react'
import { Container, Grid, Typography, Card, Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import String from './InputAreaByDataTypes/StringInput'
import { connect } from 'react-redux'
import { updateCharset } from '../Store/Actions'

const useStyles = makeStyles({
  inputBox: {
    marginTop: 80,
  },
  card: {
    paddingTop: 15,
    paddingRight: 10,
    paddingBottom: 10,
  }
})

const InputArea = (props) => {
    const classes = useStyles();
    return(
        <Container fixed 
            className={classes.inputBox}
            disableGutters={true}
        >
          <Grid container
                direction='column'
                spacing={2}
          >
            <Card raised
              className={classes.card}
            >
              <String/>
            </Card>
          </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
  return {
      open: state.open,
      dataType: state.dataType,
      chars: ''
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      updateCharset: (chars) => dispatch(updateCharset(chars))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputArea);