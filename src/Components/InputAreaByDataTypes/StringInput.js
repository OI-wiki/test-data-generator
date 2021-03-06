import React, {useState} from 'react'
import { Container, Typography, Box, Grid, CardContent, TextField, FormControl, Radio,
    Switch, FormControlLabel, RadioGroup } from '@material-ui/core'
// import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { UPDATE_NUM_CASES, UPDATE_NUM_CHARS, UPDATE_CHARSET, UPDATE_DELIMITER, UPDATE_ALLOW_DUPLICATE } from '../../Store/Actions/ActionTypes'

const useStyles = makeStyles({
    text: {
      width: 150,
    },
    line: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 5
    },
    radiogroup: {
        marginLeft: 15
    }
  })

const predefinedCharset = {
    'a-z': 'abcdefghijklmnopqrstuvwxyz',
    'A-Z': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'a-z&A-Z': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '0-9': '0123456789',
}

// for autocomplete component
// const predefinedCharset = [
//     {description: 'abc', char: 'abc'},
//     {description: 'a-z', char: 'abcdefghijklmnopqrstuvwxyz'},
//     {description: 'A-Z', char: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'},
//     {description: 'a-z and A-Z', char: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'},
// ]

// const defaultProps = {
//     options: predefinedCharset,
//     getOptionLabel: (option) => option.description,
// };


