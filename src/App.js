import React from 'react'
import { Container, Typography, Grid, Button } from '@material-ui/core'
import Header from './Components/Header'
import NavBar from './Components/NavigationBar'
import InputArea from './Components/InputArea'
import OutputArea from './Components/OutputArea'
import Footer from './Components/Footer'
import ButtonUtil from './Components/ButtonUtil'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import StartGenerator from './Store/Actions'
import { useSelector } from 'react-redux'

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
  const dataType = useSelector(state => state.dataType)
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
                            <ButtonUtil />
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