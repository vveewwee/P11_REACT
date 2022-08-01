import React, { Fragment } from 'react'
import styled from 'styled-components'
import photo from '../../assets/404_error.png'
import Footer from '../../components/Footer'
import { device } from '../../style/size'

const ErrorDiv = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.tabletL}{
        width:100%;
        max-height:70vh;
    }
    @media ${device.mobile}{
        width:100%;
        max-height:40vh;
        margin-top:40%;
    }
`
const ErrorImage = styled.img`
    width: 50%;
`
const ErrorMessage = styled.p`
    text-align: center;
    font-size: 36px;
`
const MainContainer=styled.main`
margin:5%;
@media ${device.desktopS} {
    margin-right:auto;
margin-left:auto;
max-width:1200px;
}
`
export default function Error() {
    return (
        <Fragment>
            <MainContainer>
            <ErrorDiv>
                <ErrorImage src={photo} alt="404 error message" />
                <ErrorMessage>
                    Oups! La page que vous demandez n'existe pas.
                </ErrorMessage>
            </ErrorDiv>
            </MainContainer>
            <Footer fSwitch={false} />
        </Fragment>
    )
}
