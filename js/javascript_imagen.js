var micanvas3;
var lienzo3; 
var image = new Image();
var nombre_archivo="";

function iniciar(){
	micanvas3 = document.getElementById("lienzo3");
	lienzo3 = micanvas3.getContext("2d");
}

function fun_borrar3(){
	lienzo3.clearRect(0,0,micanvas3.width, micanvas3.height);
}

function fun_cargarImagen4(Sel){
	if (Sel.ad.selectedIndex != 0){
		var link = Sel.ad.options[Sel.ad.selectedIndex].value;		
		lienzo3.clearRect(0, 0, micanvas3.width, micanvas3.height);
		image.src = link;
		image.onload = function() {
			lienzo3.drawImage(image, 0, 0);
		}  
	}
}

function fun_intensidad(Sel){
	if (Sel.ad2.selectedIndex != 0){
		var tipo = Sel.ad2.options[Sel.ad2.selectedIndex].value;
		if(tipo == 1){
			var srcImg = new Image();
			lienzo3.drawImage(srcImg, 0, 0, micanvas3.width, micanvas3.height);
			var imgData = lienzo3.getImageData(0, 0, micanvas3.width, micanvas3.height);
			var pixels = imgData.data;
			for (var i = 0; i < pixels.length; i += 4) {
				//calcula la luminosidad percibida para este pixel
				var luminosidad = parseInt((pixels[i] + pixels[i + 1] + pixels[i + 2])/3);
				pixels[i] = luminosidad; // rojo
				pixels[i + 1] = luminosidad; // verde
				pixels[i + 2] = luminosidad; // azul
			}
			lienzo3.putImageData(imgData, 0, 0);
		} else if(tipo == 2){
			var srcImg = new Image();
			// dibuja la imagen en el canvas
			lienzo3.drawImage(srcImg, 0, 0, micanvas3.width, micanvas3.height);
			//Devuelve un objeto imgData con los datos de todos los píxeles de la imagen
			var imgData = lienzo3.getImageData(0, 0, micanvas3.width, micanvas3.height);
			var pixels = imgData.data;
			// recorre uno a uno los pixeles de la imagen y cambia el color por el complementario
			for (var i = 0; i < pixels.length; i += 4) {
				pixels[i] = 255 - pixels[i]; // rojo
				pixels[i + 1] = 255 - pixels[i + 1]; // verde
				pixels[i + 2] = 255 - pixels[i + 2]; // azul
			}
			// pone la imagen modificada en el canvas
			// observe que dirtyX = 25 y dirtyY = 25 
			lienzo3.putImageData(imgData, 0, 0);
		}else{
			var imageData = lienzo3.getImageData(0, 0, micanvas3.width, micanvas3.height);
			var pixels = imageData.data;
			var factor;
			var contrast = 100; // Default value
			factor = ( 259 * ( contrast + 255 ) ) / ( 255 * ( 259 - contrast ) );

			for ( var i = 0; i < pixels.length; i++ ) {
				var r = pixels[ i * 4 ];
				var g = pixels[ i * 4 + 1 ];
				var b = pixels[ i * 4 + 2 ];

				pixels[ i * 4 ] = factor * ( r - 128 ) + 128;
				pixels[ i * 4 + 1 ] = factor * ( g - 128 ) + 128;
				pixels[ i * 4 + 2 ] = factor * ( b - 128 ) + 128;
			}
			lienzo3.putImageData( imageData, 0, 0 );
		}	
	}
}

window.addEventListener("load",iniciar,false);