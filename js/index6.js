/*
* @Author: msi-pc
* @Date:   2018-06-23 11:25:23
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-06-24 20:51:01
*/
window.onload=function(){
	// 下拉开始
	let youxiao=document.querySelectorAll("li")[1]
	console.log(youxiao)
	let xiahua=document.getElementsByClassName("drop-down")[0]
	console.log(xiahua)
	youxiao.onmouseenter=function(){
		xiahua.style.height="100px"
		xiahua.style.boxShadow="0 1px 5px 0px	rgba(0, 0, 0, 0.5)";
	}
	youxiao.onmouseleave=function(){
		xiahua.style.height="0"
	}
	


	// 顶部TAB
	let  wh=innerHeight;
	let daohang=document.querySelector(".navbarT")
	let fanhui=document.querySelector(".fanhui")
	console.log(fanhui)
    // 滚动条的事件 
	window.onscroll=function(){
		let st=document.body.scrollTop||document.documentElement.scrollTop;
		if(st>0){
			daohang.style.top="0";
			daohang.style.height="62px"
			daohang.style.borderBottom="1px solid #dadada";
			fanhui.style.bottom="30px";
		}

		else{
			daohang.style.top="75px";
			fanhui.style.bottom="-80px";
			daohang.style.height="0px"


		}
			fanhui.onclick=function(){
			animate(document.body,{scrollTop:0})
			animate(document.documentElement,{scrollTop:0})
		}
		
		}




}