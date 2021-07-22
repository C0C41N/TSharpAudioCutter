import React, { Fragment, KeyboardEvent, useRef, useState } from 'react';
import { useHistory } from 'react-router';

import Back from '@comp/back';
import { useStates } from '@services';
import { registerLic } from '@services/apiRegisterLic';
import { showLoading, validateInput } from '@services/util';
import { Btn, Heading, Illustration, Input, SubHeading } from '@styles/pages/registration';
import { ApiRes, Level, RegisterLicReturn } from '@types';

function Registration() {
	// TODO: refactor to hook
	const { Modal, License } = useStates();
	const { set: setLic } = License({ reactive: false });
	const { val: modal, set: setModal } = Modal();

	const { replace } = useHistory();

	const [red, setRed] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);

	const validate = () =>
		validateInput({
			inputRef,
			setRed,
			placeholder: 'Enter key here!',
		});

	const clickRegister = async () => {
		if (modal.show) return;

		const key = validate();
		if (!key) return;

		showLoading(setModal);

		const res: ApiRes<RegisterLicReturn> = await registerLic(key);

		const { data, func, type } = res;

		if (type === 'error') {
			if (data === 'Invalid key')
				return setModal({
					show: true,
					loading: false,
					level: Level.error,
					desc: data,
					subDesc: `The key you typed doesn't exist.`,
				});

			return setModal({
				show: true,
				loading: false,
				level: Level.error,
				desc: 'Unexpected error from API',
				subDesc: `${data} | ${func}`,
			});
		}

		if (typeof data === 'string') return; // for type assertion

		const { blocked, lic } = data;

		if (blocked)
			return setModal({
				show: true,
				level: Level.error,
				loading: false,
				desc: 'Sorry, It looks like you’re blocked.',
				subDesc: 'Contact the creator for assistance.',
			});

		replace('/main');
		setLic(lic);

		setModal({
			show: true,
			loading: false,
			level: Level.info,
			desc: 'License key Updated',
		});
	};

	const enterInput = ({ key }: KeyboardEvent) =>
		key === 'Enter' && clickRegister();

	return (
		<Fragment>
			<Back />
			<Heading>License</Heading>
			<SubHeading>Paste license key you got from HUD</SubHeading>
			<Illustration />
			<Input
				autoFocus
				placeholder='zLTfb3s8NF'
				onKeyDown={enterInput}
				redFlash={red}
				ref={inputRef}
			/>
			<Btn onClick={clickRegister}>Done</Btn>
		</Fragment>
	);
}

export default Registration;
