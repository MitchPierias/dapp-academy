import React from 'react'
import { Thumbnail } from "./thumbnail";
import { Duration } from "./duration";
import { RowItemDescription } from "./row-item-description";

export const RowItem = (props) =>  (
    <div className={'row-container'}>
        <Thumbnail src={props.thumb} />
        <div className={'content'}>
            <div className={'col'}>
                <div className='cell'>
                    <h4 className={'title'}>{props.title}</h4>
                    {props.subtitle && <div className='subtitle'>{props.subtitle}</div>}
                </div>
                <div className={'detail'}>
                    {props.location && <div className={'location'}>{props.location}</div>}
                    <Duration startTime={props.startTime} endTime={props.endTime} />
                </div>
            </div>
            {props.description && <RowItemDescription content={props.description}/>}
        </div>
    </div>
)