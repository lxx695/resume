
var bar6a=document.getElementById('bar6a');
var bar6b=document.getElementById('bar6b');
var zheZhao1=document.getElementById('zhezhao1');
var zheZhao2=document.getElementById('zhezhao2');
bar6a.onmouseover=function(){
	zheZhao1.style.display="block"
}
bar6a.onmouseout=function(){
	zheZhao1.style.display="none"
}
bar6b.onmouseover=function(){
	zheZhao2.style.display="block"
}
bar6b.onmouseout=function(){
	zheZhao2.style.display="none";
}
var meu1=document.getElementsByClassName('meu1');
var mword1=document.getElementsByClassName('mword1');
var submanuA1=document.getElementsByClassName('submanu-a1');
var len=meu1.length;
for (var i=0;i<len;i++) {
	meu1[i].index=i;
	meu1[i].onmouseover=function(){
		for (var j=0;j<len;j++) {
		meu1[j].style.background=" ";
		mword1[j].style.color="#2B2B2B"
		submanuA1[j].style.display="none"
		}
		var n=this.index;
		meu1[n].style.background="#565656";
		mword1[n].style.color="#fff"
		submanuA1[n].style.display="block"
		submanuA1[n].style.marginTop=-n*40-20+'px' ;
	}
	meu1[i].onmouseout=function(){
		var n=this.index;
		meu1[n].style.background="";
		mword1[n].style.color="#2B2B2B"
		submanuA1[n].style.display="none"
	}		
}
var textbox=document.getElementsByClassName('textbox');
var textbar=document.getElementsByClassName('textbar');
var p1=document.getElementsByClassName('p1');
var len=textbox.length;
for (var i=0;i<len;i++) {
	textbox[i].index=i;
	textbox[i].onmouseover=function(){
		for (var j=0;j<len;j++) {
		textbox[j].style.background=" ";
		p1[j].style.color="#2B2B2B"
		textbar[j].style.display="none"
		}
		var n=this.index;
		textbox[n].style.background="#565656";
		p1[n].style.color="#fff"
		textbar[n].style.display="block"
		textbar[n].style.marginTop=-n*40+'px' ;
	}
	textbox[i].onmouseout=function(){
		var n=this.index;
		textbox[n].style.background="";
		p1[n].style.color="#2B2B2B"
		textbar[n].style.display="none"
	}		
}
/*
function zhankai(obj1,obj2,obj3){
	for (var i=0;i<len;i++) {
	obj1[i].index=i;
	obj1[i].onmouseover=function(){
		for (var j=0;j<len;j++) {
		obj1[j].style.background=" ";
		obj2[j].style.color="#2B2B2B"
		obj3[j].style.display="none"
		}
		var n=this.index;
		meu1[n].style.background="#565656";
		mword1[n].style.color="#fff"
		submanuA1[n].style.display="block"
		submanuA1[n].style.marginTop=-n*40-20+'px' ;
	}
	meu1[i].onmouseout=function(){
		var n=this.index;
		meu1[n].style.background="";
		mword1[n].style.color="#2B2B2B"
		submanuA1[n].style.display="none"
	}		
}
}
*/
function on(obj1,obj2){
	obj1.onmouseover=function(){
	obj2.style.display="block"
}
}
function out(obj1,obj2){
	obj1.onmouseout=function(){
	obj2.style.display="none"
}
}
var z2=document.getElementById('z2');
var zhezhao2=document.getElementById('zhezhao2');
on(z2,zhezhao2)
out(z2,zhezhao2)
var z1=document.getElementById('z1');
var zhezhao1=document.getElementById('zhezhao1');
on(z1,zhezhao1);
out(z1,zhezhao1);
var z3=document.getElementById('z3');
var zhezhao3=document.getElementById('zhezhao3');
on(z3,zhezhao3);
out(z3,zhezhao3);
var z4=document.getElementById('z4');
var zhezhao4=document.getElementById('zhezhao4');
on(z4,zhezhao4)
out(z4,zhezhao4)
var z5=document.getElementById('z5');
var zhezhao5=document.getElementById('zhezhao5');
on(z5,zhezhao5);
out(z5,zhezhao5);
var z6=document.getElementById('z6');
var zhezhao6=document.getElementById('zhezhao6');
on(z6,zhezhao6);
out(z6,zhezhao6);
var z7=document.getElementById('z7');
var zhezhao7=document.getElementById('zhezhao7');
on(z7,zhezhao7)
out(z7,zhezhao7)
var z8=document.getElementById('z8');
var zhezhao8=document.getElementById('zhezhao8');
on(z8,zhezhao8);
out(z8,zhezhao8);
var z9=document.getElementById('z9');
var zhezhao9=document.getElementById('zhezhao9');
on(z9,zhezhao9);
out(z9,zhezhao9);
/*
var zhezhao1=document.getElementsByClassName('zhezhao1');
var pic=document.getElementsByClassName('pic');

	for (var i=0,num=pic.length;i<num;i++) {
		pic[i].index=i;
		pic.onmouseover=function(){
			for (var j=0;j<num;j++) {
			zhezhao1[j].style.className="zhezhao1"
		}
		var _index=this.index;
		zhezhao1[_index].style.className="zhezhao1-active";
		}		
	}
*/
var topnav1=document.getElementsByClassName('topnav1');
var navword=document.getElementsByClassName('navword');
var hide1=document.getElementsByClassName('hide1');
var len1=topnav1.length;

for (var i=0;i<len1;i++) {
	topnav1[i].index=i;
	topnav1[i].onmouseover=function(){
		var k=this.index;
		var l = this.offsetLeft;
		var w = navword[k].offsetWidth

		for (var j=0;j<len1;j++) {	
			hide1[j].style.display="none";
		}
 		hide1[k].style.display="block";
		line5.style.cssText="transform:translate("+l+"px,0);width: " + w + "px;"
		
	}
	topnav1[i].onmouseout=function(){
		var k=this.index;		
		hide1[k].style.display="none";
		line5.style.display="none";
	}		
}
/*
var cur=0,speed=0 ;
for (var i=0;i<len1;i++) {
	topnav1[i].index=i;
	topnav1[i].onmouseover=function(){
		var k=this.index;
		var l = this.offsetLeft;
		var w = navword[k].offsetWidth
		for (var j=0;j<len1;j++) {	
			hide1[j].style.display="none";
		}
   		hide1[k].style.display="block";
		line5.style.cssText="width: " + w + "px;"
//		clearInterval(timer);				
        
        var timer = setInterval(function () {
            cur = parseInt(getStyle(line5,'left'))
           speed = (l - cur);  //改变速度    
            //Math.ceil向上取整  Math.floor向下取整
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
            if(cur === l){
                clearInterval(timer);
                cur+=line5.offsetLeft;
            }else {
                line5.style.left = cur + speed + 'px';
            }
        },1)
	}
	topnav1[i].onmouseout=function(){
		var k=this.index;	
		hide1[k].style.display="none";
		line5.style.display="none";
		 cur+=line5.offsetLeft;
	}		
 }
    function getStyle(obj,attr) {
      return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,null)[attr];
 }
*/