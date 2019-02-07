

var elemento=null;
var lienzo=null;

var cirx = [100, 120, 130, 140, 150,200, 220, 230, 240, 250, 260, 207, 280, 290, 310];
var ciry = [100, 120, 130, 140, 150,200, 220, 230, 240, 250, 260, 207, 280, 290, 310];
var circolor = ["blue", "blue", "blue", "blue", "blue","red", "red", "red", "red", "red","green", "green", "green", "green", "green"];
var cirbool = [true, true, true, true, true,true, true, true, true, true,true, true, true, true, true];

var recx = [50, 130, 200, 270, 340, 410, 480, 550, 620];
var recy = [410, 410, 410, 410, 410, 410, 410, 410, 410];
var reccolor = ["blue", "red", "green", "blue", "red", "green", "blue", "red", "green"];

var xmouse, ymouse; //posicion del mouse
var mpresionado1=false; //press mouse
var mpresionado2=false;
var mpresionado3=false;
var mpresionado4=false;
var mpresionado5=false;
var mpresionado6=false;
var mpresionado7=false;
var mpresionado8=false;
var mpresionado9=false;
var mpresionado10=false;
var mpresionado11=false;
var mpresionado12=false;
var mpresionado13=false;
var mpresionado14=false;
var mpresionado15=false;
var rec_canvas; //objeto

incorrecto= new Audio();
incorrecto.src="audio/incorrecto.wav";

correcto= new Audio();
correcto.src="audio/correcto.wav";


function iniciar(){
	elemento=document.getElementById("lienzo2");
	lienzo=elemento.getContext("2d");
	val_random();
	print_rectangulo();
	print_circulo();
	rec_canvas=elemento.getBoundingClientRect();
	animation_frame();
	window.addEventListener("mousemove",press_circulo,false);
	window.addEventListener("mouseup",fun_mlevantado,false);
	window.addEventListener("mousedown",fun_mpresionado,false);
}

function reload(){
    location.reload(true);
}

function borrarcanvas(){
	lienzo.clearRect(0,0,elemento.width,elemento.height);
}

function press_circulo(ev){
	//coordenadas del mouse en el canvas
	xmouse=ev.x-rec_canvas.left;
	ymouse=ev.y-rec_canvas.top;
	// actualizar posicion
		if(mpresionado1==true){
			cirx[0] = xmouse;
			ciry[0] = ymouse;
		}
		if(mpresionado2==true){
			cirx[1] = xmouse;
			ciry[1] = ymouse;
		}
		if(mpresionado3==true){
			cirx[2] = xmouse;
			ciry[2] = ymouse;
		}
		if(mpresionado4==true){
			cirx[3] = xmouse;
			ciry[3] = ymouse;
		}
		if(mpresionado5==true){
			cirx[4] = xmouse;
			ciry[4] = ymouse;
		}
		if(mpresionado6==true){
			cirx[5] = xmouse;
			ciry[5] = ymouse;
		}
		if(mpresionado7==true){
			cirx[6] = xmouse;
			ciry[6] = ymouse;
		}
		if(mpresionado8==true){
			cirx[7] = xmouse;
			ciry[7] = ymouse;
		}
		if(mpresionado9==true){
			cirx[8] = xmouse;
			ciry[8] = ymouse;
		}
		if(mpresionado10==true){
			cirx[9] = xmouse;
			ciry[9] = ymouse;
		}
		if(mpresionado11==true){
			cirx[10] = xmouse;
			ciry[10] = ymouse;
		}
		if(mpresionado12==true){
			cirx[11] = xmouse;
			ciry[11] = ymouse;
		}
		if(mpresionado13==true){
			cirx[12] = xmouse;
			ciry[12] = ymouse;
		}
		if(mpresionado14==true){
			cirx[13] = xmouse;
			ciry[13] = ymouse;
		}
		if(mpresionado15==true){
			cirx[14] = xmouse;
			ciry[14] = ymouse;
		}
} 

