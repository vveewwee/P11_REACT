import React from 'react'
import logo_white from '../../assets/LOGO_white.png'
import styled from 'styled-components'
import { StyledLink } from '../../style/Atoms'

const FooterDiv = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
`

const Copyrights = styled.p`
    color: white;
    font-size: 24px;
`

const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Footer({ fSwitch }) {
    return (
        <footer>
            {fSwitch ? (
                <FooterDiv>
                    <img src={logo_white} alt="kasa logo" />
                    <Copyrights>© 2020 Kasa. All rights reserved</Copyrights>
                </FooterDiv>
            ) : (
                <ErrorContainer>
                    <StyledLink to="/">
                        Retournez à la page d'accueil{' '}
                    </StyledLink>
                </ErrorContainer>
            )}
        </footer>
    )
}
