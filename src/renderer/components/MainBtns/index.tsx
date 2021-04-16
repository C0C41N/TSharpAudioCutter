import './index.scss';

import React from 'react';

function MainBtns(props: any) {
	return (
		<div id='mainBtns' {...props}>
			<div className='mainBtn'>
				<svg
					className='mainBtnsTxt'
					width='171'
					height='23'
					viewBox='0 0 171 23'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M1.072 18.12C0.768 18.12 0.528 18.032 0.352 17.856C0.176 17.664 0.0880001 17.416 0.0880001 17.112V1.968C0.0880001 1.664 0.176 1.424 0.352 1.248C0.528 1.056 0.768 0.959999 1.072 0.959999C1.376 0.959999 1.616 1.056 1.792 1.248C1.968 1.424 2.056 1.664 2.056 1.968V17.112C2.056 17.416 1.968 17.664 1.792 17.856C1.616 18.032 1.376 18.12 1.072 18.12ZM6.85263 0.959999C7.25263 0.959999 7.57263 1.12 7.81263 1.44C8.06863 1.744 8.19663 2.208 8.19663 2.832C8.19663 4.096 7.78863 5.16 6.97263 6.024C6.81263 6.184 6.63663 6.264 6.44463 6.264C6.26863 6.264 6.11663 6.208 5.98863 6.096C5.86063 5.968 5.79663 5.824 5.79663 5.664C5.79663 5.488 5.86063 5.336 5.98863 5.208C6.40463 4.792 6.66863 4.264 6.78063 3.624C6.42863 3.592 6.13263 3.456 5.89263 3.216C5.66863 2.976 5.55663 2.672 5.55663 2.304C5.55663 1.904 5.67663 1.584 5.91663 1.344C6.17263 1.088 6.48463 0.959999 6.85263 0.959999ZM19.9193 6.672C20.0953 6.288 20.3753 6.096 20.7593 6.096C20.9993 6.096 21.2153 6.176 21.4073 6.336C21.5993 6.496 21.6953 6.696 21.6953 6.936C21.6953 7.08 21.6633 7.208 21.5993 7.32L16.9193 17.4C16.8233 17.608 16.6793 17.776 16.4873 17.904C16.2953 18.016 16.0873 18.072 15.8633 18.072C15.6553 18.072 15.4553 18.016 15.2633 17.904C15.0713 17.776 14.9193 17.608 14.8073 17.4L10.1513 7.32C10.0873 7.208 10.0553 7.088 10.0553 6.96C10.0553 6.72 10.1593 6.512 10.3673 6.336C10.5913 6.16 10.8313 6.072 11.0873 6.072C11.2473 6.072 11.3993 6.12 11.5433 6.216C11.7033 6.312 11.8233 6.448 11.9033 6.624L15.9113 15.624L19.9193 6.672ZM32.7308 15.288C32.9068 15.288 33.0588 15.36 33.1868 15.504C33.3148 15.648 33.3788 15.832 33.3788 16.056C33.3788 16.456 33.0988 16.824 32.5388 17.16C31.9628 17.496 31.3548 17.752 30.7148 17.928C30.0748 18.088 29.4508 18.168 28.8428 18.168C27.0348 18.168 25.6028 17.632 24.5468 16.56C23.5068 15.488 22.9868 14.008 22.9868 12.12C22.9868 10.92 23.2188 9.864 23.6828 8.952C24.1468 8.024 24.7948 7.304 25.6268 6.792C26.4748 6.28 27.4348 6.024 28.5068 6.024C30.0268 6.024 31.2348 6.52 32.1308 7.512C33.0268 8.504 33.4748 9.848 33.4748 11.544C33.4748 11.864 33.4108 12.096 33.2828 12.24C33.1548 12.384 32.9468 12.456 32.6588 12.456H24.9308C25.0748 15.208 26.3788 16.584 28.8428 16.584C29.4668 16.584 30.0028 16.504 30.4508 16.344C30.8988 16.168 31.3788 15.936 31.8908 15.648C32.3068 15.408 32.5868 15.288 32.7308 15.288ZM28.5308 7.536C27.5068 7.536 26.6828 7.856 26.0588 8.496C25.4508 9.136 25.0908 10.04 24.9788 11.208H31.7708C31.7388 10.024 31.4428 9.12 30.8828 8.496C30.3228 7.856 29.5388 7.536 28.5308 7.536ZM50.9506 6.672C51.1266 6.288 51.4066 6.096 51.7906 6.096C52.0306 6.096 52.2466 6.176 52.4386 6.336C52.6306 6.496 52.7266 6.696 52.7266 6.936C52.7266 7.08 52.6946 7.208 52.6306 7.32L45.8866 21.864C45.8066 22.04 45.6866 22.176 45.5266 22.272C45.3826 22.368 45.2306 22.416 45.0706 22.416C44.8306 22.416 44.6146 22.336 44.4226 22.176C44.2466 22.032 44.1586 21.84 44.1586 21.6C44.1586 21.472 44.1906 21.344 44.2546 21.216L45.9346 17.592L41.1826 7.32C41.1186 7.208 41.0866 7.088 41.0866 6.96C41.0866 6.72 41.1906 6.512 41.3986 6.336C41.6226 6.16 41.8626 6.072 42.1186 6.072C42.2786 6.072 42.4306 6.12 42.5746 6.216C42.7346 6.312 42.8546 6.448 42.9346 6.624L46.9426 15.624L50.9506 6.672ZM59.5621 18.168C58.4581 18.168 57.4821 17.92 56.6341 17.424C55.8021 16.928 55.1541 16.224 54.6901 15.312C54.2421 14.384 54.0181 13.312 54.0181 12.096C54.0181 10.88 54.2421 9.816 54.6901 8.904C55.1541 7.976 55.8021 7.264 56.6341 6.768C57.4821 6.272 58.4581 6.024 59.5621 6.024C60.6661 6.024 61.6421 6.272 62.4901 6.768C63.3381 7.264 63.9861 7.976 64.4341 8.904C64.8981 9.816 65.1301 10.88 65.1301 12.096C65.1301 13.312 64.8981 14.384 64.4341 15.312C63.9861 16.224 63.3381 16.928 62.4901 17.424C61.6421 17.92 60.6661 18.168 59.5621 18.168ZM59.5621 16.56C60.7141 16.56 61.5941 16.184 62.2021 15.432C62.8261 14.664 63.1381 13.552 63.1381 12.096C63.1381 10.672 62.8261 9.576 62.2021 8.808C61.5781 8.024 60.6981 7.632 59.5621 7.632C58.4261 7.632 57.5461 8.024 56.9221 8.808C56.2981 9.576 55.9861 10.672 55.9861 12.096C55.9861 13.536 56.2901 14.64 56.8981 15.408C57.5221 16.176 58.4101 16.56 59.5621 16.56ZM76.9066 6.072C77.2106 6.072 77.4426 6.16 77.6026 6.336C77.7786 6.512 77.8666 6.744 77.8666 7.032V17.184C77.8666 17.456 77.7786 17.68 77.6026 17.856C77.4426 18.032 77.2106 18.12 76.9066 18.12C76.6186 18.12 76.3866 18.04 76.2106 17.88C76.0506 17.704 75.9706 17.48 75.9706 17.208V16.008C75.6026 16.712 75.0826 17.248 74.4106 17.616C73.7546 17.984 73.0106 18.168 72.1786 18.168C70.7866 18.168 69.7386 17.784 69.0346 17.016C68.3306 16.232 67.9786 15.08 67.9786 13.56V7.032C67.9786 6.744 68.0666 6.512 68.2426 6.336C68.4186 6.16 68.6586 6.072 68.9626 6.072C69.2666 6.072 69.4986 6.16 69.6586 6.336C69.8346 6.512 69.9226 6.744 69.9226 7.032V13.512C69.9226 14.552 70.1306 15.32 70.5466 15.816C70.9626 16.296 71.6186 16.536 72.5146 16.536C73.5386 16.536 74.3626 16.208 74.9866 15.552C75.6106 14.88 75.9226 14 75.9226 12.912V7.032C75.9226 6.744 76.0106 6.512 76.1866 6.336C76.3626 6.16 76.6026 6.072 76.9066 6.072ZM86.8797 16.584C87.4397 16.632 87.7197 16.888 87.7197 17.352C87.7197 17.624 87.6157 17.832 87.4077 17.976C87.2157 18.104 86.9197 18.152 86.5197 18.12L85.8717 18.072C84.5917 17.976 83.6477 17.592 83.0397 16.92C82.4317 16.248 82.1277 15.232 82.1277 13.872V7.848H80.5197C80.2477 7.848 80.0317 7.784 79.8717 7.656C79.7277 7.512 79.6557 7.328 79.6557 7.104C79.6557 6.864 79.7277 6.672 79.8717 6.528C80.0317 6.384 80.2477 6.312 80.5197 6.312H82.1277V3.6C82.1277 3.296 82.2157 3.064 82.3917 2.904C82.5677 2.728 82.8077 2.64 83.1117 2.64C83.3997 2.64 83.6317 2.728 83.8077 2.904C83.9837 3.064 84.0717 3.296 84.0717 3.6V6.312H86.7357C86.9917 6.312 87.1917 6.384 87.3357 6.528C87.4957 6.672 87.5757 6.864 87.5757 7.104C87.5757 7.328 87.4957 7.512 87.3357 7.656C87.1917 7.784 86.9917 7.848 86.7357 7.848H84.0717V13.968C84.0717 14.848 84.2477 15.488 84.5997 15.888C84.9677 16.272 85.5117 16.488 86.2317 16.536L86.8797 16.584ZM98.5159 6.072C98.8199 6.072 99.0519 6.16 99.2119 6.336C99.3879 6.512 99.4759 6.744 99.4759 7.032V17.184C99.4759 17.456 99.3879 17.68 99.2119 17.856C99.0519 18.032 98.8199 18.12 98.5159 18.12C98.2279 18.12 97.9959 18.04 97.8199 17.88C97.6599 17.704 97.5799 17.48 97.5799 17.208V16.008C97.2119 16.712 96.6919 17.248 96.0199 17.616C95.3639 17.984 94.6199 18.168 93.7879 18.168C92.3959 18.168 91.3479 17.784 90.6439 17.016C89.9399 16.232 89.5879 15.08 89.5879 13.56V7.032C89.5879 6.744 89.6759 6.512 89.8519 6.336C90.0279 6.16 90.2679 6.072 90.5719 6.072C90.8759 6.072 91.1079 6.16 91.2679 6.336C91.4439 6.512 91.5319 6.744 91.5319 7.032V13.512C91.5319 14.552 91.7399 15.32 92.1559 15.816C92.5719 16.296 93.2279 16.536 94.1239 16.536C95.1479 16.536 95.9719 16.208 96.5959 15.552C97.2199 14.88 97.5319 14 97.5319 12.912V7.032C97.5319 6.744 97.6199 6.512 97.7959 6.336C97.9719 6.16 98.2119 6.072 98.5159 6.072ZM108.969 6.024C109.993 6.024 110.897 6.272 111.681 6.768C112.465 7.264 113.073 7.968 113.505 8.88C113.937 9.792 114.153 10.848 114.153 12.048C114.153 13.264 113.937 14.336 113.505 15.264C113.073 16.176 112.465 16.888 111.681 17.4C110.897 17.912 109.993 18.168 108.969 18.168C108.057 18.168 107.257 17.968 106.569 17.568C105.897 17.168 105.385 16.6 105.033 15.864V17.16C105.033 17.448 104.945 17.68 104.769 17.856C104.609 18.032 104.377 18.12 104.073 18.12C103.769 18.12 103.529 18.032 103.353 17.856C103.177 17.68 103.089 17.448 103.089 17.16V1.896C103.089 1.624 103.177 1.4 103.353 1.224C103.529 1.048 103.769 0.959999 104.073 0.959999C104.377 0.959999 104.609 1.048 104.769 1.224C104.945 1.384 105.033 1.608 105.033 1.896V8.328C105.385 7.592 105.897 7.024 106.569 6.624C107.257 6.224 108.057 6.024 108.969 6.024ZM108.585 16.56C109.721 16.56 110.601 16.168 111.225 15.384C111.849 14.584 112.161 13.472 112.161 12.048C112.161 10.656 111.849 9.576 111.225 8.808C110.601 8.04 109.721 7.656 108.585 7.656C107.449 7.656 106.569 8.04 105.945 8.808C105.337 9.576 105.033 10.672 105.033 12.096C105.033 13.52 105.337 14.624 105.945 15.408C106.569 16.176 107.449 16.56 108.585 16.56ZM126.106 15.288C126.282 15.288 126.434 15.36 126.562 15.504C126.69 15.648 126.754 15.832 126.754 16.056C126.754 16.456 126.474 16.824 125.914 17.16C125.338 17.496 124.73 17.752 124.09 17.928C123.45 18.088 122.826 18.168 122.218 18.168C120.41 18.168 118.978 17.632 117.922 16.56C116.882 15.488 116.362 14.008 116.362 12.12C116.362 10.92 116.594 9.864 117.058 8.952C117.522 8.024 118.17 7.304 119.002 6.792C119.85 6.28 120.81 6.024 121.882 6.024C123.402 6.024 124.61 6.52 125.506 7.512C126.402 8.504 126.85 9.848 126.85 11.544C126.85 11.864 126.786 12.096 126.658 12.24C126.53 12.384 126.322 12.456 126.034 12.456H118.306C118.45 15.208 119.754 16.584 122.218 16.584C122.842 16.584 123.378 16.504 123.826 16.344C124.274 16.168 124.754 15.936 125.266 15.648C125.682 15.408 125.962 15.288 126.106 15.288ZM121.906 7.536C120.882 7.536 120.058 7.856 119.434 8.496C118.826 9.136 118.466 10.04 118.354 11.208H125.146C125.114 10.024 124.818 9.12 124.258 8.496C123.698 7.856 122.914 7.536 121.906 7.536ZM136.886 18.12C136.598 18.12 136.358 18.04 136.166 17.88C135.99 17.704 135.902 17.464 135.902 17.16V1.92C135.902 1.616 135.99 1.384 136.166 1.224C136.358 1.048 136.598 0.959999 136.886 0.959999C137.158 0.959999 137.382 1.048 137.558 1.224C137.75 1.384 137.846 1.616 137.846 1.92V17.16C137.846 17.464 137.75 17.704 137.558 17.88C137.382 18.04 137.158 18.12 136.886 18.12ZM142.464 18.12C142.176 18.12 141.936 18.04 141.744 17.88C141.568 17.704 141.48 17.464 141.48 17.16V7.032C141.48 6.728 141.568 6.496 141.744 6.336C141.936 6.16 142.176 6.072 142.464 6.072C142.752 6.072 142.984 6.16 143.16 6.336C143.336 6.496 143.424 6.728 143.424 7.032V17.16C143.424 17.48 143.336 17.72 143.16 17.88C142.984 18.04 142.752 18.12 142.464 18.12ZM142.464 3.552C142.08 3.552 141.768 3.44 141.528 3.216C141.288 2.992 141.168 2.696 141.168 2.328C141.168 1.976 141.288 1.688 141.528 1.464C141.768 1.24 142.08 1.128 142.464 1.128C142.848 1.128 143.16 1.24 143.4 1.464C143.64 1.688 143.76 1.976 143.76 2.328C143.76 2.696 143.64 2.992 143.4 3.216C143.16 3.44 142.848 3.552 142.464 3.552ZM152.938 6.024C155.738 6.024 157.138 7.568 157.138 10.656V17.16C157.138 17.464 157.05 17.704 156.874 17.88C156.714 18.04 156.482 18.12 156.178 18.12C155.874 18.12 155.634 18.04 155.458 17.88C155.282 17.704 155.194 17.464 155.194 17.16V10.776C155.194 9.688 154.978 8.896 154.546 8.4C154.13 7.904 153.458 7.656 152.53 7.656C151.458 7.656 150.602 7.984 149.962 8.64C149.322 9.296 149.002 10.184 149.002 11.304V17.16C149.002 17.464 148.914 17.704 148.738 17.88C148.578 18.04 148.346 18.12 148.042 18.12C147.738 18.12 147.498 18.04 147.322 17.88C147.146 17.704 147.058 17.464 147.058 17.16V7.032C147.058 6.744 147.146 6.512 147.322 6.336C147.498 6.16 147.738 6.072 148.042 6.072C148.33 6.072 148.554 6.16 148.714 6.336C148.89 6.512 148.978 6.736 148.978 7.008V8.232C149.362 7.512 149.898 6.968 150.586 6.6C151.274 6.216 152.058 6.024 152.938 6.024ZM170.034 16.464C170.29 16.704 170.418 16.96 170.418 17.232C170.418 17.472 170.33 17.68 170.154 17.856C169.994 18.032 169.794 18.12 169.554 18.12C169.346 18.12 169.13 18.024 168.906 17.832L162.642 12.432V17.16C162.642 17.464 162.546 17.704 162.354 17.88C162.178 18.04 161.954 18.12 161.682 18.12C161.394 18.12 161.154 18.04 160.962 17.88C160.786 17.704 160.698 17.464 160.698 17.16V1.92C160.698 1.616 160.786 1.384 160.962 1.224C161.154 1.048 161.394 0.959999 161.682 0.959999C161.954 0.959999 162.178 1.048 162.354 1.224C162.546 1.384 162.642 1.616 162.642 1.92V11.664L168.378 6.408C168.57 6.216 168.786 6.12 169.026 6.12C169.266 6.12 169.474 6.208 169.65 6.384C169.826 6.56 169.914 6.768 169.914 7.008C169.914 7.28 169.802 7.52 169.578 7.728L164.85 11.952L170.034 16.464Z'
						fill='white'
						fill-opacity='0.99'
					/>
				</svg>
			</div>
			<div className='mainBtn'>
				<svg
					className='mainBtnsTxt'
					width='91'
					height='19'
					viewBox='0 0 91 19'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M1.072 18.12C0.768 18.12 0.528 18.032 0.352 17.856C0.176 17.664 0.0880001 17.416 0.0880001 17.112V1.968C0.0880001 1.664 0.176 1.424 0.352 1.248C0.528 1.056 0.768 0.959999 1.072 0.959999C1.376 0.959999 1.616 1.056 1.792 1.248C1.968 1.424 2.056 1.664 2.056 1.968V17.112C2.056 17.416 1.968 17.664 1.792 17.856C1.616 18.032 1.376 18.12 1.072 18.12ZM6.85263 0.959999C7.25263 0.959999 7.57263 1.12 7.81263 1.44C8.06863 1.744 8.19663 2.208 8.19663 2.832C8.19663 4.096 7.78863 5.16 6.97263 6.024C6.81263 6.184 6.63663 6.264 6.44463 6.264C6.26863 6.264 6.11663 6.208 5.98863 6.096C5.86063 5.968 5.79663 5.824 5.79663 5.664C5.79663 5.488 5.86063 5.336 5.98863 5.208C6.40463 4.792 6.66863 4.264 6.78063 3.624C6.42863 3.592 6.13263 3.456 5.89263 3.216C5.66863 2.976 5.55663 2.672 5.55663 2.304C5.55663 1.904 5.67663 1.584 5.91663 1.344C6.17263 1.088 6.48463 0.959999 6.85263 0.959999ZM19.9193 6.672C20.0953 6.288 20.3753 6.096 20.7593 6.096C20.9993 6.096 21.2153 6.176 21.4073 6.336C21.5993 6.496 21.6953 6.696 21.6953 6.936C21.6953 7.08 21.6633 7.208 21.5993 7.32L16.9193 17.4C16.8233 17.608 16.6793 17.776 16.4873 17.904C16.2953 18.016 16.0873 18.072 15.8633 18.072C15.6553 18.072 15.4553 18.016 15.2633 17.904C15.0713 17.776 14.9193 17.608 14.8073 17.4L10.1513 7.32C10.0873 7.208 10.0553 7.088 10.0553 6.96C10.0553 6.72 10.1593 6.512 10.3673 6.336C10.5913 6.16 10.8313 6.072 11.0873 6.072C11.2473 6.072 11.3993 6.12 11.5433 6.216C11.7033 6.312 11.8233 6.448 11.9033 6.624L15.9113 15.624L19.9193 6.672ZM32.7308 15.288C32.9068 15.288 33.0588 15.36 33.1868 15.504C33.3148 15.648 33.3788 15.832 33.3788 16.056C33.3788 16.456 33.0988 16.824 32.5388 17.16C31.9628 17.496 31.3548 17.752 30.7148 17.928C30.0748 18.088 29.4508 18.168 28.8428 18.168C27.0348 18.168 25.6028 17.632 24.5468 16.56C23.5068 15.488 22.9868 14.008 22.9868 12.12C22.9868 10.92 23.2188 9.864 23.6828 8.952C24.1468 8.024 24.7948 7.304 25.6268 6.792C26.4748 6.28 27.4348 6.024 28.5068 6.024C30.0268 6.024 31.2348 6.52 32.1308 7.512C33.0268 8.504 33.4748 9.848 33.4748 11.544C33.4748 11.864 33.4108 12.096 33.2828 12.24C33.1548 12.384 32.9468 12.456 32.6588 12.456H24.9308C25.0748 15.208 26.3788 16.584 28.8428 16.584C29.4668 16.584 30.0028 16.504 30.4508 16.344C30.8988 16.168 31.3788 15.936 31.8908 15.648C32.3068 15.408 32.5868 15.288 32.7308 15.288ZM28.5308 7.536C27.5068 7.536 26.6828 7.856 26.0588 8.496C25.4508 9.136 25.0908 10.04 24.9788 11.208H31.7708C31.7388 10.024 31.4428 9.12 30.8828 8.496C30.3228 7.856 29.5388 7.536 28.5308 7.536ZM47.3026 6.024C50.2306 6.024 51.6946 7.56 51.6946 10.632V17.16C51.6946 17.448 51.6066 17.68 51.4306 17.856C51.2706 18.032 51.0466 18.12 50.7586 18.12C50.4706 18.12 50.2386 18.032 50.0626 17.856C49.8866 17.68 49.7986 17.448 49.7986 17.16V16.008C49.4946 16.696 49.0306 17.232 48.4066 17.616C47.7826 17.984 47.0626 18.168 46.2466 18.168C45.4946 18.168 44.7986 18.016 44.1586 17.712C43.5346 17.408 43.0386 16.984 42.6706 16.44C42.3026 15.896 42.1186 15.296 42.1186 14.64C42.1186 13.76 42.3426 13.08 42.7906 12.6C43.2386 12.104 43.9746 11.752 44.9986 11.544C46.0226 11.32 47.4466 11.208 49.2706 11.208H49.7986V10.416C49.7986 9.456 49.5986 8.752 49.1986 8.304C48.8146 7.856 48.1826 7.632 47.3026 7.632C46.2146 7.632 45.1106 7.928 43.9906 8.52C43.5586 8.792 43.2546 8.928 43.0786 8.928C42.8866 8.928 42.7266 8.856 42.5986 8.712C42.4706 8.568 42.4066 8.384 42.4066 8.16C42.4066 7.936 42.4706 7.744 42.5986 7.584C42.7426 7.408 42.9666 7.232 43.2706 7.056C43.8306 6.736 44.4626 6.488 45.1666 6.312C45.8866 6.12 46.5986 6.024 47.3026 6.024ZM46.5106 16.632C47.4706 16.632 48.2546 16.312 48.8626 15.672C49.4866 15.016 49.7986 14.176 49.7986 13.152V12.456H49.3666C47.9586 12.456 46.8866 12.52 46.1506 12.648C45.4146 12.76 44.8866 12.96 44.5666 13.248C44.2626 13.52 44.1106 13.928 44.1106 14.472C44.1106 15.096 44.3346 15.616 44.7826 16.032C45.2466 16.432 45.8226 16.632 46.5106 16.632ZM70.3926 6.312C70.6646 6.312 70.8726 6.384 71.0166 6.528C71.1606 6.672 71.2326 6.864 71.2326 7.104V17.16C71.2326 17.464 71.1366 17.704 70.9446 17.88C70.7686 18.04 70.5446 18.12 70.2726 18.12C69.9846 18.12 69.7446 18.04 69.5526 17.88C69.3766 17.704 69.2886 17.464 69.2886 17.16V7.848H64.0326V17.16C64.0326 17.464 63.9366 17.704 63.7446 17.88C63.5686 18.04 63.3446 18.12 63.0726 18.12C62.7846 18.12 62.5446 18.04 62.3526 17.88C62.1766 17.704 62.0886 17.464 62.0886 17.16V7.848H60.4806C60.2086 7.848 59.9926 7.784 59.8326 7.656C59.6886 7.512 59.6166 7.328 59.6166 7.104C59.6166 6.864 59.6886 6.672 59.8326 6.528C59.9926 6.384 60.2086 6.312 60.4806 6.312H62.0886V5.904C62.0886 4.464 62.4486 3.336 63.1686 2.52C63.8886 1.688 64.9206 1.216 66.2646 1.104L66.8406 1.056C67.6086 0.991999 67.9926 1.232 67.9926 1.776C67.9926 2.24 67.7206 2.504 67.1766 2.568L66.6006 2.616C65.7526 2.68 65.1126 2.952 64.6806 3.432C64.2486 3.896 64.0326 4.6 64.0326 5.544V6.312H70.3926ZM70.2726 1.128C70.6406 1.128 70.9446 1.24 71.1846 1.464C71.4406 1.688 71.5686 1.976 71.5686 2.328C71.5686 2.696 71.4486 2.992 71.2086 3.216C70.9686 3.44 70.6566 3.552 70.2726 3.552C69.8886 3.552 69.5766 3.44 69.3366 3.216C69.0966 2.992 68.9766 2.696 68.9766 2.328C68.9766 1.976 69.0966 1.688 69.3366 1.464C69.5766 1.24 69.8886 1.128 70.2726 1.128ZM75.8309 18.12C75.5429 18.12 75.3029 18.04 75.1109 17.88C74.9349 17.704 74.8469 17.464 74.8469 17.16V1.92C74.8469 1.616 74.9349 1.384 75.1109 1.224C75.3029 1.048 75.5429 0.959999 75.8309 0.959999C76.1029 0.959999 76.3269 1.048 76.5029 1.224C76.6949 1.384 76.7909 1.616 76.7909 1.92V17.16C76.7909 17.464 76.6949 17.704 76.5029 17.88C76.3269 18.04 76.1029 18.12 75.8309 18.12ZM89.473 15.288C89.649 15.288 89.801 15.36 89.929 15.504C90.057 15.648 90.121 15.832 90.121 16.056C90.121 16.456 89.841 16.824 89.281 17.16C88.705 17.496 88.097 17.752 87.457 17.928C86.817 18.088 86.193 18.168 85.585 18.168C83.777 18.168 82.345 17.632 81.289 16.56C80.249 15.488 79.729 14.008 79.729 12.12C79.729 10.92 79.961 9.864 80.425 8.952C80.889 8.024 81.537 7.304 82.369 6.792C83.217 6.28 84.177 6.024 85.249 6.024C86.769 6.024 87.977 6.52 88.873 7.512C89.769 8.504 90.217 9.848 90.217 11.544C90.217 11.864 90.153 12.096 90.025 12.24C89.897 12.384 89.689 12.456 89.401 12.456H81.673C81.817 15.208 83.121 16.584 85.585 16.584C86.209 16.584 86.745 16.504 87.193 16.344C87.641 16.168 88.121 15.936 88.633 15.648C89.049 15.408 89.329 15.288 89.473 15.288ZM85.273 7.536C84.249 7.536 83.425 7.856 82.801 8.496C82.193 9.136 81.833 10.04 81.721 11.208H88.513C88.481 10.024 88.185 9.12 87.625 8.496C87.065 7.856 86.281 7.536 85.273 7.536Z'
						fill='white'
						fill-opacity='0.99'
					/>
				</svg>
			</div>
		</div>
	);
}

export default MainBtns;
