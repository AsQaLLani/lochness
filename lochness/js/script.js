

//parallax
$(window).scroll(function(){

	//jumbotron
	var wScroll=$(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px,'+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px,'+ wScroll*3 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px,'+ wScroll*5 +'%)'
	});

	$('.jumbotron .bird').css({
		'transform' : 'translate(0px,'+ wScroll*0.7 +'%)'
	});
});


//fade
function cycleImage(){
	var $active=$('.fadein .active');
	var $next=($active.next().length>0)?$active.next():$('.fadein img:first');
	$next.css('z-index',2);
	$active.fadeOut(800,function(){
		$active.css('z-index',1).show().removeClass('active');
		$next.css('z-index',3).addClass('active');
	});
}

$(document).ready(function(){
	setInterval('cycleImage()',1500);
});


//ajax
// $(document).ready(function(){
// 	$('.navr').click(function(){
// 		var menu=$(this).attr('id');
// 		if(menu=="tentang"){
// 			$('.konten').load('tentang.html');
// 		}
// 		else if(menu=="galeri"){
// 			$('.konten').load('galeri.html');
		
// 		}
// 	});

// 		$('.konten').load('beranda.php');
	

// });

//
function ajax(){
	var xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange=function(){
		if(this.readyState==4&&this.status==200){
			document.getElementById('aa').innerHTML=this.responseText;
		}
	};
	xhttp.open("GET","galeri.html",true);
	xhttp.send();
}


function ajaxb(){
	var xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange=function(){
		if(this.readyState==4&&this.status==200){
			document.getElementById('aa').innerHTML=this.responseText;
		}
	};
	xhttp.open("GET","beranda.html",true);
	xhttp.send();
}


function ajaxtt(){
	var xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange=function(){
		if(this.readyState==4&&this.status==200){
			document.getElementById('aa').innerHTML=this.responseText;
		}
	};
	xhttp.open("GET","tentangg.html",true);
	xhttp.send();
}