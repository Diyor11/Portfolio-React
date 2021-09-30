import React from 'react';
import './card.scss';

const Card = ({data, renderBody}) => {
    return (
        <>
            {
                data ? data.map((item, index) => renderBody(item, index)):null
            }
        </>
    )
}

export default Card
