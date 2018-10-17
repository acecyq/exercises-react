import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import style from './HeaderStyles';

// const style = {
// 	AppBar: {
// 		backgroundColor: 'purple',
// 		height: '100px'
// 	},
// 	Typography: {
// 		marginTop: '30px',
// 		fontWeight: '700'
// 	}
// };

export default props =>
	<div>
     	<AppBar position="static" gutterbottom='true' style={style.AppBar}>
        	<Toolbar>
          		<Typography variant="h4" color="inherit" style={style.Typography}>
            		Exercises
          		</Typography>
        	</Toolbar>
      	</AppBar>
    </div>