import React from 'react';
import styled from 'styled-components';

import { flexCenter } from '@styles';

const Logo = styled.div`
	${flexCenter}
	background: #ffffff;
	width: 77px;
	height: 72px;
`;

function logo(props: any) {
	return (
		<Logo {...props}>
			<svg
				width='77'
				height='72'
				viewBox='0 0 77 72'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M49.4599 25.8997L45.906 29.2613C46.0542 27.0359 47.1315 25.8255 48.8668 25.8477C49.0655 25.8469 49.264 25.8643 49.4599 25.8997Z'
					fill='#2F2E41'
				/>
				<path
					d='M62.46 49.9368C62.4318 51.9215 61.1475 53.2125 59.498 53.1292C57.7014 53.0368 56.8019 51.8955 56.6083 50.0709C56.5519 49.5425 56.531 48.9322 56.5114 48.5092C56.3889 46.0144 55.0408 46.3332 54.2173 46.3176C52.8313 46.2929 51.9158 47.0854 51.8521 48.6055C51.7626 50.732 51.8349 52.8676 51.7994 54.998C51.7602 57.3328 50.6707 58.7084 48.8901 58.7461C47.1094 58.7838 45.917 57.4356 45.8925 55.1021C45.8447 50.84 45.879 46.5753 45.879 42.3119C45.879 38.4076 45.8582 34.5034 45.879 30.59L50.303 26.2199C52.5481 27.5903 51.6572 32.481 51.8006 35.0487C51.7688 36.8706 52.2479 38.3386 54.2259 38.3243C58.4293 38.0966 54.8141 32.8922 58.645 31.5921C60.5237 30.8998 62.4134 32.3183 62.4551 34.6374C62.547 39.7337 62.5311 44.8431 62.46 49.9368Z'
					fill='#2F2E41'
				/>
				<path
					d='M27.4781 53.1084C27.4781 53.7452 27.4753 54.3816 27.4696 55.0176C27.4549 57.6425 26.3899 59.0298 24.5186 58.9634C23.5725 58.9296 22.858 58.5262 22.3948 57.7752L27.4781 53.1084Z'
					fill='#2F2E41'
				/>
				<path
					d='M27.4831 42.3561C27.4831 45.4886 27.4965 48.6224 27.4904 51.7536L22.1068 57.2378C21.7931 56.5871 21.6276 55.7438 21.6166 54.7026C21.597 52.7987 21.6252 50.896 21.5994 48.9933C21.5749 47.2716 20.7575 46.2018 19.1043 46.2434C17.5394 46.2838 16.8604 47.3809 16.8261 48.9764C16.8151 49.5074 16.8506 50.0605 16.7305 50.5667C16.2403 53.9504 11.1778 53.9973 11.0234 50.555C10.8812 45.0813 10.8898 39.5971 11.0026 34.1221C11.0344 32.5135 12.1521 31.4958 13.7366 31.4503C15.4131 31.4008 16.3751 32.4224 16.7587 34.1051C16.8617 36.1419 16.7072 38.5182 19.4254 38.2866C21.695 38.0992 21.6387 36.1197 21.6166 34.3069C21.5958 32.6332 21.5749 30.9583 21.6252 29.2847C21.6914 27.1074 22.8225 25.8229 24.5664 25.8373C26.3103 25.8516 27.4365 27.1152 27.4635 29.3342C27.5235 33.677 27.4818 38.0185 27.4831 42.3561Z'
					fill='#2F2E41'
				/>
				<path
					d='M39.4035 63.3232C37.1804 66.3412 36.2736 65.9143 33.9059 63.37C33.5959 63.0538 33.7221 62.2079 33.7221 61.604C33.7221 56.2248 33.7221 50.8457 33.7221 45.4665L39.6155 39.791C39.6155 40.6534 39.6155 41.5163 39.6155 42.3795C39.6155 48.6194 39.613 54.8592 39.6081 61.0991C39.602 61.8526 39.7711 62.8312 39.4035 63.3232Z'
					fill='#2F2E41'
				/>
				<path
					d='M39.6106 36.7002L33.7159 42.4004C33.7159 35.9401 33.7159 29.4795 33.7159 23.0184C33.5652 20.806 34.7662 18.7589 36.7503 18.9658C38.6731 19.0855 39.5689 20.3583 39.5861 22.2883C39.6228 27.0918 39.6155 31.8967 39.6106 36.7002Z'
					fill='#2F2E41'
				/>
				<path
					d='M6.06992 42.5006C6.09075 46.0313 5.1839 47.5631 3.10913 47.5462C1.03436 47.5292 0.167931 46.0157 0.167931 42.4407C0.167931 41.6052 0.104198 40.7489 0.221846 39.9342C0.542926 36.0612 5.80277 36.1223 6.05155 39.9914C6.14346 40.8087 6.06992 41.6599 6.06992 42.5006Z'
					fill='#2F2E41'
				/>
				<path
					d='M67.3265 42.1726C67.2186 44.605 67.2333 47.4486 70.1745 47.5175C71.9601 47.5631 72.9932 46.4387 73.1255 44.5868C73.1598 41.8681 73.9834 36.9891 70.1941 37.0672C68.9135 37.0789 68.0103 37.7179 67.5912 38.8553C67.4595 39.2214 67.3882 39.6088 67.3804 40.0006L67.3265 42.1726Z'
					fill='#2F2E41'
				/>
				<path
					d='M64.6757 11.946L54.8276 21.5413H41.3336V35.0357L33.7159 42.4004L32.2968 43.772H32.2502V21.5413H9.55646L20.8114 11.946H64.6757Z'
					fill='#2F2E41'
				/>
				<path
					d='M41.7846 37.6944V62.6894L32.7025 71.759V46.44L32.7392 46.4048L32.7429 46.4009L32.7809 46.3645L41.7846 37.6944Z'
					fill='#2F2E41'
				/>
				<path
					d='M45.906 29.2613C45.8949 29.4162 45.8888 29.5775 45.8876 29.7428C45.8876 30.0252 45.8876 30.3037 45.8876 30.5848L41.2429 35.1736L41.2221 35.1489L40.5346 34.3459L45.906 29.2613Z'
					fill='#2F2E41'
				/>
				<path
					d='M50.3043 26.2147L45.8802 30.5848C45.8802 30.3037 45.8802 30.0252 45.8802 29.7428C45.8802 29.5775 45.8876 29.4162 45.8986 29.2613L49.4525 25.8997C49.7521 25.9488 50.0408 26.0555 50.3043 26.2147Z'
					fill='#2F2E41'
				/>
				<path
					d='M76.7236 0.110916L50.3092 26.2147C50.0472 26.0561 49.7603 25.9494 49.4624 25.8997L76.7236 0.110916Z'
					fill='#2F2E41'
				/>
				<path
					d='M22.3923 57.7583L14.304 65.1894L22.1056 57.2404C22.1919 57.4187 22.2876 57.5916 22.3923 57.7583Z'
					fill='#2F2E41'
				/>
				<path
					d='M27.4941 51.7536C27.4941 52.1857 27.483 52.6776 27.4818 53.1071L22.4034 57.7675L22.396 57.757C22.2916 57.5894 22.1963 57.4156 22.1105 57.2365L27.4941 51.7523V51.7536Z'
					fill='#2F2E41'
				/>
				<path
					d='M34.124 47.1089L32.7012 48.3868L27.4818 53.1005C27.4818 52.6711 27.4941 52.1792 27.4941 51.7471L33.3556 45.8114L34.124 47.1089Z'
					fill='#2F2E41'
				/>
			</svg>
		</Logo>
	);
}

export default logo;
