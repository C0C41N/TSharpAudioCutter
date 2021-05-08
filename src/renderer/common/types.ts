import type { MutableRefObject } from 'react';

export interface IModal {
	show: boolean;
	loading: boolean;
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

export enum Level {
	'info',
	'warning',
	'error',
}

export enum Lic {
	null,
	demo,
	paid,
	dev,
}

export interface TraFile {
	id: string;
	name: string;
	path: string;
	dur: string;
	status: Status;
	ref: MutableRefObject<HTMLDivElement | null>;
}

export enum Status {
	'null',
	'split',
	'done',
}

export interface TraFileList {
	[key: string]: TraFile;
}
