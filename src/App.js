import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container, Typography, Grid } from '@material-ui/core'
import Header from './Components/Header'


const App = () => {
  return (
    <Container>
      <Typography>
        <Grid>
            <Header />
        </Grid>
      </Typography>
    </Container>
  )
}

export default App;