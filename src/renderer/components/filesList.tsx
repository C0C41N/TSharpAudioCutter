import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import File from './file';

const Container = styled.div`
	position: absolute;
	width: 810px;
	height: 280px;
	left: 100px;
	top: 202px;
`;

const List = styled.div`
	width: calc(780px + 17px);
	height: 100%;
	overflow: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const Scroll = styled.div`
	position: absolute;
	width: 5px;
	height: 260px;
	right: 0px;
	top: 10px;

	background: #cccccc;
	border-radius: 10px;
`;

const Thumb = styled.div`
	position: absolute;
	width: 3px;
	height: 50px;
	right: 1px;
	top: 1px;

	background: #3f3d56;

	&:hover {
		width: 5px;
		right: 0px;
	}
`;

function FilesList() {
	const contRef = useRef<div>(null);
	const scrollRef = useRef<div>(null);
	const thumbRef = useRef<div>(null);

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
		setThumbHeight();

		const thumb = thumbRef.current;
		if (thumb) thumb.style.top = '1px';
	}, []);

	useEffect(() => {
		document.addEventListener('mousemove', mousemove);
		document.addEventListener('mouseup', mouseup);
		document.addEventListener('mouseleave', mouseup);

		return () => {
			document.removeEventListener('mousemove', mousemove);
			document.removeEventListener('mouseup', mouseup);
			document.removeEventListener('mouseleave', mouseup);
		};
	}, [mousemove, mouseup]);

	return (
		<Container>
			<List ref={contRef} onScroll={scroll}>
				<File title='Lil Peep ~ Star shopping' dur='02:53' />
				<File title='Lil Peep ~ Star shopping' dur='02:53' />
				<File title='Lil Peep ~ Star shopping' dur='02:53' />
				<File title='Lil Peep ~ Star shopping' dur='02:53' />
				<File title='Lil Peep ~ Star shopping' dur='02:53' />
			</List>
			<Scroll ref={scrollRef}>
				<Thumb ref={thumbRef} onMouseDown={mousedown} />
			</Scroll>
		</Container>
	);
}

export default FilesList;

type div = HTMLDivElement;
