/*banner部分导航及轮播图 */
var subnav11=document.getElementById('subnav11');
var my=document.getElementById('my');
var mine=document.getElementById('mine');
var below=document.getElementById('below');
var myBox=document.getElementById('my-box');
subnav11.onmouseover=function(){
	my.src="img/tubiao/my-active.png";
	mine.style.color="#ff6405";	
	below.src="img/tubiao/below-active.png";
	myBox.style.display="block";
}
subnav11.onmouseout=function(){
	my.src="img/tubiao/my.png";
	mine.style.color="#FFFFFF";	
	below.src="img/tubiao/below.gif";
	myBox.style.display="none";
}
var oLeftSideBar1=document.getElementsByClassName('leftsidebar1')[0];
var oMoney=document.getElementsByClassName('money')[0];
var oLsw11=document.getElementsByClassName('lsw1-1')[0];
var oLsw12=document.getElementsByClassName('lsw1-2')[0];
var oLsw13=document.getElementsByClassName('lsw1-3')[0];
var menu1=document.getElementById('menu1');
var menu2=document.getElementById('menu2');
var menu3=document.getElementById('menu3');
var menu4=document.getElementById('menu4');
oLeftSideBar1.onmouseover=function(){
	oMoney.src="img/tubiao/money-active.png";
	oLsw11.style.color="#ea3e0c";	
	oLsw12.style.color="#89767c";
	oLsw13.style.color="#89767c";
	menu1.style.display="block";
}
oLeftSideBar1.onmouseout=function(){
	oMoney.src="img/tubiao/money-32.png";
	oMoney.width="23px";
	oLsw11.style.color="#fff";	
	oLsw12.style.color="#fff";
	oLsw13.style.color="#fff";
	menu1.style.display="none";	
}
var leftSideBar2=document.getElementById('leftsidebar2');
var ccbx=document.getElementById('ccbx');
var lsw21=document.getElementById('lsw2-1');
var lsw22=document.getElementById('lsw2-2');
var lsw23=document.getElementById('lsw2-3');
leftSideBar2.onmouseover=function(){
	ccbx.src="img/tubiao/caichanbaoxian-active.png";
	lsw21.style.color="#ea3e0c";	
	lsw22.style.color="#89767c";
	lsw23.style.color="#89767c";
	menu2.style.display="block";
}
leftSideBar2.onmouseout=function(){
	ccbx.src="img/tubiao/caichanbaoxian-32.png";
	ccbx.width="25px";
	lsw21.style.color="#fff";	
	lsw22.style.color="#fff";
	lsw23.style.color="#fff";
	menu2.style.display="none";
}
var leftSideBar3=document.getElementById('leftsidebar3');
var love=document.getElementById('love');
var lsw31=document.getElementById('lsw3-1');
var lsw32=document.getElementById('lsw3-2');
var lsw33=document.getElementById('lsw3-3');
leftSideBar3.onmouseover=function(){
	love.src="img/tubiao/love-active.png";
	lsw31.style.color="#ea3e0c";	
	lsw32.style.color="#89767c";
	lsw33.style.color="#89767c";
	menu3.style.display="block";
}
leftSideBar3.onmouseout=function(){
	love.src="img/tubiao/love.png";
	love.height="20px";
	lsw31.style.color="#fff";	
	lsw32.style.color="#fff";
	lsw33.style.color="#fff";
	menu3.style.display="none";
}
var leftSideBar4=document.getElementById('leftsidebar4');
var notice=document.getElementById('notice');
var lsw41=document.getElementById('lsw4-1');
var lsw42=document.getElementById('lsw4-2');
var lsw43=document.getElementById('lsw4-3');
leftSideBar4.onmouseover=function(){
	notice.src="img/tubiao/notice-active.png";
	lsw41.style.color="#ea3e0c";	
	lsw42.style.color="#89767c";
	lsw43.style.color="#89767c";
	menu4.style.display="block";
}
leftSideBar4.onmouseout=function(){
	notice.src="img/tubiao/notice.png";
	notice.height="23px";
	lsw41.style.color="#fff";	
	lsw42.style.color="#fff";
	lsw43.style.color="#fff";
	menu4.style.display="none";
}
var botBox = document.getElementById('bot-box');
var aLi=botBox.getElementsByTagName('li');
var banner=document.getElementById('banner');
var bannerBox=document.getElementById('banner-box');
var aImg=bannerBox.getElementsByTagName('img');
for (var i=0,len=aLi.length;i<len;i++) {
	aLi[i].index = i;
	aLi[i].onclick=function(){				
		for (var j=0;j<aImg.length;j++) {
			aImg[j].style.display="none";
			aLi[j].style.background="rgba(0,0,0,.6)";
		}	
		var _index = this.index;
		this.style.background="rgba(255,255,255,.6)";
		aImg[_index].style.display="block";		
	}
}
var num=0;
function run(){
	for (var j=0;j<aImg.length;j++) {
			aImg[j].style.display="none";
			aLi[j].style.background="rgba(0,0,0,.6)";
		}	
	num++;
	if(num>aImg.length-1){
		num=0
	}
	aLi[num].style.background="rgba(255,255,255,.8)";
	aImg[num].style.display="block";		
}
setInterval(run,3000);
/*文字滚动条 */
var btnUp1=document.getElementById('btn-up1');
var btnBelow1=document.getElementById('btn-below1');
var wordBar1=document.getElementById('word-bar1');
var wordBar11=document.getElementById('word-bar1-1');
var bar42=document.getElementsByClassName('bar4-2')[0];
var wordBar=bar42.getElementsByTagName('p');
var numTop=0,len1=wordBar.length;
btnUp1.onclick=function(){
	numTop++;
		if (numTop===len1) {
			numTop=0;
		} 
	wordBar1.style.marginTop=-40*numTop+ 'px';
	wordBar11.style.marginTop=-40*numTop+ 'px';	
}
btnBelow1.onclick=function(){
	numTop--;
		if (numTop<0) {
			numTop=len1-1;
		} 
	wordBar1.style.marginTop=-40*numTop+ 'px';
	wordBar11.style.marginTop=-40*numTop+ 'px';	
}

