import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
import Header from './Components/Header'
import NavBar from './Components/NavigationBar'
import InputArea from './Components/InputArea'
import OutputArea from './Components/OutputArea'
import Footer from './Components/Footer'
import ButtonUtil from './Components/ButtonUtil'
import { SnackbarProvider } from 'notistack'

const App = () => {
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

                        <Grid item>
                            <SnackbarProvider maxSnack={2}>
                                <OutputArea/>
                            </SnackbarProvider>
                        </Grid>

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