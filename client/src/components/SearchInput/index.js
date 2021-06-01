import React, { Component } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

import FormGroup from '../shared/FormGroup';
import Input from '../shared/Input';
import Button from '../shared/Button';

class SearchInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search_text: ''
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(ev){
		this.setState({
			search_text: ev.target.value
		});
	}
	handleClick(){
		this.props.onSubmit(this.state.search_text);
	}
	render() {
		return <FormGroup>
			<Input type="text" onChange={this.handleChange}></Input>
			<Button type="button" onClick={this.handleClick} ><BiSearchAlt /></Button>
		</FormGroup>
	}
}

export default SearchInput;