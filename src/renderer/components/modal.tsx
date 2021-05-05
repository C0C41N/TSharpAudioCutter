import React, { Fragment, useCallback, useEffect, useState } from 'react';

import { useStates } from '@services';
import Loading from '@styles/components/loading';
import { Backdrop, Desc, Dismiss, Heading, Level, SubDesc } from '@styles/components/modal';

export const defModal: IModal_ = {
	show: false,
	loading: false,
	desc: '',
	level: 2,
	subDesc: '',
};

const fillNulls = (a: any, b: any) =>
	Object.keys(a).reduce((c, e) => ({ ...c, [e]: a[e] || b[e] }), {} as any);

function Modal() {
	const { modal, $modal, setModal, useForceUpdate } = useStates();
	const [fadeOut, setFadeOut] = useState(false);

	const forceUpdate = useForceUpdate();

	const modal_ = fillNulls(modal(), defModal) as IModal_;
	const { show, level, desc, subDesc, loading } = modal_;

	const onEnter = useCallback(
		({ key }) => {
			if (key !== 'Enter' || !show || loading) return;
			setFadeOut(true);
			setTimeout(() => {
				setModal(defModal);
				setFadeOut(false);
			}, 300);
		},
		[modal()]
	);

	useEffect(() => {
		document.addEventListener('keydown', onEnter);
		return () => document.removeEventListener('keydown', onEnter);
	}, [onEnter]);

	useEffect(() => {
		const sub = $modal.subscribe(() => forceUpdate());
		return () => sub.unsubscribe();
	}, []);

	const h = ['Info', 'Warning', 'Error'];

	const dialog = (
		<Fragment>
			<Heading level={level}>{h[level]}</Heading>
			<Desc>{desc}</Desc>
			<SubDesc>{subDesc}</SubDesc>
			<Dismiss>
				Press &nbsp; <strong>Enter</strong> &nbsp; to dismiss
			</Dismiss>
		</Fragment>
	);

	return show ? (
		<Backdrop fadeOut={fadeOut}>
			{loading ? <Loading size='250px' /> : dialog}
		</Backdrop>
	) : null;
}

export default Modal;

export interface IModal {
	show: boolean;
	loading?: boolean;
	level?: Level;
	desc?: string;
	subDesc?: string;
}

export interface IModal_ {
	show: boolean;
	loading: boolean;
	level: Level;
	desc: string;
	subDesc: string;
}