function timer(){
	numTop++;
		if (numTop===len1) {
			numTop=0;
		} 
	wordBar1.style.marginTop=-40*numTop+ 'px';
	wordBar11.style.marginTop=-40*numTop+ 'px';	
}
setInterval(timer,2000);
/*  第二栏 新品上市  */
var barBox1=document.getElementById('barbox1');
var barBox2=document.getElementById('barbox2');
var zheZhao=document.getElementById('zhezhao');
var zheZhao1=document.getElementById('zhezhao1');
var zheZhao2=document.getElementById('zhezhao2');
var picBox=document.getElementById('picbox');
barBox1.onmouseover=function(){
	zheZhao.style.display="block"
}
barBox2.onmouseover=function(){
	zheZhao1.style.display="block"
}
barBox1.onmouseout=function(){
	zheZhao.style.display="none"
}
barBox2.onmouseout=function(){
	zheZhao1.style.display="none"
}
picBox.onmouseover=function(){
	zheZhao2.style.display="block"
}
picBox.onmouseout=function(){
	zheZhao2.style.display="none"
}
/*  第4栏  尖er货    */
var box7=document.getElementById('bar7-1');
var oLi=box7.getElementsByTagName('li');
var  d1=document.getElementById('d1');
var  d2=document.getElementById('d2');
var  d3=document.getElementById('d3');
var  d4=document.getElementById('d4');
var  d5=document.getElementById('d5');
var cardBox1=document.getElementById('cardbox1');
var cardBox2=document.getElementById('cardbox2');
var cardBox3=document.getElementById('cardbox3');
var cardBox4=document.getElementById('cardbox4');
var cardBox5=document.getElementById('cardbox5'); 
oLi[0].onmouseover=function(){
	cardBox1.style.display="block"
	cardBox2.style.display="none"
	cardBox3.style.display="none"
	cardBox4.style.display="none"
	cardBox5.style.display="none"
	oLi[0].style.background="#FFFFFF"
	d1.style.color="#ff6407"
}
oLi[0].onmouseout=function(){
	oLi[0].style.background=""
	d1.style.color="#FFFFFF"
}

