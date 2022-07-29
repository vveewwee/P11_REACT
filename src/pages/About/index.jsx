import React, { Fragment } from 'react';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Dropdown from '../../components/Dropdown';
import about from '../../data/about.json';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
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
            <div style={{ minHeight: '400px' }}>
                <Container>
                    {about.map((words, index) => (
                        <Dropdown
                            key={`${index}-${words.line}`}
                            line={words.line}
                            text={words.text}
                        />
                    ))}
                </Container>
                <Footer fSwitch={true} />
            </div>
        </Fragment>
    )
}
