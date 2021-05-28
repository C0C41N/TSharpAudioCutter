import React, { Fragment, useCallback, useState } from 'react';

import { useStates } from '@services';
import { useListenEvent } from '@services/hooks';
import Loading from '@styles/components/loading';
import { Backdrop, Desc, Dismiss, Heading, SubDesc } from '@styles/components/modal';

function Modal() {
	const { Modal } = useStates();
	const { val, set, changed, last } = Modal();

	const [fadeOut, setFadeOut] = useState(false);
	const [visible, setVisible] = useState(false);

	const modal = last ? { ...last, ...val } : val;
	const { show, level, desc, subDesc, loading } = modal;

	const FadeOut = () => {
		setFadeOut(true);
		setTimeout(() => {
			if (!fadeOut) return;
			setVisible(false);
			setFadeOut(false);
		}, 300);
	};

	changed(e => {
		console.log({ e });
		if (fadeOut) setFadeOut(false);
		if (e.show) setVisible(true);
		else FadeOut();
	}, false);

	const onEnter = useCallback(
		({ key }) => {
			if (key !== 'Enter' || !show || loading) return;
			set({ show: false, loading: false });
		},
		[modal]
	);

	useListenEvent(document, 'keydown', onEnter);

	const h = ['Info', 'Warning', 'Error'];
	const heading = level !== undefined ? h[level] : '';

	const dialog = (
		<Fragment>
			<Heading level={level}>{heading}</Heading>
			<Desc>{desc}</Desc>
			<SubDesc>{subDesc}</SubDesc>
			<Dismiss>
				Press &nbsp; <strong>Enter</strong> &nbsp; to dismiss
			</Dismiss>
		</Fragment>
	);

	return visible ? (
		<Backdrop fadeOut={fadeOut}>
			{loading ? <Loading size='250px' /> : dialog}
		</Backdrop>
	) : null;
}

export default Modal;

// TODO: add dismiss option
// TODO: make a btn, pass whole object named btn
