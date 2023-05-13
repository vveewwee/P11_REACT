import React from 'react'
import { StyledLink, LogoLink} from '../../style/Atoms'
import logo from '../../assets/LOGO.png'
import styled from 'styled-components'
import { device } from '../../style/size'

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin: 2%;
`
const ImgLogo = styled.img`
    @media ${device.tabletL} {
        width: 140px;
    }
`
const LinkContainter = styled.div`
    margin-right:2%;
    @media ${device.xxs} {
        display:flex;
        flex-direction:column;}
`

export default function Header() {
    return (
        <header>
            <NavContainer>
                <LogoLink to="/">
                    <ImgLogo src={logo} alt="kasa logo" />
                </LogoLink>
                <LinkContainter>
                    <StyledLink to="/">Accueil</StyledLink>
                    <StyledLink to="/about">A Propos</StyledLink>
                </LinkContainter>
            </NavContainer>
        </header>
    )
}