function fun_mpresionado(ev){
	if (Math.abs(cirx[0]-xmouse) + Math.abs(ciry[0]-ymouse) < 15){
		mpresionado1=true
	}
	if (Math.abs(cirx[1]-xmouse) + Math.abs(ciry[1]-ymouse) < 15){
		mpresionado2=true
	}
	if (Math.abs(cirx[2]-xmouse) + Math.abs(ciry[2]-ymouse) < 15){
		mpresionado3=true
	}
	if (Math.abs(cirx[3]-xmouse) + Math.abs(ciry[3]-ymouse) < 15){
		mpresionado4=true
	}
	if (Math.abs(cirx[4]-xmouse) + Math.abs(ciry[4]-ymouse) < 15){
		mpresionado5=true
	}
	if (Math.abs(cirx[5]-xmouse) + Math.abs(ciry[5]-ymouse) < 15){
		mpresionado6=true
	}
	if (Math.abs(cirx[6]-xmouse) + Math.abs(ciry[6]-ymouse) < 15){
		mpresionado7=true
	}
	if (Math.abs(cirx[7]-xmouse) + Math.abs(ciry[7]-ymouse) < 15){
		mpresionado8=true
	}
	if (Math.abs(cirx[8]-xmouse) + Math.abs(ciry[8]-ymouse) < 15){
		mpresionado9=true
	}
	if (Math.abs(cirx[9]-xmouse) + Math.abs(ciry[9]-ymouse) < 15){
		mpresionado10=true
	}
	if (Math.abs(cirx[10]-xmouse) + Math.abs(ciry[10]-ymouse) < 15){
		mpresionado11=true
	}
	if (Math.abs(cirx[11]-xmouse) + Math.abs(ciry[11]-ymouse) < 15){
		mpresionado12=true
	}
	if (Math.abs(cirx[12]-xmouse) + Math.abs(ciry[12]-ymouse) < 15){
		mpresionado13=true
	}
	if (Math.abs(cirx[13]-xmouse) + Math.abs(ciry[13]-ymouse) < 15){
		mpresionado14=true
	}
	if (Math.abs(cirx[14]-xmouse) + Math.abs(ciry[14]-ymouse) < 15){
		mpresionado15=true
	}
}

function fun_mlevantado(ev){
	mpresionado1=false;
	mpresionado2=false;
	mpresionado3=false;
	mpresionado5=false;
	mpresionado6=false;
	mpresionado7=false;
	mpresionado8=false;
	mpresionado9=false;
	mpresionado10=false;
	mpresionado11=false;
	mpresionado12=false;
	mpresionado13=false;
	mpresionado14=false;
	mpresionado15=false;
}

var detec_colision = 0;
function colision(){
	for (i = 0; i < cirx.length; i++) {
		if(cirbool[i]==true){
			for (j = 0; j < recx.length; j++) {
				if((cirx[i]+3.3<recx[j]+50 && cirx[i]+6.6>recx[j]) && 
				(ciry[i]+3.3<recy[j]+30 && ciry[i]+6.6>recy[j])){
					if(circolor[i]==reccolor[j]){
						cirx[i]=0;
						ciry[i]=0;
						cirbool[i]=false;
						detec_colision=1;
					}else{
						detec_colision=2;
					}sound();
				}
				
			}
		}
	}
	for (i = 0; i < cirbool.length; i++) {
		if(cirbool[i]==false){cirx[i]=0;ciry[i]=0;}
	}
}

function sound(){
	if(detec_colision == 1){
		correcto.play();
		detec_colision=0;
	}else if(detec_colision==2){
		incorrecto.play();
		detec_colision=0;
	}else{
		detec_colision=0;
	}
}

function val_random(){
    for (i = 0; i < cirx.length; i++) {
		var valx = random(580)+20;
		var valy = random(320)+20;
		for (j = 0; j < cirx.length; j++) {
			if(valx>cirx[i]-30 && valx<cirx[i]+30){
				valx += 10;
			}
		}
		for (j = 0; j < ciry.length; j++) {
			if(valy>ciry[i]-30 && valy<ciry[i]+30){
				valy += 10;
			}
		}
		cirx[i]=valx;
		ciry[i]=valy;
	}	

	var listado = ["blue", "blue", "blue", "green", "green", "green", "red", "red", "red"];
	for (i=0; listado.length; i++) {
		aleatorio = Math.floor(Math.random()*(listado.length));
		reccolor[i] = listado[aleatorio];
		listado.splice(aleatorio, 1);
	}

}


function random(valor){
    return(Math.random()*valor);
}

/*function start(){
	if(parar==false){
		animation_frame();
		parar=true;
	}
}
function stop(){
	window.cancelAnimationFrame(bool);
	parar=false;
}*/

function animation_frame(){
    animacion5();
	bool=window.requestAnimationFrame(animation_frame);
}

function animacion5(){  
	borrarcanvas();
	print_rectangulo();
	print_circulo();
	colision();
}

function print_circulo() {
    for (i = 0; i < cirx.length; i++) {
		if(cirbool[i]==true){
			circulo(cirx[i],ciry[i],circolor[i]);
		}
	}
}
function print_rectangulo() {
    for (i = 0; i < recx.length; i++) {
		rectangulo(recx[i],recy[i],reccolor[i]);
	}
}
function circulo(x,y,color) {
    lienzo.beginPath();
    lienzo.fillStyle = color;
    lienzo.arc(x, y, 10, 0, Math.PI*2, true);
    lienzo.fill();
}
function rectangulo(x,y,color) {
	lienzo.beginPath();
	lienzo.fillStyle = color; 
    lienzo.rect(x, y, 50, 30); 
    lienzo.fill(); 
}
window.onscroll = function() {
};

window.addEventListener("load",iniciar,false);

