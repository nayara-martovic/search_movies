import React, { Component } from 'react';
import axios from 'axios';

import { Main, PageCard } from './components/Main';
import SearchInput from './components/SearchInput';
import Dashboard from './components/Dashboard';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			status: '',
			movies_data: {}
		};

		this.searchMovies = this.searchMovies.bind(this);
	}

	searchMovies(title){
		this.setState({
			status: 'loading'
		});

		axios.get('http://localhost:8000/api/movies/count?title='+title)
		.then(response => {
			this.setState({
				status: '',
				movies_data: response.data.data
			});
		})
		.catch(error => {
			console.log(error);
			this.setState({
				status: 'not_found'
			});
		});
	}
	
	render() {
		return <Main>
      <PageCard>
        <SearchInput onSubmit={this.searchMovies} />
        <Dashboard status={this.state.status} data={this.state.movies_data} />
      </PageCard>
    </Main>
	}
}

export default App;
