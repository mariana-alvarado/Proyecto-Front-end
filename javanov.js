(function(){
	const sliders = [...document.querySelectorAll('.slider__body')];
	const arrowNext = document.querySelector('#next');
	const arrowBefore = document.querySelector('#before');
	let value;
  
	arrowNext.addEventListener('click', () => changeposition(1));
  
	arrowBefore.addEventListener('click', () => changeposition(-1));
  
	function changeposition(change) {
	  const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);
	  value = currentElement + change;
  
	  if (value === 0 || value > sliders.length) {
		value = value === 0 ? sliders.length : 1;
	  }
  
	  sliders[currentElement - 1].classList.remove('slider__body--show');
	  sliders[value - 1].classList.add('slider__body--show');
	}
  })();
  
  
