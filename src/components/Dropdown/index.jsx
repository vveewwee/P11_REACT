import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import colors from '../../style/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const DropdownDiv = styled.div`
    background-color: ${colors.primary};
    border-radius: 4px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    margin: 2%;
    z-index: 55666;
`
const DropdownLine = styled.p`
    padding: 5px;
    font-weight: 300;
`
const DropdownContainer = styled.span`
    margin-top: -22px;
    padding-top: 15px;
    margin-left: 2%;
    width: 96%;
    background-color: ${colors.background};
    z-index: 0;
`
const DropdownText = styled.p`
    color: ${colors.primary};
    font-weight: 200;
    padding: 1%;
`
const FlexCol = styled.div`
    display: flex;
    flex-flow: column;
    width: 90%;
`
export default function Dropdown({ line, text }) {
    const [show, setshow] = useState(false)
    return (
        <Fragment>
            <FlexCol>
                <DropdownDiv
                    onClick={() => {
                        show ? setshow(false) : setshow(true)
                    }}
                >
                    <DropdownLine>{line}</DropdownLine>
                    {show ? (
                        <FontAwesomeIcon
                            icon={faAngleUp}
                            style={{ paddingRight: '2%' }}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            style={{ paddingRight: '2%' }}
                        />
                    )}
                </DropdownDiv>
                {show && (
                    <DropdownContainer>
                        {line === 'Équipements' ? (
                            text.map((equip, index) => (
                                <DropdownText key={`${index}-${equip}`}>
                                    {equip}
                                </DropdownText>
                            ))
                        ) : (
                            <DropdownText>{text}</DropdownText>
                        )}
                    </DropdownContainer>
                )}
            </FlexCol>
        </Fragment>
    )
}
