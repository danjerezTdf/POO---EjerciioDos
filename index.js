var Auto = /** @class */ (function () {
    function Auto(pModelo, pMarca, pDominio, pColorActual, pEncendido, pVelocidad, pDireccion) {
        this.modelo = pModelo;
        this.marca = pMarca;
        this.dominio = pDominio;
        this.colorActual = pColorActual;
        this.estaPrendido = pEncendido;
        this.velocidadActual = pVelocidad;
        this.direccionActual = pDireccion;
    }
    Auto.prototype.encenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Auto.prototype.acelerar = function () {
        this.velocidadActual = this.velocidadActual++;
    };
    Auto.prototype.frenar = function () {
        this.velocidadActual = 0;
    };
    Auto.prototype.doblarDerecha = function () {
        this.direccionActual = "derecha";
    };
    Auto.prototype.doblarIzquierda = function () {
        this.direccionActual = "Izquierda";
    };
    return Auto;
}());
var autoUno = new Auto("Renault", "Sandero", "AB867TL", "Gris Plata", false, 0, "recto");
var autoDos = new Auto("Volkswagen", "Gol", "AF853PL", "Azul", true, 120, "derecha");
console.log(autoDos);
