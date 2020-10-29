import React from 'react'
import { Container, Typography, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Favorite from '@material-ui/icons/Favorite'
import red from '@material-ui/core/colors/red'

const useStyles = makeStyles( (theme) => ({
    content: {
        color: theme.palette.footer.text
    },
    position: {
        marginTop: 50
    }
}));

const Footer = () => {
    const classes = useStyles()
    return(
        <Container className={classes.position}>
            <Typography className={classes.content} component={"span"}>
                <CardContent>
                    Test Case Generator by OI Wiki, made with
                    <Favorite style={{ color: red.A400 }} />
                </CardContent>
            </Typography>
        </Container>
    )
}

export default Footer;