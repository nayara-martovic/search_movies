import React from 'react';
import Chart from 'react-google-charts';

import Card from '../../shared/Card';

const ChartCard = ({ data }) => {
    return (
        <Card>
            <h3 className='title text-primary mb-2'>Movies by <strong>Decade</strong></h3>
            <Chart
                width={'100%'}
                height={'100%'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[ ['Decade', 'Movies'], ...data]}
                options={{
                    colors: ['#7D78F6'],
                    legend: { position: 'none' },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </Card>
    );
}

export default ChartCard;