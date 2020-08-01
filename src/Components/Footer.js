import React from 'react'
import { Container, Typography, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( (theme) => ({
    content: {
        color: theme.palette.footer.text
    }
}));

const Footer = () => {
    const classes = useStyles()
    return(
        <Container>
            <Typography className={classes.content} component={"span"}>
                <CardContent>
                    footer
                </CardContent>
            </Typography>
        </Container>
    )
}

export default Footer;