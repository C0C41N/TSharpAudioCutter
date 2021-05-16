import React, { Fragment, KeyboardEvent, useRef, useState } from 'react';
import { useHistory } from 'react-router';

import Back from '@comp/back';
import { useStates } from '@services';
import { clearCachedLic, registerLic, setCachedLic } from '@services/Lic';
import { Btn, Heading, Illustration, Input, SubHeading } from '@styles/pages/registration';
import { ApiRes, Level, RegisterLicReturn } from '@types';

function Registration() {
	const { Modal, License } = useStates();
	const { set: setLic } = License({ reactive: false });
	const { val: modal, set: setModal } = Modal();

	const { replace } = useHistory();

	const [red, setRed] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);

	const validate = (): false | string => {
		// TODO: refactor
		const input = inputRef.current;
		if (input) {
			const val = input.value;
			if (val.length) return val;
			input.placeholder = 'Enter key here!';
		}
		setRed(true);
		setTimeout(() => setRed(false), 300);
		return false;
	};

	const clickRegister = async () => {
		if (modal.show) return;

		const key = validate();
		if (!key) return;

		// TODO: refactor showLoading
		setModal({ show: true, loading: true });

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

		if (typeof data === 'string') return;

		const { blocked, lic } = data;

		if (blocked) {
			clearCachedLic();
			setLic(0);

			return setModal({
				show: true,
				level: Level.error,
				loading: false,
				desc: 'Sorry, It looks like you’re blocked.',
				subDesc: 'Contact the creator for assistance.',
			});
		}

		replace('/main');
		setCachedLic(lic);
		setLic(lic);

		setModal({
			show: true,
			loading: false,
			level: Level.info,
			desc: 'License key Changed',
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
