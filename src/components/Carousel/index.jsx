import React, { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

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
    position: relative;
    top: -240px;
    color: white;
    padding: 2%;
`

export default function Carousel({ images, text }) {
    const [index, setIndex] = useState(0)
    let current = index

    function increaseIndex(current) {
        current === images.length - 1 ? (current = 0) : (current = index + 1)
        setIndex(current)
    }
    function decreaseIndex(current) {
        current === 0 ? (current = images.length - 1) : (current = index - 1)
        setIndex(current)
    }

    return (
        <Fragment>
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
        </Fragment>
    )
}
