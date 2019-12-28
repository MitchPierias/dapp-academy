import React from 'react'
import { Thumbnail } from "./thumbnail";
import { Duration } from "./duration";

const DESCRIPTION_CLASS = 'description'

export const RowItem = (props) => (
    <div className={'row-container'}>
        <Thumbnail src={props.thumb} />
        <div className={'content'}>
            <div className={'col'}>
                <div style={{ flex: 1 }}>
                    <h4 className={'title'}>{props.title}</h4>
                    <div className='subtitle'>{props.subtitle}</div>
                </div>
                <div className={'detail'}>
                    {props.location && <div className={'location web'}>{props.location}</div>}
                    <Duration startTime={props.startTime} endTime={props.endTime} />
                </div>
            </div>
            <RowItemDescription content={props.description} />
        </div>
    </div>
)

export const RowItemDescription = (props) => {

    if ('string' === typeof props.content) {
        return <div className={[DESCRIPTION_CLASS, 'web'].join(' ')}>{props.content}</div>
    }

    if (props.content instanceof Array) {
        return <ul className={DESCRIPTION_CLASS}>{props.content.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
    }

    return null
}