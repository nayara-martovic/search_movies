import React from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

import Card from '../../shared/Card';
import DataCard from './style';

export const TotalCard = ({ total }) => {
    return (
        <Card className='w100 card-primary'>
            <DataCard className='float-right'>
                <h4 className='subtitle'>Total</h4>
                <h2 className='title total'>{ total }</h2>
            </DataCard>
        </Card>
    );
}

export const MinCard = ({ year, total }) => {
    return (
        <Card className='w100'>
            <DataCard>
                <h4 className='title'>{ year } <i className='min-icon'><AiOutlineArrowDown /></i></h4>
                <h2 className='text'>Has fewer movies released</h2>
            </DataCard>
        </Card>
    );
}

export const MaxCard = ({ year, total }) => {
    return (
        <Card className='w100'>
            <DataCard>
                <h4 className='title'>{ year } <i className='max-icon'><AiOutlineArrowUp /></i></h4>
                <h2 className='text'>Has more movies released</h2>
            </DataCard>
        </Card>
    );
}