import React from 'react'

const DESCRIPTION_CLASS = 'description'

export const RowItemDescription = (props) => {

    if ('string' === typeof props.content) {
        return <div className={DESCRIPTION_CLASS}>{props.content}</div>
    }

    if (props.content instanceof Array) {
        return <div className={DESCRIPTION_CLASS}>{props.content.map(item => <RowItemDescription content={item}/>)}</div>
    }
    
    return null
}