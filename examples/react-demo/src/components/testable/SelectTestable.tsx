import React from 'react';
import { Select } from 'cyclops/web';

export const SelectTestable = () => {
	return (
		<Select
			options={[
				'option 1',
				'option 2: electric boogaloo',
				'some',
				'more',
				'options',
			]}
			multiSelect={false}
		/>
	);
};
