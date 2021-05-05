import React, { useCallback, useEffect, useState } from 'react';

import { useStates } from '@services';
import { Backdrop, Desc, Dismiss, Heading, Level, SubDesc } from '@styles/components/modal';

const defModal: IModal = { show: false, desc: '', level: 2, subDesc: '' };

function Modal() {
	const { $$modal, $setModal } = useStates();
	const [modal, setModal] = useState<IModal>(defModal);
	const [fadeOut, setFadeOut] = useState(false);

	const { show, level, desc, subDesc } = modal;

	const onEnter = useCallback(
		({ key }) => {
			if (key !== 'Enter' || !show) return;
			setFadeOut(true);
			setTimeout(() => {
				$setModal(defModal);
				setFadeOut(false);
			}, 300);
		},
		[modal]
	);

	useEffect(() => {
		document.addEventListener('keydown', onEnter);
		return () => document.removeEventListener('keydown', onEnter);
	}, [onEnter]);

	useEffect(() => {
		const sub = $$modal.subscribe(e => e && setModal(e));
		return () => sub.unsubscribe();
	}, []);

	const h = ['Info', 'Warning', 'Error'];

	return show ? (
		<Backdrop fadeOut={fadeOut}>
			<Heading level={level}>{h[level]}</Heading>
			<Desc>{desc}</Desc>
			<SubDesc>{subDesc}</SubDesc>
			<Dismiss>
				Press &nbsp; <strong>Enter</strong> &nbsp; to dismiss
			</Dismiss>
		</Backdrop>
	) : null;
}

export default Modal;

export interface IModal {
	show: boolean;
	level: Level;
	desc: string;
	subDesc: string;
}
