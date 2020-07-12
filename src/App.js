import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
import Header from './Components/Header'
import InputArea from './Components/InputArea'
import OutputArea from './Components/OutputArea'
import Footer from './Components/Footer'

const App = () => {
  return (
    <Container>
      <Typography component={"span"}>
        <Header />
      </Typography>
      <Grid container
        direction="row"
      >
          <Grid item>
            <InputArea />
          </Grid>
          <Grid item>
            <OutputArea />
          </Grid>
      </Grid>
      <Typography component={"span"}>
        <Footer />
      </Typography>
    </Container>
  )
}

export default App;