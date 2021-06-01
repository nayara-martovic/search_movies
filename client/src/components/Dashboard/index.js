import React, { Component } from 'react';

import MoviesList from './MoviesList';
import ChartCard from './Chart';
import { DashboardSection, Column01, Column02, ChartContainer, DataContainer } from './style';
import { TotalCard, MinCard, MaxCard } from './DataCard';

class Dashboard extends Component {
    getFormatedData(){
        let list = this.props.data.moviesByYear;
        let data = []
        let maxObj = {movies: 0};
        let minObj = {movies: 100000000};

        if (list && list.length){
            list.forEach(item => {
                let year = parseInt(item.year);
                let decade = (year - (year % 10)).toString();

                if(data[decade] === undefined)
                    data[decade] = 1;
                else 
                    data[decade]++;

                updateValues(item);
            });

            if(data)
                data = Object.keys(data).map(key => [key, data[key]]);
        }
        
        return { 
            list: list, 
            chart_data: data,
            total: this.props.data.total,
            max: maxObj,
            min: minObj
        }

        function updateValues(item){
            if (item.movies < minObj.movies)
                minObj = item;
    
            if (item.movies > maxObj.movies)
                maxObj = item;
        }
    }

	render() {
		if (this.props.status === 'loading'){
			return <DashboardSection>Loading...</DashboardSection>
		} else if (this.props.status ==='not_found'){
			return <DashboardSection>No movies founded</DashboardSection>
		} else if (!this.props.data || this.props.data.moviesByYear === undefined){
			return <DashboardSection>No movies founded</DashboardSection>
		}

        let data = this.getFormatedData();

		return (
            <DashboardSection>
                <Column01>
                    <MoviesList data={ data.list } />
                </Column01>
                <Column02>
                    <DataContainer>
                        <TotalCard total={ data.total }/>
                        <MinCard year={ data.min.year } total={ data.min.movies }/>
                        <MaxCard year={ data.max.year } total={ data.max.movies }/>
                    </DataContainer>
                    <ChartContainer>
                        <ChartCard data={ data.chart_data } />
                    </ChartContainer>
                </Column02>
            </DashboardSection>
        );
	}
}

export default Dashboard;