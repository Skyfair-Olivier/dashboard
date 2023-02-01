document.querySelector('.menu__toggle div').addEventListener('click', function(){
	let mode = document.querySelector(".menu__toggle input");
	if(mode.getAttribute("checked")!="checked"){
		mode.setAttribute("checked","checked" );
		document.documentElement.setAttribute('data-theme','light');
	}else{
		mode.removeAttribute("checked")
		document.documentElement.setAttribute('data-theme','dark');
	}
})


