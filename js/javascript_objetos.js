var nstars=10000;
var elemento=null;
var lienzo=null;
var stars=[];  //arreglo de objetos
var parar=false;
var bool;

//estrella
var giro_est1 = 0;
var giro_est2 = 0;
var vel = 0.03;

var X1 = 225;
var Y1 = 240;
var R1 = 100;	
var X2 = 225;
var Y2 = 240;
var R2 = 100;

function iniciar(){
	elemento=document.getElementById("lienzo2");
	lienzo=elemento.getContext("2d");
	llenar_arreglo();
	mostrar_arreglo();
	pos_tam();
	estrella1();
    estrella2();
    animation_frame();
    parar=true;
    nstars=1000;
}

function start(){
	if(parar==false){
		animation_frame();
		parar=true;
	}
}

function particulas(imput){
	var numero = imput.int.value;
	if (numero>=0 && numero<=10000){
		nstars = numero;
		pos_tam();
	}else{
        nstars = 1000;
        imput.int.value = 1000;
		pos_tam();
	}
}

function pos_tam(imput){
	X1 = random(500)+100;
	Y1 = random(250)+100;
	R1 = random(80)+10;

	X2 = random(500)+100;
	Y2 = random(250)+100;
	R2 = random(80)+10;
}

function stop(){
	window.cancelAnimationFrame(bool);
	parar=false;
}

function animation_frame(){
    animacion5();
	bool=window.requestAnimationFrame(animation_frame);
}

function animacion5(){  
    lienzo.clearRect(0,0,elemento.width,elemento.height);
    mover_arreglo();
	mostrar_arreglo();
	giro_est1 -= vel;
	giro_est2 += vel;
	estrella1();
    estrella2();
}

function estrella1(){
    lienzo.fillStyle ="#1F618D";
    lienzo.lineWidth = 6;
    var L = 5;
    var paso = 2;
    var estrella= L / paso;
    var rad = (2*Math.PI) / estrella;
    lienzo.beginPath();
            for( var i = 0; i < L; i++ ){
            x = X1 + R1 * Math.cos( rad*i+giro_est1 );
            y = Y1 + R1 * Math.sin( rad*i+giro_est1 );
            lienzo.lineTo(x, y);
            }
            lienzo.closePath();
    lienzo.stroke();
    lienzo.fill();
}

function estrella2(){
    lienzo.fillStyle ="#7B241C";
    lienzo.lineWidth = 6;
    var L = 5;
    var paso = 2;
    var estrella= L / paso;
    var rad = (2*Math.PI) / estrella;
    lienzo.beginPath();
            for( var i = 0; i < L; i++ ){
            x = X2 + R2 * Math.cos( rad*i+giro_est2);
            y = Y2 + R2 * Math.sin( rad*i+giro_est2);
            lienzo.lineTo(x, y);
            }
            lienzo.closePath();
    lienzo.stroke();
    lienzo.fill();
}


function Star(x,y,timer,r,g,b,velx,vely){
    this.x = (x===null)?0:x;
    this.y = (y===null)?0:y;
    this.timer=(timer===null)?0:timer;
    this.r=r;
    this.g=g;
    this.b=b;
    this.color= ""+"rgba("+r+","+g+","+b+","+1+")";
    this.velx=velx;
    this.vely=vely;
}

function random(valor){
    return(Math.random()*valor);
}

function llenar_arreglo(){
    for(i=0;i<nstars;i++){
        stars.push(new Star( random(elemento.width),
                             random(elemento.height), 
                             random(200),
                             Math.floor(random(255)),
                             Math.floor(random(255)),
                             Math.floor(random(255)),
                             random(4)-2,
                             random(4)-2 ));
    }
}


function mostrar_arreglo(){
    for(i=0;i<nstars;i++){
        if (i===10) stars[10].color;
        lienzo.fillStyle=stars[i].color;
        lienzo.fillRect(stars[i].x,stars[i].y,3.5,3.5);
    }
}


function mover_arreglo(){
    for(i=0;i<nstars;i++){
        stars[i].x += stars[i].velx;
        stars[i].y += stars[i].vely;
        //control de bordes
        if(stars[i].x > elemento.width || stars[i].x<0 )stars[i].velx=-stars[i].velx;
        if(stars[i].y > elemento.height || stars[i].y<0 )stars[i].vely=-stars[i].vely;
        
        stars[i].timer-=10; 
            if(stars[i].timer>200) stars[i].timer=200; 
            alpha=stars[i].timer/200;
    }
}

function pulsar(e, ev) { 
    tecla = (document.all) ? e.keyCode :e.which; 
    particulas(ev);
    return (tecla!=13); 
} 

window.addEventListener("load",iniciar,false);