const StringInput = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const [customCharset, setCustomCharset] = useState(true)
    const [useDelimiter, setUseDelimiter] = useState(false)
    const [value, setValue] = useState('')
    const [allowDuplicate, setAllowDuplicate] = useState(true)
    const [radioDisabled, setRadio] = useState(true)
    
    return (
        <Container>
            <Box>
            <CardContent>STRING</CardContent>
            <Typography component={"span"}>
                <Grid container
                    direction="row"
                    spacing={2}
                >
                    <Grid container
                        direction='column'
                        className={classes.line}
                    >
                        <Grid>
                            <CardContent>快速选择/非自定义测试用例字符库：</CardContent>
                        </Grid>
                        <Grid item className={classes.line}>
                            <Grid container className={classes.radiogroup}>
                            <FormControl component='fieldset'>

                            { !radioDisabled
                            ?

                                <RadioGroup row
                                    value={value}
                                    onChange={(e)=> {
                                        setValue(e.target.value)
                                        // updateCharset(predefinedCharset[e.target.value])
                                        dispatch({
                                            type: UPDATE_CHARSET,
                                            payload: predefinedCharset[e.target.value]
                                        })
                                    }}
                                >
                                    <FormControlLabel
                                        value='a-z'
                                        checked={value === 'a-z'}
                                        control={<Radio/>}
                                        label='a-z'
                                    />
                                    <FormControlLabel
                                        value='A-Z'
                                        checked={value === 'A-Z'}
                                        control={<Radio/>}
                                        label='A-Z'
                                    />
                                    <FormControlLabel
                                        value='a-z&A-Z'
                                        checked={value === 'a-z&A-Z'}
                                        control={<Radio/>}
                                        label='a-z & A-Z'
                                    />
                                    <FormControlLabel
                                        value='0-9'
                                        checked={value === '0-9'}
                                        control={<Radio/>}
                                        label='0-9'
                                    />
                                </RadioGroup>

                            :

                                <RadioGroup row
                                    value={value}
                                    onChange={(e)=> {
                                        setValue(e.target.value)
                                        // updateCharset(predefinedCharset[e.target.value])
                                        dispatch({
                                            type: UPDATE_CHARSET,
                                            payload: predefinedCharset[e.target.value]
                                        })
                                    }}
                                >
                                    <FormControlLabel disabled
                                        value='a-z'
                                        checked={value === 'a-z'}
                                        control={<Radio/>}
                                        label='a-z'
                                    />
                                    <FormControlLabel disabled
                                        value='A-Z'
                                        checked={value === 'A-Z'}
                                        control={<Radio/>}
                                        label='A-Z'
                                    />
                                    <FormControlLabel disabled
                                        value='a-z&A-Z'
                                        checked={value === 'a-z&A-Z'}
                                        control={<Radio/>}
                                        label='a-z & A-Z'
                                    />
                                    <FormControlLabel disabled
                                        value='0-9'
                                        checked={value === '0-9'}
                                        control={<Radio/>}
                                        label='0-9'
                                    />
                                </RadioGroup>

                            }

                            </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.line}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        name="need custom charset"
                                        checked={customCharset}
                                        onChange={()=>{
                                            setCustomCharset(e=>!e)
                                            setRadio(e=>!e)
                                            dispatch({
                                                type: UPDATE_CHARSET,
                                                payload: ''
                                            })
                                        }}
                                    />
                                }
                                label="自定义字符库"
                            />
                        </Grid>
                        <Grid item className={classes.line}>
                            { customCharset 
                                ? <Grid container direction='row'>
                                    <Grid item className={classes.line}>
                                        <CardContent>请输入自定义字符:</CardContent>
                                    </Grid>
                                    <Grid item className={classes.line}>
                                        <TextField 
                                            className={classes.text}
                                            label=''
                                            autoFocus
                                            fullWidth
                                            dense='true'
                                            name='chars'
                                            onChange={(e) => dispatch ({
                                                type: UPDATE_CHARSET,
                                                payload: e.target.value
                                            })}
                                            variant='outlined'
                                        />
                                    </Grid>
                                  </Grid>
                                : <Box/>
                            }
                        </Grid>
                        {/* <Autocomplete
                            className={classes.text}
                            {...defaultProps}
                            autoComplete
                            includeInputInList
                            value={charset}
                            onChange={(e)=>updateCharset(e.target.value)}
                            // https://www.gitmemory.com/issue/mui-org/material-ui/18443/555265265
                            getOptionSelected={(option, { multiple, value }) => {
                                if (!multiple) {
                                    return (option.item.description === value.description);  
                                }
                                return false;
                                }}
                            renderInput={
                                (params) => <TextField {...params} 
                                // input={charset}
                                // onChange={(e)=>updateCharset(e.target.value)}
                                                type='text'
                                                label="Charset"
                                                margin="normal"
                                            />}
                        /> */}
                    </Grid>
                </Grid>
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
                <Grid container>
                    <Grid item className={classes.line}>
                        <CardContent>每测试用例字符数量：</CardContent>
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
                <Grid container
                    direction='column'
                    spacing={2}
                >
                    <Grid item className={classes.line}>
                        <FormControlLabel
                            control={
                                <Switch
                                    name="delimiter checked"
                                    checked={useDelimiter}
                                    onChange={ () => {
                                        setUseDelimiter((e) => !e)
                                        dispatch({
                                            type: UPDATE_DELIMITER,
                                            payload: ''
                                        })
                                    }}
                                />
                            }
                            label="需要设置分隔符"
                        />
                    </Grid>

                    { useDelimiter
                        ? <Grid container direction='row'>
                            <Grid item className={classes.line}>
                                <CardContent>请输入分隔符:</CardContent>
                            </Grid>
                            <Grid item className={classes.line}>
                                <TextField 
                                        className={classes.text}
                                        label=''
                                        fullWidth
                                        autoFocus
                                        dense='true'
                                        name='delimiter'
                                        onChange={(e) => dispatch({
                                            type: UPDATE_DELIMITER,
                                            payload: e.target.value
                                        })}
                                        variant='outlined'
                                    />
                            </Grid>
                          </Grid>
                        : <Box/>
                    }
                <Grid container>
                    <Grid item className={classes.line}>
                        <CardContent>测试用例总数量：</CardContent>
                    </Grid>
                    <Grid item className={classes.line}>
                        <TextField 
                            className={classes.text}
                            label='Required'
                            fullWidth
                            dense='true'
                            name='delimiter'
                            // onChange={(e)=>updateNumCases(e.target.value)}
                            onChange={(e) => dispatch({
                                type: UPDATE_NUM_CASES,
                                payload: e.target.value
                            })}
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
                </Grid>

            </Typography>
            </Box>
        </Container>
    )
}

export default StringInput