import React from 'react'
import styled from 'styled-components'
const CardDiv = styled.div`
    width: 90%;
    height: 100%;
    padding: 5%;
    object-fit: cover;
`
const CardImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
`
const CardTitle = styled.span`
    color: white;
    position: relative;
    top: -20%;
    left: 5%;
    font-size: 0.7em;
    @media (max-width: 767px) {
        top: -40px;
    }
`

export default function Card({ cover, title }) {
    return (
        <CardDiv>
            <CardImg src={cover} alt={title} />
            <CardTitle>{title}</CardTitle>
        </CardDiv>
    )
}
