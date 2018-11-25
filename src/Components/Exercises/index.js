import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';

const styles = {
	Paper : {
		padding: 20,
		margin: 10,
		height: 500,
		overflowY: 'auto'
	}
};

export default ({ exercises, category, onClick, title, description }) => {
	let muscleGroupList = (muscle) => {
		return (
			<Fragment key={muscle}>
				<Typography
					variant='headline'
					style={{textTransform: 'capitalize'}}
				>
					{muscle}
				</Typography>
				<List>
					{exercises[muscle].map(exercise => {
						return (
							<ListItem 
								button 
								key={exercise.title}
								onClick={onClick(exercise.title, exercise.description)}
							>
								<ListItemText primary={exercise.title} />
							</ListItem>
						);
					})}
				</List>
			</Fragment>
		);
	}

	return (
		<Grid container>
			<Grid item sm>
				<Paper style={styles.Paper} >
					{category === 'All'
						? Object.keys(exercises).map(muscle => muscleGroupList(muscle))
						: muscleGroupList(category)
					}
				</Paper>
			</Grid>
			<Grid item sm>
				<Paper style={styles.Paper} >
					<Typography
						variant='display1'
					>
						{title === ''
							? 'Welcome!'
							: title
						}
					</Typography>
					<Typography
						variant='subheading'
						style={{marginTop: 20}}
					>
						{description === ''
							? 'Please select an exercise from the list on the left.'
							: description
						}
					</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
}
	

	