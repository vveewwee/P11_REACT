import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Dropdown from '../../components/Dropdown'
import Footer from '../../components/Footer'
import data from '../../data/data.json'
import colors from '../../style/colors'
import Carousel from '../../components/Carousel'
import Rating from '../../components/Rating'

const DivRow = styled.div`
    display: flex;
    flex-direction: row;
`
const DivCol = styled.div`
    display: flex;
    flex-direction: column;
`
const ImgContainer = styled.div`
    width: 95%;
    height: 400px;
    object-fit: cover;
    border-radius: 15px;
    padding: 2%;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2%;
`

const DetailsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2%;
`
const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Tag = styled.div`
    padding: 2%;
    margin: 2%;
    background-color: ${colors.primary};
    border-radius: 25px;
    color: white;
    font-size: 18px;
    font-weight: 300;
`

const OwnerContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const OwnerName = styled.div``
const OwnerImgDiv = styled.div`
    border-radius: 50%;
    width: 50px;
    height: 50px;
`
const OwnerImg = styled.img`
    width: 100%;
    heigh: 100%;
    border-radius: 50%;
    object-fit: cover;
`

const H1 = styled.h1`
    margin-bottom: 1%;
`

export default function Housing() {
    const { id } = useParams()
    const info = data.find((line) => line.id === id)

    return (
        <Fragment>
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
                <DivCol
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '2%',
                    }}
                >
                    <OwnerContainer>
                        <OwnerName>{info.host.name}</OwnerName>
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
                </DivCol>
            </TitleContainer>
            <DetailsContainer>
                <Dropdown line={'Description'} text={info.description} />
                <Dropdown line={'Équipements'} text={info.equipments} />
            </DetailsContainer>
            <Footer fSwitch={true} />
        </Fragment>
    )
}
