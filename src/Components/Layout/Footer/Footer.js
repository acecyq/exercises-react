import React from 'react';
import { Paper, Tabs, Tab} from '@material-ui/core';

export default ({ muscles, value, onChange }) => {
	return (
		<Paper>
			<Tabs
				value={value}
				indicatorColor="primary"
				textColor="primary"
				centered
				onChange={onChange}
			>
				{muscles.map(group => {
					return <Tab label={group} key={group} />
				})}
			</Tabs>
			</Paper>
	);
}