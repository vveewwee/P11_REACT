import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import data from '../../data/data.json'
import styled from 'styled-components'
import colors from '../../style/colors'
import { device } from '../../style/size'
import Loader from '../../components/Loader'

const GalleryDiv = styled.div`
    margin: 5%;
    padding: 2%;
    background-color: ${colors.background};
    border-radius: 25px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    @media ${device.mobile} {
        display: flex;
        flex-direction: column;
    }
    @media ${device.tabletS} and ${device.tabletL} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
    }
`

const MainContainer=styled.main`
@media ${device.desktop} {
    margin-right:auto;
margin-left:auto;
max-width:1200px;
}
`
export default function Home({ page }) {
    const [isLoading, setisLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
          setisLoading(false)
        }, 1000);
      }, []);
    
    return (
        <Fragment>
            <MainContainer>
                <Banner page={page} />
                {isLoading ? (<Loader/>) :
                    (
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
                )}
             </MainContainer>
            <Footer fSwitch={true} />
            </Fragment>
    )
}
