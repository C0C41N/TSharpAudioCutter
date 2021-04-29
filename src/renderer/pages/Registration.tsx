import React, { Fragment } from 'react';

import Back from '@comp/back';
import { Btn, Heading, Illustration, Input, SubHeading } from '@styles/pages/registration';

function Registration() {
	return (
		<Fragment>
			<Back />
			<Heading>License</Heading>
			<SubHeading>Paste license key you got from HUD</SubHeading>
			<Illustration />
			<Input placeholder='zLTfb3s8NF' autoFocus />
			<Btn>Done</Btn>
		</Fragment>
	);
}

export default Registration;
