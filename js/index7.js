/*
* @Author: msi-pc
* @Date:   2018-06-23 11:25:23
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-06-23 17:44:27
*/
window.onload=function(){
	let bts=document.querySelector(".bts");
	let btx=document.querySelector(".btx");
	let txt=document.querySelector(".txt");
	let psw=document.querySelector(".psw");

	console.log(bts,btx,txt,psw)

	bts.onclick=function(){
		if(txt.value=="zhs"&&psw.value=="111111"){
			alert("输入正确");
		}
		else{
			alert("输入错误");
		}
	}
	btx.onclick=function(){
		open("index.html");
	}
}