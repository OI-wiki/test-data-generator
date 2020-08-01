import React from 'react'
import { Container, Card, CardContent, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  outputBox: {
    marginTop: 80,
  },
  card: {
    marginLeft: 20,
    paddingTop: 15,
    paddingBottom: 20,
    minWidth: 300,
    minHeight: 300
  }
})

const renderOutputArea = () => {
  return (
      <Container>
          <CardContent>
              output
          </CardContent>
      </Container>
  )
}

const OutputArea = () => {
    const classes = useStyles();
    return(
        <Container fixed
            className={classes.outputBox}
        >
            <Grid container
                  direction='column'
                  spacing={2}
            >
                <Card raised 
                    component={'span'}
                    className={classes.card}
                >

                    { renderOutputArea() }

                </Card>
            </Grid>
        </Container>
    )
}

export default OutputArea