import React, { Fragment } from 'react';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Dropdown from '../../components/Dropdown';
import about from '../../data/about.json';
import styled from 'styled-components';
import { device } from '../../style/size';

const Container = styled.div`
min-height:400px;
display:flex;
align-items:center;
justify-content:center;
@media ${device.mobile} {
  min-height:260px;
}
`
const ContainerDropdown = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const MainContainer=styled.main`
@media ${device.desktop} {
    margin-right:auto;
margin-left:auto;
max-width:1200px;
}`

export default function About({ page }) {
    return (
        <Fragment>
            <MainContainer>
            <Banner page={page} />
            <Container>
                <ContainerDropdown>
                    {about.map((words, index) => (
                        <Dropdown
                            key={`${index}-${words.line}`}
                            line={words.line}
                            text={words.text}
                        />
                    ))}
                </ContainerDropdown>
                </Container>
            </MainContainer>
            <Footer fSwitch={true} />
        </Fragment>
    )
}
