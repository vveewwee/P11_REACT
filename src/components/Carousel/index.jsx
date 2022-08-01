import React, { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { device } from '../../style/size'

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 15px;
`

const Arrows = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 4em;
    position: absolute;
    top: 44%;
    color: white;
    padding: 2%;
    width:96%;
    @media ${device.mobile} {
        top:46%;
    }

`

const Container= styled.div`
margin-left:auto;
margin-right:auto;
max-width:1200px;
position:relative;
height:500px;
`

export default function Carousel({ images, text }) {
    const [index, setIndex] = useState(0);
    let current = index;

    function increaseIndex(current) {
        current === images.length - 1 ? (current = 0) : (current = index + 1)
        setIndex(current)
        console.log("increase:current:", current)
    }
    function decreaseIndex(current) {
        current === 0 ? (current = images.length - 1) : (current = index - 1)
        setIndex(current)
        console.log("decrease:current:", current)
    }
 
    return (
        <Fragment>
            <Container>
            <Img
                key={`${images[index]}-${index}`}
                src={images[index]}
                alt={text}
            />
            <Arrows>
                <div onClick={() => decreaseIndex(current)}>
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        key={`${index}-'faAngleLeft'`}
                    />
                </div>
                <div onClick={() => increaseIndex(current)}>
                    <FontAwesomeIcon
                        icon={faAngleRight}
                        key={`${index}-'faAngleRight'`}
                    />
                </div>
            </Arrows>
            </Container>
        </Fragment>
    )
}
