import React from 'react'
import styled from 'styled-components'
import home_photo from '../../assets/home_page.png'
import about_photo from '../../assets/about_page.png'
import { device } from '../../style/size'

const BannerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const BannerDivHome = styled.div`
    width: 90%;
    max-width: 1220px;
    border-radius: 25px;
    background-image: url(${home_photo});
    background-repeat: no-repeat;
    background-position: right;
    opacity: 1;
    mix-blend-mode: darken;
    display: flex;
    align-items: center;
    justify-content: center;
    filter:brightness(0.9);
    height:200px;
`

const BannerDivAbout = styled.div`
    width: 90%;
    max-width: 1220px;
    height: 200px;
    border-radius: 25px;
    mix-blend-mode: darken;
    opacity: 0.7;
    background-image: url(${about_photo});
    display: flex;
    align-items: center;
    justify-content: center;
`
const BannerMessageHome = styled.p`
    color: white;
    font-size: 3em;
    font-weigth: 400;
    font-style: normal;
    letter-spacing:0.5px;
    @media ${device.tabletL} {
       font-weight:300;
       font-size:2em;
       margin-left:1%;
    }
`
export default function Banner({ page }) {
    return (
        <BannerWrapper>
            {page === 'home' ? (
                <BannerDivHome>
                    <BannerMessageHome>
                        Chez vous, partout et ailleurs
                    </BannerMessageHome>
                </BannerDivHome>
            ) : (
                <BannerDivAbout />
            )}
        </BannerWrapper>
    )
}
