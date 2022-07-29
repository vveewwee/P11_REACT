import React from 'react'
import { Fragment } from 'react'
import { StyledLink } from '../../style/Atoms'
import logo from '../../assets/LOGO.png'
import styled from 'styled-components'

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin: 2%;
`
const ImgLogo = styled.img`
    @media (max-width: 767px) {
        width: 140px;
    }
`

export default function Header() {
    return (
        <Fragment>
            <NavContainer>
                <ImgLogo src={logo} alt="kasa logo" />
                <div>
                    <StyledLink to="/">Accueil</StyledLink>
                    <StyledLink to="/about">A Propos</StyledLink>
                </div>
            </NavContainer>
        </Fragment>
    )
}
