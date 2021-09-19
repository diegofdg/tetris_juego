var canvas;
var ctx;
var FPS = 50;

var anchoCanvas = 400;
var altoCanvas = 640;

var anchoTablero = 10;
var altoTablero = 20;

var margenSuperior = 4;

var anchoF = 40;
var altoF = 40;

var pieza;

var tablero = [
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
];

var tableroNuevo = [
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
];

var rojo = "#FF0000";
var morado = "#800080";
var naranja = "#FF8C00";
var amarillo = "#FFD700";
var verde = "#008000";
var cyan = "#00CED1";
var azul = "#0000CD";

var fichaGrafico = [
    [
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ]
    ],
    
    [
        [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0]
        ],
    
        [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0]
        ]
    
    ],
    
    [
        [
        [0,0,0,0],
        [0,0,3,3],
        [0,3,3,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,3,0],
        [0,0,3,3],
        [0,0,0,3],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,0,3,3],
        [0,3,3,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,3,0],
        [0,0,3,3],
        [0,0,0,3],
        [0,0,0,0]
        ]
    
    ],
    
    [
        [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,4],
        [0,0,4,4],
        [0,0,4,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,4],
        [0,0,4,4],
        [0,0,4,0],
        [0,0,0,0]
        ]
    
    ],
    
    [
        [
        [0,0,0,0],
        [0,5,5,5],
        [0,5,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,5,0],
        [0,0,5,0],
        [0,0,5,5],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,5],
        [0,5,5,5],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,5,5,0],
        [0,0,5,0],
        [0,0,5,0],
        [0,0,0,0]
        ]
    
    ],
    
    [
        [
        [0,0,0,0],
        [0,6,6,6],
        [0,0,0,6],
        [0,0,0,0]
        ],
    
        [
        [0,0,6,6],
        [0,0,6,0],
        [0,0,6,0],
        [0,0,0,0]
        ],
    
        [
        [0,6,0,0],
        [0,6,6,6],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,6,0],
        [0,0,6,0],
        [0,6,6,0],
        [0,0,0,0]
        ]
    ],    
    
    [
        [
        [0,0,0,0],
        [0,7,7,7],
        [0,0,7,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,7,0],
        [0,0,7,7],
        [0,0,7,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,7,0],
        [0,7,7,7],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,7,0],
        [0,7,7,0],
        [0,0,7,0],
        [0,0,0,0]
        ]
    ]
];

function inicializaTeclado(){
    document.addEventListener('keydown', function(tecla){
        if(tecla.key === 'ArrowUp'){
            pieza.rotar();
        }
        if(tecla.key === 'ArrowDown'){
            pieza.abajo();
        }
        if(tecla.key === 'ArrowLeft'){
            pieza.izquierda();
        }
        if(tecla.key === 'ArrowRight'){
            pieza.derecha();
        }
    });
}

function reseteaTablero(){
    for(py=0;py<21;py++){
		for(px=0;px<12;px++){
			tablero[py][px] = tableroNuevo[py][px];
		}
	}
}

