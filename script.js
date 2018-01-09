	

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
			initialize('#block');
		}

		document.getElementById('disable').onclick = function() {
			disable('.top .caption');
		}
		

		function initialize(css) {		
			sticky(css);	
			window.onscroll = function() {
				if(!flag) {
					return false;
				} else {
					sticky(css);
				}
			}		
		}

		function disable(css) {
			flag = false;
			var off = document.querySelector(css);
			if(off) {
				off.style.bottom = 0;
			}
		
		}

		function sticky(targ) {
			var b = [];
					b = document.querySelectorAll(targ);
					b.forEach(function(a) {
						if (a.getBoundingClientRect().top > -a.scrollHeight && a.getBoundingClientRect().top <= 0) {
							a.classList.add('top')
							var f = document.querySelector('.top .caption');
							f.style.bottom = a.getBoundingClientRect().top + 'px';
						} else {
							a.classList.remove('top')
						}
					}) 
		}