oLi[1].onmouseover=function(){
	cardBox2.style.display="block"
	cardBox1.style.display="none"
	cardBox3.style.display="none"
	cardBox4.style.display="none"
	cardBox5.style.display="none"
	oLi[1].style.background="#FFFFFF"
    d2.style.color="#ff6407"
}
oLi[1].onmouseout=function(){
	oLi[1].style.background=""
	d2.style.color="#FFFFFF"
}
oLi[2].onmouseover=function(){
	cardBox3.style.display="block"
	cardBox2.style.display="none"
	cardBox1.style.display="none"
	cardBox4.style.display="none"
	cardBox5.style.display="none"
	oLi[2].style.background="#FFFFFF"
	d3.style.color="#ff6407"
}
oLi[2].onmouseout=function(){
	oLi[2].style.background=""
	d3.style.color="#FFFFFF"
}
oLi[3].onmouseover=function(){
	cardBox4.style.display="block"
	cardBox2.style.display="none"
	cardBox3.style.display="none"
	cardBox1.style.display="none"
	cardBox5.style.display="none"
	oLi[3].style.background="#FFFFFF"
	d4.style.color="#ff6407"
}
oLi[3].onmouseout=function(){
	oLi[3].style.background=""
	d4.style.color="#FFFFFF"
}
oLi[4].onmouseover=function(){
	cardBox5.style.display="block"
	cardBox2.style.display="none"
	cardBox3.style.display="none"
	cardBox4.style.display="none"
	cardBox1.style.display="none"
	oLi[4].style.background="#FFFFFF"
	d5.style.color="#ff6407"
}
oLi[4].onmouseout=function(){
	oLi[4].style.background=""
	d5.style.color="#FFFFFF"
}
/*var box7=document.getElementById('bar7-1');
var oLi=box7.getElementsByTagName('li');
var word=box7.getElementsByClassName('d1');
	for (var i=0,len=oLi.length;i<len;i++) {
		oLi[i].index=i;
		oLi[i].onmouseover=function(){
			for (var t=0;t<len;t++) {
				word[i].style.color="#FFFFFF";
			}
			var n=this.index;
			word[n].style.color="#ff6407";
		}
	}
*/
/*  特色服务  */
var box9=document.getElementById('box9');
var oLi1=box9.getElementsByTagName('li');
var bar9Box1=document.getElementById('bar9-box1');
var bar9Box2=document.getElementById('bar9-box2');
var bar9Box3=document.getElementById('bar9-box3');
var aa1=document.getElementById('aa1');
var aa2=document.getElementById('aa2');
var aa3=document.getElementById('aa3');
oLi1[0].onmouseover=function(){
	bar9Box1.style.display="block"
	bar9Box2.style.display="none"
	bar9Box3.style.display="none"
	oLi1[0].style.background="#FFFFFF"
	aa1.style.color="#ffca05"
}
oLi1[0].onmouseout=function(){
	oLi1[0].style.background=""
	aa1.style.color="#FFFFFF"
}

