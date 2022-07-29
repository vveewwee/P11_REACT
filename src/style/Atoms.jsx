import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../style/colors'

export const StyledLink = styled(Link)`
    color: ${colors.primary};
    font-size: 24px;
    padding: 15px;
    text-decoration: none;
    &:hover {
        text-decoration-line: underline;
    }
`
