import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import data from '../../data/data.json'
import styled from 'styled-components'
import colors from '../../style/colors'

const GalleryDiv = styled.div`
    margin: 5%;
    padding: 2%;
    background-color: ${colors.background};
    border-radius: 25px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`
export default function Home({ page }) {
    return (
        <Fragment>
            <Banner page={page} />
            <GalleryDiv>
                {data.map((dat, index) => (
                    <Link
                        key={`${index}-${dat.id}`}
                        to={{
                            pathname: `/Housing/${dat.id}`,
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        <Card
                            key={`${dat.id}`}
                            cover={dat.cover}
                            title={dat.title}
                        />
                    </Link>
                ))}
            </GalleryDiv>
            <Footer fSwitch={true} />
        </Fragment>
    )
}
