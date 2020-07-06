import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container, Typography, Card } from '@material-ui/core'

const InputArea = () => {
    return(
        <Container>
            <Typography component={"span"}>
                <Card>
                    input area
                </Card>
            </Typography>
        </Container>
    )
}

export default InputArea;