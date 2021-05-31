import { Level, SetModal, TraFile } from '@types';

import { ffmpeg } from './ffmpeg';
import { pubsub } from './pubsub';

interface validateInputArgs {
	inputRef: React.RefObject<HTMLInputElement>;
	setRed: (value: React.SetStateAction<boolean>) => void;
	placeholder: string;
}

export const validateInput = (args: validateInputArgs): false | string => {
	const { inputRef, setRed, placeholder } = args;
	const input = inputRef.current;
	if (input) {
		const val = input.value;
		if (val.length) return val;
		input.placeholder = placeholder;
	}
	setRed(true);
	setTimeout(() => setRed(false), 300);
	return false;
};

/**
 * setModal wrapper
 */
export const showErrModal = (
	setModal: SetModal,
	desc: string,
	subDesc: string
) =>
	setModal({
		show: true,
		loading: false,
		dismiss: false,
		level: Level.error,
		desc,
		subDesc,
	});

/**
 * setModal wrapper
 */
export const hideLoading = (setModal: SetModal) =>
	setModal({ show: false, loading: true });

/**
 * setModal wrapper
 */
export const showLoading = (setModal: SetModal) =>
	setModal({ show: true, loading: true });

/**
 * returns TraFile object by calculating duration, id etc.
 */
export const traFile = async (file: {
	path: string;
	name: string;
}): Promise<TraFile> => {
	const id = randomKey(6);
	const dur = await getDur(file.path);
	const { name, path } = file;
	const ref = { current: null };
	const status = 0;

	return { id, name, path, dur, status, ref };
};

/**
 * returns duration of mp3 file in number
 */
export const getDurRaw = async (path: string) => {
	const { once, pub } = pubsub<number>();
	ffmpeg.ffprobe(path, (err, { format }) => pub(format.duration || 0));
	return await once;
};

/**
 * returns duration of mp3 file in 00:00 format
 */
export const getDur = async (path: string) => {
	const dur = await getDurRaw(path);
	if (!dur) return '#NA';

	const { trunc } = Math;
	const p: any = ['en-US', { minimumIntegerDigits: 2, useGrouping: false }];

	const min = trunc(dur / 60).toLocaleString(...p);
	const sec = trunc(dur % 60).toLocaleString(...p);

	return `${min}:${sec}`;
};

/**
 * resolves promise after **ms** milliseconds,
 * use in async environment for sleep effect
 */
export const sleep = (ms: number) =>
	new Promise(resolve => setTimeout(resolve, ms));

/**
 * deepEqual two objects, returns false
 * if any object contains circular structure
 */
export const deepEqual = (x: any, y: any) => {
	const cache: any[] = [];

	const isPrimitive = (o: any) => o !== Object(o);

	const exe = (x: any, y: any) => {
		if (isPrimitive(x) && isPrimitive(y)) return x === y;

		if (cache.indexOf(x) !== -1) return false;
		if (cache.indexOf(y) !== -1) return false;
		cache.push(x, y);

		if (Object.keys(x).length !== Object.keys(y).length) return false;

		for (const key in x) {
			if (!(key in y)) return false;
			if (!exe(x[key], y[key])) return false;
		}

		return true;
	};

	return exe(x, y);
};

/**
 * returns random key of length **len**
 * #### 62 ^ len combinations
 */
export const randomKey = (len: number): string => {
	// prettier-ignore
	const x = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C',
		'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
		'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
		'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
		'w', 'x', 'y', 'z']

	const { floor, random } = Math;
	const ch = () => x[floor(random() * x.length)];
	return [...Array(len)].reduce((a: string) => a.concat(ch()), '');
};
