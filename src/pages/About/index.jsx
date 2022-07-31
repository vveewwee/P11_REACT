import React, { Fragment } from 'react';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Dropdown from '../../components/Dropdown';
import about from '../../data/about.json';
import styled from 'styled-components';

const Container = styled.div`
min-height:400px;
display:flex;
align-items:center;
justify-content:center;
`
const ContainerDropdown = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function About({ page }) {
    return (
        <Fragment>
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
                <Footer fSwitch={true} />
        </Fragment>
    )
}
