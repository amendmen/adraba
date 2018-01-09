	

var block = document.getElementById('block');

function createDiv() {			
	var blockCopy = block.cloneNode(true);
	var insert = document.body.appendChild(blockCopy);	
}
for( i = 0; i < 100; i++) {
	createDiv()
}


var flag = false;

document.getElementById('initialize').onclick = function() {
	flag = true;
	new Test('#block').initialize();
}

document.getElementById('disable').onclick = function() {
	new Test('.top .caption').disable();
}

var Test = class {

	constructor(css) {
		this.css = css;
	}

	initialize() {	

		sticky(this.css);	

		function sticky(cs) {
			var b = [];
			b = document.querySelectorAll(cs);
			b.forEach(function(a) {
				if (a.getBoundingClientRect().top > -a.scrollHeight && a.getBoundingClientRect().top <= 0) {
					a.classList.add('top')
					var f = document.querySelector('.top .caption');
					f.style.bottom = a.getBoundingClientRect().top + 'px';
				} else {
					a.classList.remove('top')
				}
			}) 
			window.onscroll = function() {
				sticky(cs);
			}
		}

					
	}		


	disable() {
		flag = false;
		var off = document.querySelector(this.css);
		if(off) {
			off.style.bottom = 0;
		}
		
	}


}

