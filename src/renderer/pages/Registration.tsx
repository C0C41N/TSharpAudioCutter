import React, { Fragment, useCallback } from 'react';

import Back from '@comp/back';
import { useStates } from '@services';
import { Btn, Heading, Illustration, Input, SubHeading } from '@styles/pages/registration';
import { Level } from '@types';

function Registration() {
	const { Modal } = useStates();
	const { set: setModal } = Modal(false);

	const clickRegister = useCallback(() => {
		setModal({
			show: true,
			level: Level.error,
			loading: true,
			desc: 'Sorry, It looks like you’re blocked.',
			subDesc: 'Contact the creator for assistance.',
		});

		setTimeout(() => {
			setModal({ show: false });
		}, 3000);
	}, []);

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
			<Input autoFocus placeholder='zLTfb3s8NF' onKeyDown={enterInput} />
			<Btn onClick={clickRegister}>Done</Btn>
		</Fragment>
	);
}

export default Registration;
