// Parameterized Material-ui radio component
import React from 'react'
import { Box, FormControlLabel, Radio } from '@material-ui/core'

const MyRadio = ({label, checked, func}) => {
    return (
        <Box>
        <FormControlLabel
            label={label}
            labelPlacement='start'
            control={
                <Radio 
                    checked={checked}
                    onClick={func}
                />
            }
        />
    </Box>
    )
}

export default MyRadio