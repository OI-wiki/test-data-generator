import React from 'react'
import { Container, Grid, Card, CardContent, SvgIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import String from './InputAreaByDataTypes/StringInput'
import Vector from './InputAreaByDataTypes/VectorInput'
import Tree from './InputAreaByDataTypes/TreeInput'
import Graph from './InputAreaByDataTypes/GraphInput'
// import { mdiArrowTopLeftThick } from '@mdi/js'

const useStyles = makeStyles({
  inputBox: {
    marginTop: 80,
  },
  card: {
    paddingTop: 15,
    paddingRight: 10,
    paddingBottom: 10,
  }
})

const InputArea = () => {
    const classes = useStyles()
    const dataType = useSelector(state => state.dataType)
    const renderInputAreaByType = (type) => {
      console.log("current data type", type)
        if (type === 'String')
          return <String/>
        else if (type === 'Vector')
          return <Vector/>
        else if (type === 'Tree')
          return <Tree/>
        else if (type === 'Graph')
          return <Graph/>
        else
          return (
            <Container>
              {/* <SvgIcon path={mdiArrowTopLeftThick} /> */}
              <CardContent>
                  请先选择测试用例的数据类型
              </CardContent>
            </Container>
          )
    }

    return(
        <Container fixed 
            className={classes.inputBox}
            disableGutters={true}
        >
          <Grid container
                direction='column'
                spacing={2}
          >
            <Card raised component={'span'}
              className={classes.card}
            >

                {renderInputAreaByType(dataType)}

            </Card>
          </Grid>
        </Container>
    )
}

export default InputArea