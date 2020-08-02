import React from 'react'
import { Container, Typography, Grid, Button } from '@material-ui/core'
import Header from './Components/Header'
import NavBar from './Components/NavigationBar'
import InputArea from './Components/InputArea'
import OutputArea from './Components/OutputArea'
import Footer from './Components/Footer'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles({
  button: {
    marginTop: 100,
    marginBottom: 20,
    marginLeft: 80,
    background: grey[300]
  }
})

const App = () => {
  const classes = useStyles()
  return (
    <Container>
        <Typography component={"span"}>
            <Header />
        </Typography>
        <Typography component={"span"}>
            <Grid container
              direction="row"
            >
                <Grid item><NavBar/></Grid>
                <Grid item xs={12} sm={6}><InputArea/></Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container
                        direction='column'
                    >
                        <Grid item>
                            <Grid container
                              direction='row'
                              spacing={3}
                            >
                                <Grid item xs={3} sm={3}>
                                  <Button className={classes.button}>
                                      Submit
                                  </Button>
                                </Grid>
                                <Grid item xs={3} sm={3}>
                                  <Button className={classes.button}>
                                      Clear
                                  </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item><OutputArea/></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Typography>
        <Typography component={"span"}>
            <Footer />
        </Typography>
    </Container>
  )
}

export default App