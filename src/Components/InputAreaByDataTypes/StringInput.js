import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Container, Typography, Box, Grid, CardContent, TextField, FormControl, Radio,
    Switch, FormControlLabel, RadioGroup } from '@material-ui/core'
// import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { UPDATE_NUM_CASES } from '../../Store/Actions/ActionTypes'
import { updateCharset, updateNumChars, updateDelimiter } from '../../Store/Actions'

const useStyles = makeStyles({
    text: {
      width: 150,
    },
    line: {
        paddingTop: 10,
        paddingBottom: 10
    }
  })

const predefinedCharset = {
    'a-z': 'abcdefghijklmnopqrstuvwxyz',
    'A-Z': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'a-z&A-Z': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
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


const StringInput = (props) => {
    const { updateCharset, updateDelimiter, updateNumChars} = props
    const classes = useStyles()
    const dispatch = useDispatch();
    const [customCharset, setCustomCharset] = useState(true)
    const [useDelimiter, setUseDelimiter] = useState(false)
    const [value, setValue] = useState('a-z')
    
    return (
        <Container>
            <Box>
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
                            <CardContent>快速选择测试用例字符库：</CardContent>
                        </Grid>
                        <Grid item className={classes.line}>
                            <FormControl component='fieldset'>
                            <RadioGroup row
                                value={value}
                                onChange={(e)=> {
                                    setValue(e.target.value)
                                    console.log("value",e.target.value)
                                    updateCharset(predefinedCharset[e.target.value])
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
                                    label='a-z&A-Z'
                                />
                            </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item className={classes.line}>
                        <FormControlLabel
                            control={
                                <Switch
                                    name="need custom charset"
                                    checked={customCharset}
                                    onChange={()=>{setCustomCharset((e)=>!e)}}
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
                                            name='chars'
                                            onChange={(e)=>updateCharset(e.target.value)}
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
                    <Grid item className={classes.line}>
                        <CardContent>每测试用例字符数量：</CardContent>
                    </Grid>
                    <Grid item className={classes.line}>
                        <TextField 
                            className={classes.text}
                            label='Required'
                            fullWidth
                            name='delimiter'
                            onChange={(e)=>updateNumChars(e.target.value)}
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
                                    onChange={()=>setUseDelimiter((e) => !e)}
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
                                        name='delimiter'
                                        onChange={(e)=>updateDelimiter(e.target.value)}
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

const mapStateToProps = (state) => {
    return {
        ...state,
        chars: state.chars,
        numChars: state.numChars,
        delimiter: state.delimiter,
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCharset: (c) => dispatch(updateCharset(c)),
    updateNumChars: (n) => dispatch(updateNumChars(n)),
    updateDelimiter: (d) => dispatch(updateDelimiter(d)),
})

export default connect(mapStateToProps, mapDispatchToProps)(StringInput)