import React, { Fragment, KeyboardEvent } from 'react';

import Back from '@comp/back';
import { useStates } from '@services';
import { MachineID } from '@services/native';
import { Btn, Heading, Illustration, Input, SubHeading } from '@styles/pages/registration';
import { Level } from '@types';

function Registration() {
	const { Modal } = useStates();
	const { val: modal, set: setModal } = Modal();

	const clickRegister = () => {
		const { machineIdSync } = MachineID;

		const deviceId = machineIdSync(true);
	};

	const enterInput = ({ key }: KeyboardEvent) =>
		key === 'Enter' && clickRegister();

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
