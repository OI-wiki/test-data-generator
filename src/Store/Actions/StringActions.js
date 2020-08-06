import { useDispatch } from "react-redux"


export const startStringGen = (props) => {
    console.log("SRING GEN ACTIONS")
    
}

// import React, { Component, useEffect } from 'react'
// import { connect } from 'react-redux'

// export class StringGen extends Component () {
//     constructor(props) {
//         super(props)
        
//     }
//     render() {
//         const {chars, numChars, delimiter, numCases} = this.props
//         return(<div>{chars}</div>)
//     }
// }

// const mapStateToProps = (state) = ({
//     chars: state,chars,
//     numChars: state.numChars,
//     delimiter: '',
//     numCases: 0,
// })

// export default connect(
//     mapStateToProps,
//     null
// )(StringGen)