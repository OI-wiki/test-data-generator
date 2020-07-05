import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
import Header from './Components/Header'
import NavigationBar from './Components/NavigationBar'
import InputArea from './Components/InputArea'
import OutputArea from './Components/OutputArea'
import Footer from './Components/Footer'

const App = () => {
  return (
    <Container>
      <Typography>
        <Header />
      </Typography>
      <Grid container
        direction="row"
      >
          <Grid item>
            <NavigationBar />
          </Grid>
          <Grid item>
            <InputArea />
          </Grid>
          <Grid item>
            <OutputArea />
          </Grid>
      </Grid>
      <Typography>
        <Footer />
      </Typography>
    </Container>
  )
}

export default App;