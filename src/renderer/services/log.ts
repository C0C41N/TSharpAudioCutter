import { fs } from './native';

const file = './.log';

export const cls = () => {
	const { writeFileSync } = fs;

	writeFileSync(file, '');
};

export const log = (o: any, clear = false) => {
	if (clear) cls();

	const { appendFileSync } = fs;

	const time = new Date().toString().split(' ')[4];
	const txt = JSON.stringify(o, null, '\t')
		.replace('\\n', '\n')
		.replace('\\t', '\t');
	appendFileSync(file, `[${time}]\n\n${txt}\n\n`);
};
