(function(){
	'use strict';

	var btn=document.getElementById('btn');

	btn.addEventListener('click',function(){
		var result=['大吉','中吉','吉','凶','大凶'];


		var n=Math.floor(Math.random()*result.length);

		this.textContent=result[n];
		

	});
	btn.addEventListener('mousedown',function(){
		this.className='pushed';

	});
		btn.addEventListener('mouseup',function(){
		this.className='';

	});
})();