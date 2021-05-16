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

export interface AppInitBody {
	deviceId: string;
	version: number;
}

export interface RegisterLicBody {
	key: string;
	deviceId: string;
}

export interface AppInitReturn {
	blocked: boolean;
	lic: number;
	isLatest: boolean;
}

export interface RegisterLicReturn {
	blocked: boolean;
	lic: Lic;
}

export interface IpcAxiosRes {
	data: any;
	status: number;
}
