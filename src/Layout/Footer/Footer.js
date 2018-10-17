import React, { Component } from 'react';
import { Paper, Tabs, Tab} from '@material-ui/core';
import style from './FooterStyles';

export default class extends Component {
	state = {
		value: 0
	}

	handleChange = (event, value) => {
    	this.setState({ value });
 	}

	render() {
		return (
			<Paper style={style.Paper}>
		        <Tabs
		        	value={this.state.value}
		        	onChange={this.handleChange}
		        	indicatorColor="primary"
		        	textColor="primary"
		        	centered
		        	style={style.Tabs}
		        >
		        	<Tab label="Item One" style={style.Tab}/>
		        	<Tab label="Item Two" style={style.Tab} />
		        	<Tab label="Item Three" style={style.Tab} />
		        </Tabs>
		     </Paper>
		);
	}
}