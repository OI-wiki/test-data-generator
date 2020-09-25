import React, {useState} from 'react'
import { Container, Typography, Grid, Box, CardContent, Checkbox, FormGroup,
    FormControlLabel, Switch, TextField, Paper, Radio, RadioGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_VECTOR_ELEM_TYPE_str, UPDATE_VECTOR_ELEM_TYPE_int, UPDATE_VECTOR_ELEM_TYPE_float,
    UPDATE_ALLOW_DUPLICATE, UPDATE_NUM_CHARS, UPDATE_NUM_CASES, UPDATE_NUM_ELEMENTS, UPDATE_CHARSET,
    UPDATE_FLOAT_RANGE } from '../../Store/Actions/ActionTypes'
import { indigo } from '@material-ui/core/colors'

const useStyles = makeStyles({
    text: {
      width: 200,
      height: 10,
      marginBottom: 30
    },
    line: {
        paddingTop: 10,
        paddingBottom: 10
    },
    charSettingBox: {
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 15,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: indigo[50],
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
    const [charValue, setCharValue] = useState('')
    const [error, setError] = useState(false)
    const [helperText, setHelperText] = useState('')

    const charsetOptions = [
        {
            label: 'a-z',
            value: 'abcdefghijklmnopqrstuvwxyz',
            optionDisabled: !stringChecked
        },
        {
            label: 'A-Z',
            value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            optionDisabled: !stringChecked
        },
        {
            label: 'a-z & A-Z',
            value: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
            optionDisabled: !stringChecked
        },
        {
            label: '0-9',
            value: '0123456789',
            optionDisabled: !intChecked
        },
        {
            label: 'a-z & A-Z & 0-9',
            value: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            optionDisabled: !(intChecked && stringChecked)
        }
    ]

    const checkValidRange = (text) => {
        // CLEAR ERROR STATE
        setError(false)
        setHelperText('')

        text = text.trim()
        let lowerBound = parseFloat(text.split('-')[0])
        let upperBound = parseFloat(text.split('-')[1])
        // console.log("LOWER: "+lowerBound+" UPPER: "+upperBound)
        // CHECK '-'
        if (text.split('-')[2]) {
            setError(true)
            setHelperText("只能包含一个'-'")
            return false
        }
        // CHECK BOUNDS
        let re = /[0-9]/
        if ((!lowerBound || !upperBound) && (!re.test(lowerBound) || !re.test(upperBound))) {
            setError(true)
            setHelperText("只能包含数字和'-'")
            return false
        }
        // CHECK VALUE
        if (lowerBound > upperBound) {
            setError(true)
            setHelperText("下限高于上限")
            return false
        }
        console.log("AFTER: "+helperText)
        return true;
    }
    
    return (
        <Container>
            <Box>
            <CardContent>VECTOR</CardContent>
            <Typography component={"span"}>
                <Grid container
                    direction="column"
                    className={classes.line}
                    alignItems='flex-start'
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
                        <Grid container className={classes.charSettingBox}>

                            设置Vector每元素所含字符：

                            <RadioGroup row
                                value={charValue}
                                onChange={(e)=> {
                                    setCharValue(charValue)
                                    dispatch({
                                        type: UPDATE_CHARSET,
                                        payload: e.target.value
                                    })
                                }}
                            >
                                { charsetOptions.map ((option, value="") => {
                                    return (
                                        // 'key' doesn't serve any purpose here, just to make the erorr goes away
                                        <Container key={option.label}>
                                            <FormControlLabel
                                                label={option.label}
                                                value={option.value}
                                                checked={option.value === value}
                                                control={<Radio/>}
                                                disabled={option.optionDisabled}
                                            />
                                        </Container>
                                    )
                                })}
                                <Grid container 
                                    direction='row'
                                    alignItems='flex-end'
                                >
                                    <Grid item>
                                        浮点范围：
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            className={classes.text}
                                            label='例: 0-1'
                                            name='float_range'
                                            margin='dense'
                                            disabled={!floatChecked}
                                            onChange={(e) => {
                                                if (checkValidRange(e.target.value))
                                                    dispatch({
                                                    type: UPDATE_FLOAT_RANGE,
                                                    payload: e.target.value
                                                    })
                                            }}
                                            error={error}
                                            helperText={helperText}
                                        />
                                    </Grid>
                                </Grid>
                            </RadioGroup>

                        </Grid>
                    </Grid>
                    <Grid item>
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
                    <Grid item>
                        <Grid container>
                            <Grid item className={classes.line}>
                                <CardContent>每个Vector元素所含字符数量：</CardContent>
                            </Grid>
                            <Grid item className={classes.line}>
                                <TextField 
                                    className={classes.text}
                                    label='Required'
                                    fullWidth
                                    dense='true'
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
                                <CardContent>每个Vector测试用例所含元素数量：</CardContent>
                            </Grid>
                            <Grid item className={classes.line}>
                                <TextField 
                                    className={classes.text}
                                    label='Required'
                                    fullWidth
                                    dense='true'
                                    name='delimiter'
                                    onChange={(e) => dispatch({
                                        type: UPDATE_NUM_ELEMENTS,
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
                                <CardContent>测试用例Vector总数量：</CardContent>
                            </Grid>
                            <Grid item className={classes.line}>
                                <TextField 
                                    className={classes.text}
                                    label='Required'
                                    fullWidth
                                    dense='true'
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