let toggle = document.getElementById('toggle');

let body = document.querySelector('body');
let pList = document.querySelectorAll('p');
let switchToggle = document.querySelector('.switch');
let cardList = document.querySelectorAll('.card');
let cardFollowersCount = document.querySelectorAll('.card__followers__count');
let cardOverviewCount = document.querySelectorAll('.card--overview__count');

document.addEventListener('readystatechange', function (e) {
	if (e.target.readyState === 'interactive') {
		if (toggle.checked) {
			enableLightTheme();
		} else {
			disableLightTheme();
		}
	}
});

toggle.addEventListener('change', toggleTheme);

function toggleTheme(e) {
	if (e.target.checked) {
		// Change to light theme
		enableLightTheme();
	} else {
		// Change back to dark theme
		disableLightTheme();
	}
}

function enableLightTheme() {
	body.classList.add('light-theme');
	toggle.classList.add('light-theme');
	switchToggle.classList.add('light-theme');

	addLightTheme(cardList);
	addLightTheme(cardFollowersCount);
	addLightTheme(cardOverviewCount);
}

function disableLightTheme() {
	body.classList.remove('light-theme');
	toggle.classList.remove('light-theme');
	switchToggle.classList.remove('light-theme');

	removeLightTheme(cardList);
	removeLightTheme(cardFollowersCount);
	removeLightTheme(cardOverviewCount);
}

function addLightTheme(list) {
	list.forEach((e) => {
		e.classList.add('light-theme');
	});
}

function removeLightTheme(list) {
	list.forEach((e) => {
		e.classList.remove('light-theme');
	});
}
