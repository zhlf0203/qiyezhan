/*
* @Author: msi-pc
* @Date:   2018-06-23 11:25:10
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-06-24 21:13:17
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