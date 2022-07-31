import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../style/colors'
import { device } from './size'

export const StyledLink = styled(Link)`
    color: ${colors.primary};
    font-size: 1.5em;
    padding: 15px;
    text-decoration: none;
    font-weight:300;
    &:hover {
        text-decoration-line: underline;
    };
    @media ${device.mobile} {
        font-size:1em;
    }

`
