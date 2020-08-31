import React, {useState} from 'react'
import { Container, Typography, Grid, Box, CardContent, Checkbox, FormGroup,
    FormControlLabel, Switch, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_VECTOR_ELEM_TYPE_str, UPDATE_VECTOR_ELEM_TYPE_int, UPDATE_VECTOR_ELEM_TYPE_float,
    UPDATE_ALLOW_DUPLICATE, UPDATE_NUM_CHARS, UPDATE_NUM_CASES } from '../../Store/Actions/ActionTypes'

const useStyles = makeStyles({
    text: {
      width: 150,
    },
    line: {
        paddingTop: 10,
        paddingBottom: 10
    }
  })

const VectorInput = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const typeChecked = useSelector(state => state.VectorReducer.typeChecked)
    const [stringChecked, setStringChecked] = useState(false)
    const [intChecked, setIntChecked] = useState(false)
    const [floatChecked, setFloatChecked] = useState(false)
    // const [VectorChecked, setVectorChecked] = useState(false) // TODO
    const [allowDuplicate, setAllowDuplicate] = useState(true)

    
    return (
        <Container>
            <Box>
            <CardContent>VECTOR</CardContent>
            <Typography component={"span"}>
                <Grid container
                    direction="column"
                    className={classes.line}
                >
                    <Grid item>
                        <CardContent>元素数据类型(可多选):</CardContent>
                        <FormGroup row>
                            <FormControlLabel
                                label="String"
                                control={
                                    <Checkbox
                                        checked={stringChecked}
                                        color="primary"
                                        onChange={() => {
                                            setStringChecked(e=>!e)
                                            dispatch({ 
                                                type: UPDATE_VECTOR_ELEM_TYPE_str,
                                                payload: !stringChecked
                                            })
                                        }}
                                    />
                                }
                            />
                            <FormControlLabel
                                label="Int"
                                control={
                                    <Checkbox
                                        checked={intChecked}
                                        color="primary"
                                        onChange={() => {
                                            setIntChecked(e=>!e)
                                            dispatch({ 
                                                type: UPDATE_VECTOR_ELEM_TYPE_int,
                                                payload: !typeChecked.int
                                            })
                                        }}
                                    />
                                }
                            />
                            <FormControlLabel
                                label="Float"
                                control={
                                    <Checkbox
                                        checked={floatChecked}
                                        color="primary"
                                        onChange={() => {
                                            setFloatChecked(e=>!e)
                                            dispatch({ 
                                                type: UPDATE_VECTOR_ELEM_TYPE_float,
                                                payload: !typeChecked.float
                                            })
                                        }}
                                    />
                                }
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <FormControlLabel
                                control={
                                    <Switch
                                        name="allow duplicate chars"
                                        checked={allowDuplicate}
                                        onChange={ () => {
                                                setAllowDuplicate((v)=>!v)
                                                dispatch({
                                                    type: UPDATE_ALLOW_DUPLICATE,
                                                    payload: !allowDuplicate
                                                })
                                            }
                                        }
                                    />
                                }
                                label="允许字符重复"
                            />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item className={classes.line}>
                                <CardContent>每测试用例字符数量：</CardContent>
                            </Grid>
                            <Grid item className={classes.line}>
                                <TextField 
                                    className={classes.text}
                                    label='Required'
                                    fullWidth
                                    name='delimiter'
                                    onChange={(e) => dispatch({
                                        type: UPDATE_NUM_CHARS,
                                        payload: e.target.value
                                    })}
                                    variant='outlined'
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item className={classes.line}>
                                <CardContent>测试用例总数量：</CardContent>
                            </Grid>
                            <Grid item className={classes.line}>
                                <TextField 
                                    className={classes.text}
                                    label='Required'
                                    fullWidth
                                    name='delimiter'
                                    onChange={(e) => dispatch({
                                        type: UPDATE_NUM_CASES,
                                        payload: e.target.value
                                    })}
                                    variant='outlined'
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Typography>
            </Box>
        </Container>
    )
}

export default VectorInput