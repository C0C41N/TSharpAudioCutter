import React, { Fragment, useCallback } from 'react';

import Back from '@comp/back';
import { useStates } from '@services';
import { Level } from '@styles/components/modal';
import { Btn, Heading, Illustration, Input, SubHeading } from '@styles/pages/registration';

function Registration() {
	const { setModal } = useStates();

	const clickRegister = useCallback(
		() =>
			setModal({
				show: true,
				level: Level.error,
				desc: 'Sorry, It looks like you’re blocked.',
				subDesc: 'Contact the creator for assistance.',
			}),
		[]
	);

	const enterInput = useCallback(
		({ key }) => key === 'Enter' && clickRegister(),
		[]
	);

	return (
		<Fragment>
			<Back />
			<Heading>License</Heading>
			<SubHeading>Paste license key you got from HUD</SubHeading>
			<Illustration />
			<Input placeholder='zLTfb3s8NF' autoFocus onKeyDown={enterInput} />
			<Btn onClick={clickRegister}>Done</Btn>
		</Fragment>
	);
}

export default Registration;
