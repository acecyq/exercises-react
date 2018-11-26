import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Create from '../../Exercises/Dialog/Create';

export default props => {
	return (
		<div>
			<AppBar position="static" gutterbottom='true'>
				<Toolbar>
					<Typography 
						variant="h4" 
						color="inherit"
						style={{flex: 1}}
					>
						Exercise Database
					</Typography>
					<Create />
				</Toolbar>
			</AppBar>
		</div>
	);
}