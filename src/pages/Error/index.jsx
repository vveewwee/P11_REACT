import React, { Fragment } from 'react'
import styled from 'styled-components'
import photo from '../../assets/404_error.png'
import Footer from '../../components/Footer'

const ErrorDiv = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ErrorImage = styled.img`
    width: 50%;
    height: 50%;
`
const ErrorMessage = styled.p`
    text-align: center;
    font-size: 36px;
`

export default function Error() {
    return (
        <Fragment>
            <ErrorDiv>
                <ErrorImage src={photo} alt="404 error message" />
                <ErrorMessage>
                    Oups! La page que vous demandez n'existe pas.
                </ErrorMessage>
            </ErrorDiv>
            <Footer fSwitch={false} />
        </Fragment>
    )
}
