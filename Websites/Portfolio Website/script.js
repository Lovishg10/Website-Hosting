"use strict";

const mainheading = document.querySelector('#main-page .text-typing h1');

window.addEventListener('load', ()=>
{
	const txt = 'Hi! I\'m Lovish Garg and I love coding.';
	const length = txt.length;
	const typeSpeed = 80;
	let i = 0;

	let intervalId = setInterval(()=>
	{
		if (i < length)
		{
			mainheading.textContent += txt[i];
			mainheading.classList.toggle('cursor');
			++i;
		}
		else
		{
			clearInterval(intervalId);
			cursor();
		}
	}, typeSpeed);

});

function cursor()
{
	setInterval(()=>
	{
		mainheading.classList.toggle('cursor');
	}, 600);
}

const bars = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-window-close');
function closeSide(obj)
{
	obj.parentNode.classList.toggle('appear');

	if (bars.style.display == 'none')
	{
		bars.style.display = 'initial';
		obj.style.display = 'none';
	}
	else
	{
		obj.style.display = 'none';
		close.style.display = 'initial';
	}
}

const content = document.querySelector('#about-page h1');
const table = document.querySelector('#about-table');
window.addEventListener('scroll', ()=>
{
	const contentPosition = content.getBoundingClientRect().top;
	const screenPosition = window.innerHeight;

	if (screenPosition > contentPosition)
	{
		table.classList.add('view-table');
	}
	else
	{
		table.classList.remove('view-table');
	}
});