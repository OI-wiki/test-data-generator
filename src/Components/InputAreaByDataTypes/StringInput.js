import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Container, Typography, Box, Grid, CardContent, TextField,
    Switch, FormControlLabel, RadioGroup, Radio } from '@material-ui/core'
// import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import { updateCharset, updateNumChars } from '../../Store/Actions'
import MyRadio from './MyRadio'

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
    const { updateCharset, updateDelimiter, updateNumChars} = props;
    const classes = useStyles();
    let checkedChar_az, checkedChar_AZ, checkedChar_azAZ
    const [customCharset, setCustomCharset] = useState(true)
    const [useDelimiter, setUseDelimiter] = useState(false)
    
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
                            <RadioGroup row>
                                <MyRadio 
                                    label={'a-z'} 
                                    checked={checkedChar_az} 
                                    func={()=>updateCharset(predefinedCharset['a-z'])} 
                                />
                                <MyRadio 
                                    label={'A-Z'} 
                                    checked={checkedChar_AZ} 
                                    func={()=>updateCharset(predefinedCharset['A-Z'])} 
                                />
                                <MyRadio 
                                    label={'a-z and A-Z'} 
                                    checked={checkedChar_azAZ} 
                                    func={()=>updateCharset(predefinedCharset['a-z&A-Z'])} 
                                />
                                {/* <FormControlLabel
                                    label='a-z'
                                    labelPlacement='start'
                                    control={
                                        <Radio 
                                            name='a-z'
                                            checked={checkedChar_az}
                                            onClick={()=>updateCharset(predefinedCharset['a-z'])}
                                        />
                                    }
                                />
                                <FormControlLabel
                                    label='A-Z'
                                    labelPlacement='start'
                                    control={
                                        <Radio 
                                            name='A-Z'
                                            checked={checkedChar_AZ}
                                            onClick={()=>updateCharset(predefinedCharset['A-Z'])}
                                        />
                                    }
                                />
                                <FormControlLabel
                                    label='a-z and A-Z'
                                    labelPlacement='start'
                                    control={
                                        <Radio 
                                            name='a-z&A-Z'
                                            checked={checkedChar_azAZ}
                                            onClick={()=>updateCharset(predefinedCharset['a-z&A-Z'])}
                                        />
                                    }
                                /> */}
                            </RadioGroup>
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
                            onChange={(e)=>updateNumChars(e.target.value)}
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateCharset: (c) => dispatch(updateCharset(c)),
        updateNumChars: (n) => dispatch(updateNumChars(n)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StringInput)