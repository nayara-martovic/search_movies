import React, { Component } from 'react';
import { FcBusinesswoman } from 'react-icons/fc';

import { List, ListItem } from './style';
import Card from '../../shared/Card';

class MoviesList extends Component {
	render() {
		return <Card className='v100'>
			<h3 className='title text-primary'>Movies by <strong>Year</strong></h3>
			<h5 className='subtitle'>Updated by <FcBusinesswoman /> Nayara</h5>
			<List>
				{
					this.props.data.map(({year, movies}, index) => {
						let desc = movies === 1 ? ' movie' : ' movies'

						return (
							<ListItem key={index}>
								<span className='year'>{year}</span>
								<div className='total'>
									<h3>{movies}{desc}</h3>
									<span>released</span>
								</div>
							</ListItem>
						)
					})
				}
			</List>
		</Card>
	}
}

export default MoviesList;