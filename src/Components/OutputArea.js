import React from 'react'
import { Container, Card, CardContent, Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
  outputBox: {
    marginTop: 30,
  },
  card: {
    marginLeft: 20,
    paddingBottom: 20,
    minWidth: 200,
    minHeight: 300
  }
})

const renderOutputArea = (output) => {
    console.log("output=",output)
    if (output === '') {
        return (
            <Container>
                <CardContent>
                    测试用例输出：
                </CardContent>
                <CardContent>
                    请选择测试用例的数据类型
                </CardContent>
            </Container>
        )
    }
    else {
        return (
            <Container>
                <CardContent>
                    测试用例输出：
                </CardContent>
                <TextField
                    label=""
                    multiline
                    rows={8}
                    defaultValue={output}
                    variant="filled"
                />
            </Container>
        )
    }
}

const OutputArea = () => {
    const classes = useStyles()
    const output = useSelector(state => state.output)
    
    return(
        <Container fixed
            className={classes.outputBox}
        >
            <Grid container
                  direction='column'
                  spacing={2}
            >
                <Card raised 
                    component={'span'}
                    className={classes.card}
                >

                    { renderOutputArea(output) }

                </Card>
            </Grid>
        </Container>
    )
}

export default OutputArea