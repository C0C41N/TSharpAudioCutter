import type { TraFileList } from '@pages/Files';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useComs } from '@services';

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

	const { get } = useComs();

	const [drag, setDrag] = useState(false);
	const [posY, setPosY] = useState(0);
	const [files, setFiles] = useState<TraFileList>({});

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

		const sub = get<TraFileList>('inputFiles').subscribe(e => e && setFiles(e));

		return () => {
			sub.unsubscribe();
		};
	}, []);

	useEffect(() => {
		setThumbHeight();
	}, [files]);

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
				{Object.values(files).map(e => (
					<File
						title={e.name}
						status={e.status}
						dur={e.dur}
						key={e.id}
						id={e.id}
					/>
				))}
			</List>
			{Object.keys(files).length > 4 && (
				<Scroll ref={scrollRef}>
					<Thumb ref={thumbRef} onMouseDown={mousedown} />
				</Scroll>
			)}
		</Container>
	);
}

export default FilesList;

type div = HTMLDivElement;
