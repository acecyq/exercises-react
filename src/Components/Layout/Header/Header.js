import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default props =>
	<div>
     	<AppBar position="static" gutterbottom='true'>
        	<Toolbar>
          		<Typography variant="h4" color="inherit">
            		Exercise Database
          		</Typography>
        	</Toolbar>
      	</AppBar>
    </div>