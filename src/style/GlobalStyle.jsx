import React from 'react'
import { createGlobalStyle } from 'styled-components'
import colors from '../style/colors'

const StyledGlobalStyle = createGlobalStyle`
    * {
    font-family: 'Montserrat', Helvetica, sans-serif;
    }

    body {
        color: ${colors.primary};
        margin: 0; 
    }
`

export default function GlobalStyle() {
    return <StyledGlobalStyle />
}
