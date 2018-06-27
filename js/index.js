/*
* @Author: msi-pc
* @Date:   2018-06-18 17:25:50
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-06-18 21:18:08
*/
window.onload=function(){
	let nav=document.querySelector("nav");
	let img=document.querySelectorAll("nav img");
	let dian=document.querySelectorAll("nav ul li");
	let left=document.querySelector("nav .left");
	let right=document.querySelector("nav .right");
	console.log(nav,img,dian,left,right);

	// 先申请一个全局变量
	let index=0;
	// 轮播速度的函数
	// 先让图和点的层级和HOT
	img[0].style.zIndex=5;
	dian[0].classList.add("hot");
	let t=setInterval(move,4000);
	// 顺着轮播
	function move(){
		index++;
		// 先给点加hot
		// 判断
		if(index==img.length){
			index=0;
		}
		// 先去掉默认值
		img.forEach(function(val){
			val.style.zIndex=5;
		});
		dian.forEach(function(val){
			val.classList.remove("hot");
		})
		dian[index].classList.add("hot");
		img[index].style.zIndex=10;
	}
	function movel(){
		index--;
		// 先给点加hot
		// 判断
		if(index<0){
			index=img.length-1;
		}
		// 先去掉默认值
		img.forEach(function(val){
			val.style.zIndex=5;
		});
		dian.forEach(function(val){
			val.classList.remove("hot");
		})
		dian[index].classList.add("hot");
		img[index].style.zIndex=10;
	}
	// 轮播点点击
	for(let i=0;i<dian.length;i++){
		dian[i].onclick=function(){
			// 先给点去掉hot和加上hot
			// 在把点和图配对
			img.forEach(function(val){
				val.style.zIndex=5;
			})
			dian.forEach(function(val){
				val.classList.remove("hot");
			})
			dian[i].classList.add("hot");
			img[i].style.zIndex=10;
			index=i;
		}
	}
	// 移入bannear中停止和开始
	nav.onmouseenter=function(){
		clearInterval(t);
	}
	nav.onmouseleave=function(){
		// 加t是为了下次移入运行
		t=setInterval(move,2000);
	}

	// 点击左右事件
	left.onclick=function(){
		movel();
	}
	right.onclick=function(){
		move();
	}






	let header=document.querySelector("main");
	let button=document.querySelectorAll("main .top button");
	let bottom=document.querySelector("main .bottom");
	let bt1=document.querySelector("main .bt1");
	let bt2=document.querySelector("main .bt2");
	console.log(button);
	let boxwidth=parseInt(window.getComputedStyle(bottom,null).width)/2;
	console.log(boxwidth);
	// 声明一个次数变量
	let time=0;
	bt1.onclick=function(){
		// 变量++之后如果大于你点击的次数，赋值小一个
		time++;
		if(time==2){
			time=1
		}
		bottom.style.transform=`translateX(${-boxwidth*time}px)`;
	}
	bt2.onclick=function(){
		time--;
		if(time<0){
			time=0;
		}
		bottom.style.transform=`translateX(${boxwidth*time}px)`;
	}



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