


function debounce (func, wait=20, immediate=true) {
	var timeout
	return function () {
		var context=this, args = arguments
		var later = function () {
			timeout = null
			if (!immediate) { func.apply(context, args) }
		}
		var callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setInterval(later, wait)
		if (callNow) func.apply(context, args)
	}
}

var progressBars = document.querySelectorAll('.progress-bar')

function checkProgress() {
	progressBars.forEach(progressBar => {
		const startAnimAt = (window.scrollY + window.innerHeight) + progressBar.offsetHeight
		const progressbottom = progressBar.offsetTop + progressBar.offsetHeight
		const isHalfShown = startAnimAt > progressBar.offsetTop
		const isNotScrolledPast = window.scrollY < progressbottom

		if (isHalfShown && isNotScrolledPast) {
			progressBar.classList.add('start-progress-bar')
		} else {
			progressBar.classList.remove('start-progress-bar')
		}

	})
}

window.addEventListener('scroll', debounce(checkProgress))

window.addEventListener('scroll', debounce(function(){
	const toTop = document.querySelector('.totop')
	const windowHeight = window.innerHeight
	const showHeight = window.scrollY + window.innerHeight
	
	if (showHeight > windowHeight) {
		toTop.style.visibility="visible"
	}else {
		toTop.style.visibility = "hidden"
	}

}), 500)


var now = new Date();
document.getElementById('year').innerHTML = now.getFullYear()



