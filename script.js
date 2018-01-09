	

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
			initialize();
		}

		document.getElementById('disable').onclick = function() {
			disable();
		}
		
		function initialize() {		
			sticky();	
			window.onscroll = function() {
				if(!flag) {
					return false;
				} else {
					sticky();
				}
			}		
		}

		function disable() {
			flag = false;
			var off = document.querySelector('.top .caption');
			if(off) {
				off.style.bottom = 0;
			}
		
		}

		function sticky() {
			var b = [];
					b = document.querySelectorAll('#block');
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