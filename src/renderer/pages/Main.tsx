import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import close from '@comp/close';
import illustration from '@comp/illustration';
import logo from '@comp/logo';
import mainBtns from '@comp/mainBtns';
import mainHeading from '@comp/mainHeading';
import watermark from '@comp/watermark';

import Youtube from './Youtube';

const MainDiv = styled.div`
	position: relative;
	width: 1000px;
	height: 600px;
	background: white;
	border-radius: 50px;

	box-shadow: 0px 22px 80px rgba(0, 0, 0, 0.07),
		0px 9.99091px 33.4221px rgba(0, 0, 0, 0.0503198),
		0px 5.45393px 17.869px rgba(0, 0, 0, 0.0417275),
		0px 3.05174px 10.0172px rgba(0, 0, 0, 0.035),
		0px 1.59022px 5.32008px rgba(0, 0, 0, 0.0282725),
		0px 0.639341px 2.21381px rgba(0, 0, 0, 0.0196802);
`;

const Close = styled(close)`
	position: absolute;
	top: 27px;
	right: 31px;
`;

const Logo = styled(logo)`
	position: absolute;
	left: 37px;
	top: 26px;
`;

const Watermark = styled(watermark)`
	position: absolute;
	left: 284px;
	top: 37px;
`;

const Illustration = styled(illustration)`
	position: absolute;
	left: 34px;
	top: 237px;
`;

const MainHeading = styled(mainHeading)`
	position: absolute;
	top: 145px;
	right: 124px;
`;

const MainBtns = styled(mainBtns)`
	position: absolute;
	width: 320px;
	height: 117px;
	left: 514px;
	top: 329px;
`;

function Main() {
	const { path } = useRouteMatch();

	return (
		<MainDiv>
			<Close />

			<Switch>
				<Route exact path={path}>
					<Logo />
					<Watermark />
					<Illustration />
					<MainHeading />
					<MainBtns />
				</Route>

				<Route path={`${path}/youtube`}>
					<Youtube />
				</Route>
			</Switch>
		</MainDiv>
	);
}

export default Main;
