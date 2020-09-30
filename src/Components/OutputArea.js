import React from 'react'
import { Container, Card, CardContent, Grid, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { grey } from '@material-ui/core/colors'
import { useSnackbar } from 'notistack'

const useStyles = makeStyles({
  outputBox: {
    marginTop: 30,
  },
  card: {
    marginLeft: 20,
    paddingBottom: 20,
    minWidth: 200,
    minHeight: 300
  },
  button: {
    marginTop: 100,
    marginBottom: 20,
    marginLeft: 80,
    background: grey[300],
    minWidth: 80
  }
})

const renderOutputArea = (output, classes, enqueueSnackbar) => {

    const copy2clipboard = (output) => {
        navigator.clipboard.writeText(output)
    }

    const handleClickVariant = (variant) => () => {
        enqueueSnackbar('已复制到剪贴板', { variant });
      };

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
                    value={output}
                    variant="filled"
                />
                <Button
                    className={classes.button}
                    onClick={copy2clipboard(output)}
                    onClick={handleClickVariant('success')}
                >
                    复制到剪贴板
                </Button>
            </Container>
        )
    }
}

const OutputArea = () => {
    const classes = useStyles()
    const { enqueueSnackbar } = useSnackbar();
    const output = useSelector(state => state.rootReducer.output)
    
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
                    { renderOutputArea(output, classes, enqueueSnackbar) }

                </Card>
            </Grid>
        </Container>
    )
}

export default OutputArea