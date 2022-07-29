import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import colors from '../../style/colors'

export default function Rating({ rate }) {
    const starBag = []
    for (let i = 5; i > 0; i--)
        i <= rate ? starBag.push('good') : starBag.push('empty')

    return (
        <Fragment>
            {starBag.map((star, index) =>
                star === 'good' ? (
                    <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: `${colors.primary}` }}
                        key={`${index}-'star'-${colors.primary}`}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: `${colors.background}` }}
                        key={`${index}-'star'-${colors.background}`}
                    />
                )
            )}
        </Fragment>
    )
}
