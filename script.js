// 正确的密码
const correctPassword = 'dbbxhxbz,xbzyxhdbb';

// 密码验证函数
function checkPassword() {
	// 获取用户输入的密码
	const password = document.getElementById('password-input').value;

	// 检查密码是否正确
	if (password === correctPassword) {
		// 如果密码正确，隐藏密码输入界面并显示倒计时页面
		document.getElementById('password-page').style.display = 'none';
		document.querySelector('.container').style.display = 'block';
		startCountdown();
	} else {
		// 如果密码错误，提示用户
		alert('密码错误，请重新输入');
	}
}

// 倒计时函数
function startCountdown() {
	const targetDate = new Date('2026-02-26T00:00:00').getTime();
	const countdownElement = document.getElementById('countdown');
	const messageElement = document.getElementById('message');

	const interval = setInterval(() => {
		const now = new Date().getTime();
		const distance = targetDate - now;

		if (distance < 0) {
			clearInterval(interval);
			countdownElement.style.display = 'none';
			messageElement.style.display = 'block';
			return;
		}

		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById('days').textContent = days.toString().padStart(2, '0');
		document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
		document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
		document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
	}, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
	if (window.location.search.includes('password=' + correctPassword)) {
		document.getElementById('password-page').style.display = 'none';
		document.querySelector('.container').style.display = 'block';
		startCountdown();
	} else {
		startCountdown();
	}
});