oLi1[1].onmouseover=function(){
	bar9Box2.style.display="block"
	bar9Box1.style.display="none"
	bar9Box3.style.display="none"
	oLi1[1].style.background="#FFFFFF"
    aa2.style.color="#ffca05"
}
oLi1[1].onmouseout=function(){
	oLi1[1].style.background=""
	aa2.style.color="#FFFFFF"
}
oLi1[2].onmouseover=function(){
	bar9Box3.style.display="block"
	bar9Box2.style.display="none"
	bar9Box1.style.display="none"
	oLi1[2].style.background="#FFFFFF"
	aa3.style.color="#ffca05"
}
oLi1[2].onmouseout=function(){
	oLi1[2].style.background=""
	aa3.style.color="#FFFFFF"
}
/* 大家说保险 */
var up=document.getElementById('up');
var below1=document.getElementById('below1');
var eva=document.getElementById('textbox');
var oDiv=eva.getElementsByTagName('div');
var n=0,len3=oDiv.length;
up.onclick=function(){
	n++;
	if(n==len3-1){
		n=0;
	}
	eva.style.marginTop= -80*n+'px' ;
}
below1.onclick=function(){
	n--;
	if(n<0){
		n=len3-2;
	}
	eva.style.marginTop= -80*n+'px' ;			
}
function setUp(){
	n++;
	if(n==len3-1){
		n=0;
	}
	eva.style.marginTop= -80*n+'px' ;
}
setInterval(setUp,3000);
/*  手机投保    */
var down=document.getElementById('down');
var guanZhu=document.getElementById('guanzhu');
var gongZhongHao=document.getElementById('gongzhonghao');
var appDown=document.getElementById('appdown');
var saoMa=document.getElementById('saoma');
var gz=document.getElementById('gz');
down.onmouseover=function(){
	guanZhu.style.background="";
	gz.style.color="#ff6405"
	gongZhongHao.style.display="none"
	down.style.background="#ff6405";
	saoMa.style.color="#FFFFFF"
	appDown.style.display="block"
}
guanZhu.onmouseover=function(){
	down.style.background="#fff";
	saoMa.style.color="#ff6405"
	guanZhu.style.background="#ff6405";
	gz.style.color="#FFFFFF"
	appDown.style.display="none"	
	gongZhongHao.style.display="block"
}
/* 右侧边栏*/
var sidebox=document.getElementById('sidebox');
var oUl=sidebox.getElementsByTagName('ul');
var oLi2=oUl[0].getElementsByTagName('li');
var oLi3=oUl[1].getElementsByTagName('li');
var tab1=document.getElementById('tab1');
var tab2=document.getElementById('tab2');
var tab3=document.getElementById('tab3');
var tab4=document.getElementById('tab4');
var tab5=document.getElementById('tab5');
var qq1=document.getElementById('qq1');
oLi2[0].onmouseover=function(){
	this.style.backgroundColor="#ff6405";
	tab1.style.display="block"
}
oLi2[0].onmouseout=function(){
	this.style.backgroundColor="";
	tab1.style.display="none"
}
oLi2[1].onmouseover=function(){
	this.style.backgroundColor="#ff6405";
	qq1.src="img/tubiao/QQactive.png";
}
oLi2[1].onmouseout=function(){
	this.style.backgroundColor="";
	qq1.src="img/tubiao/QQ.png";
}
oLi2[2].onmouseover=function(){
	this.style.backgroundColor="#ff6405";
	tab2.style.display="block"
}
oLi2[2].onmouseout=function(){
	this.style.backgroundColor="";
	tab2.style.display="none"
}
oLi3[0].onmouseover=function(){
	this.style.backgroundColor="#ff6405";
	tab3.style.display="block"
}
oLi3[0].onmouseout=function(){
	this.style.backgroundColor="";
	tab3.style.display="none"
}
oLi3[1].onmouseover=function(){
	this.style.backgroundColor="#ff6405";
	tab4.style.display="block"
}
oLi3[1].onmouseout=function(){
	this.style.backgroundColor="";
	tab4.style.display="none"
}
oLi3[2].onmouseover=function(){
	this.style.backgroundColor="#ff6405";
	tab5.style.display="block"
}
oLi3[2].onmouseout=function(){
	this.style.backgroundColor="";
	tab5.style.display="none"
}
tab5.onclick=function(){
	document.body.scrollTop = 0;
}

/*
 * var tab=oLi2.getElementsByClassName('tab');
for (var i=0,len4=oLi2.length;i<len4;i++) {
	oLi2[i].index=i;
	oLi2[i].onmouseover=function(){
		for (var j=0;j<len4;j++) {
			oLi2[j].style.background="";
			oLi2[j].tab.style.display="none";	
		}
		var num1=this.index;
		oLi2[num1].style.background="#ff6405";
		tab[num1].style.display="block";				
    }						
}
*/

var x=document.getElementById('x');
var footerBox=document.getElementById('footerbox');
var btnr=document.getElementById('btnr');
var hide=document.getElementById('hide');
x.onclick=function(){
	footerBox.style.display="none"
	hide.style.display="block"
	btnr.style.display="block"
}
btnr.onclick=function(){
	footerBox.style.display="block"
	hide.style.display="none"
	btnr.style.display="none"
}
