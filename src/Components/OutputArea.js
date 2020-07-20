import React from 'react'
import { Container, Typography, Card, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  OutputBox: {
    paddingTop: 70,
  }
})

const OutputArea = () => {
    const classes = useStyles();
    return(
        <Container fixed>
          <Box className={classes.OutputBox}>
            <Typography component={"span"}>
                <Card>
                    output
                </Card>
            </Typography>
          </Box>
        </Container>
    )
}

export default OutputArea;