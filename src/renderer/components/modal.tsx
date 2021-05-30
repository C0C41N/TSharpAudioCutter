import React, { Fragment, useEffect, useRef, useState } from 'react';

import { useStates } from '@services';
import { useListenEvent } from '@services/hooks';
import Loading from '@styles/components/loading';
import { Backdrop, Btn, Desc, Dismiss, Heading, SubDesc } from '@styles/components/modal';

import type { IModalBtn } from '@types';

function Modal() {
	const { Modal } = useStates();
	const { val, set, changed, last } = Modal();

	const fading = useRef(false);
	const [fadeOut, setFadeOut] = useState(false);
	const [visible, setVisible] = useState(false);

	const nullBtn: IModalBtn = { show: false, caption: '', callback: () => {} };
	const modal = last ? { ...last, ...val } : val;

	const {
		show,
		level,
		desc,
		subDesc,
		loading,
		dismiss = true,
		btn = nullBtn,
	} = modal;

	const { show: btnShow, callback: btnCallback, caption: btnCaption } = btn;

	const hideModal = () => {
		if (fading.current) {
			fading.current = false;
			setVisible(false);
			setFadeOut(false);
		}
	};

	changed(e => {
		hideModal();

		if (e.show) setVisible(true);
		else {
			fading.current = true;
			setFadeOut(true);
			setTimeout(hideModal, 300);
		}
	});

	const onEnter = ({ key }: any) => {
		if (key !== 'Enter' || !show || !dismiss || loading) return;
		set({ show: false, loading: false });
	};

	useListenEvent(document, 'keydown', onEnter);

	const h = ['Info', 'Warning', 'Error'];
	const heading = level !== undefined ? h[level] : '';

	const dialog = (
		<Fragment>
			<Heading level={level}>{heading}</Heading>
			<Desc>{desc}</Desc>
			<SubDesc>{subDesc}</SubDesc>
			{btnShow && <Btn onClick={btnCallback}>{btnCaption}</Btn>}
			{dismiss && (
				<Dismiss>
					Press &nbsp; <strong>Enter</strong> &nbsp; to dismiss
				</Dismiss>
			)}
		</Fragment>
	);

	return visible ? (
		<Backdrop fadeOut={fadeOut}>
			{loading ? <Loading size='250px' /> : dialog}
		</Backdrop>
	) : null;
}

export default Modal;
