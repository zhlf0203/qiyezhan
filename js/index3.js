/*
* @Author: msi-pc
* @Date:   2018-06-19 22:36:54
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-06-19 22:37:06
*/
window.onload=function(){
	let aside=document.querySelector("aside");
		console.log(aside);
		window.onscroll=function(){
			let sd=document.body.scrollTop||document.documentElement.scrollTop;
			if(sd>=500){
				aside.style.height="75px";
			}
			else{
				aside.style.height="0px";
			}
		}
}