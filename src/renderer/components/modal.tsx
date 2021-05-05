import React, { useEffect, useState } from 'react';

import { useStates } from '@services';
import { Backdrop, Desc, Dismiss, Heading, Level, SubDesc } from '@styles/components/modal';

const defModal: IModal = { show: false, desc: '', level: 2, subDesc: '' };

function Modal() {
	const { $$modal } = useStates();
	const [modal, setModal] = useState<IModal>(defModal);
	const { show, level, desc, subDesc } = modal;

	useEffect(() => {
		const sub = $$modal.subscribe(e => e && setModal(e));
		return () => sub.unsubscribe();
	}, []);

	const h = ['Info', 'Warning', 'Error'];

	return show ? (
		<Backdrop>
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
