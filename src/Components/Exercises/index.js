import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';

const styles = {
	Paper : {
		padding: 20,
		margin: 10
	}
};

export default ({ exercises }) => {
	return (
		<Grid container>
			<Grid item sm>
				<Paper style={styles.Paper} >
					{Object.keys(exercises).map(muscles => {
						return (
							<Fragment>
								<Typography
									variant='headline'
									style={{textTransform: 'capitalize'}}
								>
									{muscles}
								</Typography>
								<List>
									{exercises[muscles].map(exercise => {
										return (
											<ListItem button>
												<ListItemText primary={exercise.title} />
											</ListItem>
										);
									})}
								</List>
							</Fragment>
						);
					})}
				</Paper>
			</Grid>
			<Grid item sm>
				<Paper style={styles.Paper} >
					Right Pane
				</Paper>
			</Grid>
		</Grid>
	);
}
	

	