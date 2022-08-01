import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Dropdown from '../../components/Dropdown'
import Footer from '../../components/Footer'
import data from '../../data/data.json'
import colors from '../../style/colors'
import Carousel from '../../components/Carousel'
import Rating from '../../components/Rating'
import { device } from '../../style/size'

const DivRow = styled.div`
    display: flex;
    flex-direction: row;
`
const DivCol = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.mobile} {
        width:90%;
    }
    
`
const DivColHost = styled.div`
    display: flex;
    flex-direction: column;
    margin:2%;
    @media ${device.tabletL} {
        flex-direction:row-reverse;
        justify-content:space-between;
        align-items:center;
        margin-top:2%;
        width:90%;
    }
`
const ImgContainer = styled.div`
    object-fit: cover;
    border-radius: 15px;
    padding: 2%;
    @media ${device.tabletL} {
        height:65vh;
    }
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2%;
    @media ${device.tabletL} {
        display:flex;
        flex-direction:column;
    }
`

const DetailsContainer = styled.div`
    width:100%;
    display:flex;
    align-items:flex-start;
    justify-content:center;
    @media ${device.tabletL} {
        display:flex;
        flex-direction:column;
        align-items:center;
    }
`
const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-height:64px;
`

const Tag = styled.div`
    padding: 1%;
    padding-right:6%;
    padding-left:6%;
    margin: 2%;
    background-color: ${colors.primary};
    border-radius: 13px;
    color: white;
    font-size: 1em;
    font-weight: 300;
    min-width:60px;
    text-align:center;
`

const OwnerContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const OwnerName = styled.div`
text-justify:center;`

const OwnerImgDiv = styled.div`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 5px;
`
const OwnerImg = styled.img`
    width: 100%;
    heigh: 100%;
    border-radius: 50%;
    object-fit: cover;
`

const H1 = styled.h1`
    margin-bottom: 1%;
    font-weight:400;
    letter-spacing:0.5px;
`
const MainContainer=styled.main`
@media ${device.desktop} {
    margin-right:auto;
margin-left:auto;
max-width:1200px;
}
`
export default function Housing() {
    const { id } = useParams()
    const info = data.find((line) => line.id === id)

    return (
        <Fragment>
            <MainContainer>
            <ImgContainer>
                <Carousel images={info.pictures} text={info.title} />
            </ImgContainer>
            <TitleContainer>
                <DivCol>
                    <H1 key={`${info.title}`}>{info.title}</H1>
                    <span key={`${info.location}`}>{info.location}</span>
                    <TagContainer>
                        {info.tags.map((tag, index) => (
                            <Tag key={`${tag}-${index}`}>{tag}</Tag>
                        ))}
                    </TagContainer>
                </DivCol>
                <DivColHost>
                    <OwnerContainer>
                        <OwnerName>
                            <p key={`${info.name}`}>{info.host.name}
                            </p>
                            </OwnerName>
                        <OwnerImgDiv>
                            <OwnerImg
                                key={`${info.host}-${info.id}`}
                                src={info.host.picture}
                            />
                        </OwnerImgDiv>
                    </OwnerContainer>
                    <DivRow>
                        <Rating rate={parseInt(info.rating)} />
                    </DivRow>
                </DivColHost>
            </TitleContainer>
            <DetailsContainer>
                <Dropdown line={'Description'} text={info.description} />
                <Dropdown line={'Équipements'} text={info.equipments} />
            </DetailsContainer>
            </MainContainer>
            <Footer fSwitch={true} />
        </Fragment>
    )
}
