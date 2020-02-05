const initiGaleri = document.querySelector('.inti-galeri');
const jumbo = document.querySelector('.jumbo');

initiGaleri.addEventListener('click',function(e){
	if(e.target.className == 'mini'){
		console.log(jumbo.src = e.target.src);
	}
})

