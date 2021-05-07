// export const fillNulls = <T extends { [k: string]: any }>(a: T, b: T) =>
// 	Object.keys(a).reduce((c, e) => ({ ...c, [e]: a[e] || b[e] }), <T>{});

// export const decoupleEntity = <T>(e: T): T => JSON.parse(JSON.stringify(e));

export const deepEqual = <T, U>(x: T, y: U) =>
	JSON.stringify(x) === JSON.stringify(y);

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
