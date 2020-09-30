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

const OutputArea = () => {
    const classes = useStyles()
    const { enqueueSnackbar } = useSnackbar();
    const output = useSelector(state => state.rootReducer.output)

    const copy2clipboard = (variant) => {
        console.log('CLIPBOARD')
        navigator.clipboard.writeText(output)
        enqueueSnackbar('已复制到剪贴板', { variant })
    }
    
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

                { output === ''
                  ?
                    <Container>
                        <CardContent>
                            测试用例输出：
                        </CardContent>
                        <CardContent>
                            请选择测试用例的数据类型
                        </CardContent>
                    </Container>
                  :

                    <Container>
                        <CardContent>
                            测试用例输出：
                        </CardContent>
                        <CardContent>
                            滑动滑块查看完整测试用例 支持手动修改数据
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
                            onClick={() => copy2clipboard('success')}
                        >
                            复制到剪贴板
                        </Button>
                    </Container>
                }

                </Card>
            </Grid>
        </Container>
    )
}

export default OutputArea