var objPieza = function(){
    this.x = 0;
    this.y = 4;

    this.angulo = 0;
    this.tipo = 0;

    this.retraso = 50;
    this.fotograma = 0;

    this.nueva = function(){
        this.tipo = Math.floor(Math.random()*7);
        this.fotograma = 0;
        this.y = 3;
        this.x = 3;
    }

    this.compruebaSiPierde = function(){        
        var pierde = false;

        for(px=1;px<anchoTablero+1;px++){            
            if(tablero[3][px]>0){
                pierde = true;
            }
        }

        return pierde;
    }

    this.limpia = function(){
        var filaCompleta;

        for(py=margenSuperior;py<altoTablero;py++){
            filaCompleta = true;
            
            for(px=1;px<anchoTablero+1;px++){
                if(tablero[py][px]===0){
                    filaCompleta = false;
                }
            }
            if(filaCompleta===true){
                for(px=1;px<anchoTablero+1;px++){
                    tablero[py][px]=0;
                }
            }
        }
    }

    this.caer = function(){
        if(this.fotograma < this.retraso){
            this.fotograma++;
        } else {
            if(this.colision(this.angulo,this.y+1, this.x)===false){
                this.y++;                
            } else {
                this.fijar();                
                this.limpia();
                this.nueva();

                if(this.compruebaSiPierde()){
                    reseteaTablero();
                    console.log('Has perdido el juego')
                }
            }   
            this.fotograma = 0;         
        }
    }

    this.fijar = function(){
        for(py=0;py<4;py++){
            for(px=0;px<4;px++){
                if(fichaGrafico[this.tipo][this.angulo][py][px]>0){
                    tablero[this.y+py][this.x+px] = fichaGrafico[this.tipo][this.angulo][py][px];
                }
            }
        }
    }

    this.colision = function(anguloNuevo, yNueva, xNueva){
        var resultado = false;
        for(py=0;py<4;py++){
            for(px=0;px<4;px++){
                if(fichaGrafico[this.tipo][anguloNuevo][py][px]>0){                    
                    if(tablero[yNueva+py][xNueva+px]>0){                        
                        resultado = true;
                    }
                }
            }
        }
        return resultado;
    }    

    this.dibuja = function(){
        for(py=0;py<4;py++){
            for(px=0;px<4;px++){
                if(fichaGrafico[this.tipo][this.angulo][py][px]!==0){
                    if(fichaGrafico[this.tipo][this.angulo][py][px]===1){
                        ctx.fillStyle = rojo;
                    }
                    if(fichaGrafico[this.tipo][this.angulo][py][px]===2){
                        ctx.fillStyle = naranja;
                    }
                    if(fichaGrafico[this.tipo][this.angulo][py][px]===3){
                        ctx.fillStyle = amarillo;
                    }
                    if(fichaGrafico[this.tipo][this.angulo][py][px]===4){
                        ctx.fillStyle = verde;
                    }
                    if(fichaGrafico[this.tipo][this.angulo][py][px]===5){
                        ctx.fillStyle = cyan;
                    }
                    if(fichaGrafico[this.tipo][this.angulo][py][px]===6){
                        ctx.fillStyle = azul;
                    }
                    if(fichaGrafico[this.tipo][this.angulo][py][px]===7){
                        ctx.fillStyle = morado;
                    }
                    ctx.fillRect((this.x + px - 1)*anchoF, (this.y + py - margenSuperior)*altoF, anchoF, altoF);
                }
            }
        }
    }

    this.rotar = function(){    
        var anguloNuevo = this.angulo;        
        
        if(anguloNuevo < 3){
            anguloNuevo++;
        } else {
            anguloNuevo = 0;
        }

        if(this.colision(anguloNuevo,this.y, this.x)===false){
            this.angulo = anguloNuevo;
        }              
    }

    this.abajo = function(){ 
        if(this.colision(this.angulo,this.y+1, this.x)===false){
            this.y++;            
        }
    }

    this.derecha = function(){        
        if(this.colision(this.angulo,this.y, this.x+1)===false){
            this.x++;
        }
    }

    this.izquierda = function(){        
        if(this.colision(this.angulo,this.y, this.x-1)===false){
            this.x--;
        }
    }    

    this.nueva();
}

function dibujaTablero(){
    for(py=margenSuperior;py<altoTablero;py++){
        for(px=1;px<anchoTablero+1;px++){
            if(tablero[py][px]!==0){
                if(tablero[py][px]===1){
                    ctx.fillStyle = rojo;
                }
                if(tablero[py][px]===2){
                    ctx.fillStyle = naranja;
                }
                if(tablero[py][px]===3){
                    ctx.fillStyle = amarillo;
                }
                if(tablero[py][px]===4){
                    ctx.fillStyle = verde;
                }
                if(tablero[py][px]===5){
                    ctx.fillStyle = cyan;
                }
                if(tablero[py][px]===6){
                    ctx.fillStyle = azul;
                }
                if(tablero[py][px]===7){
                    ctx.fillStyle = morado;
                }
                ctx.fillRect((this.px-1)*anchoF, (this.py-margenSuperior)*altoF, anchoF, altoF);
            }
        }
    }
}

function inicializa(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.width = anchoCanvas;
    canvas.height = altoCanvas;

    pieza = new objPieza();

    inicializaTeclado();

    setInterval(function(){
        principal();
    },1000/FPS);
}

function borraCanvas(){
    canvas.width = anchoCanvas;
    canvas.height = altoCanvas;    
}

function principal(){
    borraCanvas();  
    dibujaTablero();
    pieza.caer();  
    pieza.dibuja();
}