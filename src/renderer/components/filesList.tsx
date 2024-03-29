import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useStates } from '@services';
import { useListenEvent } from '@services/hooks';
import { Container, List, Scroll, Thumb } from '@styles/components/filesList';

import File from './file';

function FilesList() {
	const contRef = useRef<div>(null);
	const scrollRef = useRef<div>(null);
	const thumbRef = useRef<div>(null);

	const { Files } = useStates();
	const { val: files } = Files();

	const [drag, setDrag] = useState(false);
	const [posY, setPosY] = useState(0);

	const setThumbHeight = useCallback(() => {
		const cont = contRef.current;
		const scroll = scrollRef.current;
		const thumb = thumbRef.current;

		if (!cont || !scroll || !thumb) return;

		const ratio = cont.clientHeight / cont.scrollHeight;
		const height = scroll.clientHeight * ratio;
		thumb.style.height = height > 30 ? `${height}px` : '30px';
	}, []);

	const scroll = useCallback(() => {
		const cont = contRef.current;
		const scroll = scrollRef.current;
		const thumb = thumbRef.current;
		if (!cont || !scroll || !thumb) return;

		const percent = cont.scrollTop / (cont.scrollHeight - cont.clientHeight);

		const total = scroll.clientHeight - thumb.clientHeight - 1;
		const pos = total * percent;
		thumb.style.top = `${1 + pos}px`;
	}, []);

	const mousemove = useCallback(
		e => {
			const thumb = thumbRef.current;
			const scroll = scrollRef.current;
			const cont = contRef.current;
			if (!drag || !thumb || !scroll || !cont) return;

			const clientY = (e as MouseEvent).clientY;
			const deltaY = clientY - posY;

			const total = scroll.clientHeight - thumb.clientHeight - 1;
			const iPos = parseInt(thumb.style.top) + deltaY;
			const pos = iPos < 1 ? 1 : iPos > total ? total : iPos;
			thumb.style.top = `${pos}px`;

			const percent = (pos - 1) / (total - 1);
			cont.scrollTop = percent * (cont.scrollHeight - cont.clientHeight);

			setPosY(clientY);
		},
		[drag, posY]
	);

	const mousedown = useCallback(e => {
		const clientY = (e as MouseEvent).clientY;
		setPosY(clientY);
		setDrag(true);
	}, []);

	const mouseup = useCallback(() => {
		if (!drag) return;
		setDrag(false);
	}, [drag]);

	useEffect(() => {
		const thumb = thumbRef.current;
		if (thumb) thumb.style.top = '1px';
	}, []);

	useEffect(setThumbHeight, [files]);

	useListenEvent(document, 'mousemove', mousemove);
	useListenEvent(document, 'mouseup', mouseup);
	useListenEvent(document, 'mouseleave', mouseup);

	const fileList = Object.values(files).map(e => <File file={e} key={e.id} />);
	const showScroll = Object.keys(files).length > 4;
	const scrollBar = (
		<Scroll ref={scrollRef}>
			<Thumb ref={thumbRef} onMouseDown={mousedown} />
		</Scroll>
	);

	return (
		<Container>
			<List ref={contRef} onScroll={scroll}>
				{fileList}
			</List>
			{showScroll && scrollBar}
		</Container>
	);
}

export default FilesList;

type div = HTMLDivElement;
