import React, { Component } from 'react';
import { Paper, Tabs, Tab} from '@material-ui/core';

export default class extends Component {
	state = {
		value: 0
	}

	handleChange = (event, value) => {
    	this.setState({ value });
 	}

	render() {
		return (
			<Paper>
		        <Tabs
		        	value={this.state.value}
		        	onChange={this.handleChange}
		        	indicatorColor="primary"
		        	textColor="primary"
		        	centered
		        >
		        	<Tab label="Item One" />
		        	<Tab label="Item Two" />
		        	<Tab label="Item Three" />
		        </Tabs>
		     </Paper>
		);
	}
}