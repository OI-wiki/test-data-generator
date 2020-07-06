import React from 'react'
import { Container, Typography, CardContent, Box } from '@material-ui/core'
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
            {/* <Box component={"span"}> */}
                <Typography className={classes.content} component={"span"}>
                    <CardContent>
                        footer
                    </CardContent>
                </Typography>
            {/* </Box> */}
        </Container>
    )
}

export default Footer;