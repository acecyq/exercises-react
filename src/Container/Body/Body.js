import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import Left from './Left/Left';
import Right from './Right/Right';

export default props => {
	return (
		<Grid container spacing={10}>
			<Left />
			<Right />
		</Grid>
	);
}