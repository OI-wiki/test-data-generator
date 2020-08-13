import React from 'react'
import { Container, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { useDispatch, useSelector } from 'react-redux'
import { startStringGen, startVectorGen } from '../Store/Actions'
import { ALTER_ALL } from '../Store/Actions/ActionTypes'

const useStyles = makeStyles({
  button: {
    marginTop: 100,
    marginBottom: 20,
    marginLeft: 80,
    background: grey[300],
    minWidth: 80
  }
})

const ButtonUtil = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const dataType = useSelector(state => state.dataType)
    const allState = useSelector(state => state)

    const StartGenerator = () => {
        console.log('---------------GEN START')
            switch (dataType) {
                case 'String': 
                    startStringGen(allState, dispatch)
                    break
                case 'Vector':
                    startVectorGen(allState)
                    break
                default:
                    console.log('Please select data type')
            }
          console.log('---------------GEN END')
    }

    return (
        <Container>
            <Grid container
            direction='row'
            spacing={3}
            >
            <Grid item xs={3} sm={3}>
                <Button className={classes.button}
                    onClick={() => StartGenerator()}
                >
                    提交
                </Button>
            </Grid>
            <Grid item xs={3} sm={3}>
                <Button className={classes.button}
                    onClick={() => dispatch({ type: ALTER_ALL })}
                >
                    全部清除
                </Button>
            </Grid>
            </Grid>
        </Container>
    )
}

export default ButtonUtil