import React, { useCallback, useEffect, useRef, useState } from 'react';
import { fromEvent } from 'rxjs';
import styled from 'styled-components';

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

const File = styled.div`
	height: 44px;
	width: 780px;
	background: #ffffff;
	border-radius: 10px;

	margin: 10px;

	box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.0196802),
		0px 1.6711px 12.9511px rgba(0, 0, 0, 0.0282725),
		0px 0.893452px 6.92426px rgba(0, 0, 0, 0.035),
		0px 0.500862px 3.88168px rgba(0, 0, 0, 0.0417275),
		0px 0.266004px 2.06153px rgba(0, 0, 0, 0.0503198),
		0px 0.11069px 0.85785px rgba(0, 0, 0, 0.07);

	&:last-child {
		margin-bottom: 100px;
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
				<File />
				<File />
				<File />
				<File />
				<File />
				<File />
				<File />
				<File />
				<File />
				<File />
				<File />
				<File />
			</List>
			<Scroll ref={scrollRef}>
				<Thumb ref={thumbRef} onMouseDown={mousedown} />
			</Scroll>
		</Container>
	);
}

export default FilesList;

type div = HTMLDivElement;
