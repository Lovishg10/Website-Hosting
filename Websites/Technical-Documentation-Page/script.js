let lastActivenav = null;

function changeState(element)
{
	const icon = element.children[0];

	if (icon.tagName === 'I')
	{
		icon.classList.toggle('fa-rotate-90');
	}

	if (lastActivenav !== null && lastActivenav !== element)
	{
		lastActivenav.children[0].classList.toggle('fa-rotate-90');
		lastActivenav.nextElementSibling.classList.toggle('display-block');
	}

	element.nextElementSibling.classList.toggle('display-block');

	if (lastActivenav === element)
	{
		lastActivenav = null;
	}
	else
	{
		lastActivenav = element;
	}
}