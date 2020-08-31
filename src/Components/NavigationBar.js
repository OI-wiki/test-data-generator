import React from 'react'
import { Container, CardContent, List, ListItem, ListItemIcon, ListItemText, Radio,
  FormControl, FormControlLabel, RadioGroup, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { CLOSE_DRAWER, SET_DATATYPE } from '../Store/Actions/ActionTypes'

const useStyles = makeStyles({
  list: {
    width: 250,
    paddingTop: 70,
  },
  title: {
    paddingTop: 70
  }
})

const items = [
  {id: 0, type: 'String'},
  {id: 1, type: 'Vector'},
  {id: 2, type: 'Tree'},
  {id: 3, type: 'Graph'},
]

const NavigationBar = () => {
    const open = useSelector(state => state.rootReducer.open)
    const [value, setValue] = React.useState('')
    const dispatch = useDispatch()
    const classes = useStyles()

    if (open) {
      return (
        <Container
        className={classes.list}
        onClick={()=>dispatch({ type: CLOSE_DRAWER })}
        >
        <Card raised>
          <CardContent>
          <CardContent component={'span'} className={classes.title}>请选择测试用例数据类型：</CardContent>
          <List>
            { items.map((item) => {
                return (
                  <FormControl component='fieldset' key={item.id}>
                    <RadioGroup
                        value={value}
                        onChange={(e)=> {
                            setValue(e.target.value)
                            dispatch({type: SET_DATATYPE, payload: item.type, id: item.id})
                        }}
                    >
                        <ListItem key={item.id}>
                          <ListItemIcon>
                            <FormControlLabel
                              value={item.type}
                              checked={value === item.type}
                              control={<Radio/>}
                              label={item.value}
                            />
                          </ListItemIcon>
                          <ListItemText id={item.id} primary={item.type}/>
                        </ListItem>
                    </RadioGroup>
                  </FormControl>
                )
              }) 
            }
          </List>
        </CardContent>
        </Card>
      </Container>
      )
    }
    else {
      return <div/>
    }
    
}

export default NavigationBar