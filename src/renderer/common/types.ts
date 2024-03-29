import type { MutableRefObject } from 'react';

export interface IModal {
	show: boolean;
	loading: boolean;
	level?: Level;
	desc?: string;
	subDesc?: string;
	dismiss?: boolean;
	btn?: IModalBtn;
}

export type SetModal = (data: IModal) => void;

export interface IModalBtn {
	show: boolean;
	caption: string;
	callback: () => void;
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
	setupURL: string;
}

export interface RegisterLicReturn {
	blocked: boolean;
	lic: Lic;
}

export interface IpcAxiosRes {
	data: any;
	status: number;
}

export interface ApiRes<T> {
	type: 'error' | 'done';
	func: string;
	data: string | T;
}
