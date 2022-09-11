class Auto {
    public modelo : string;
    public marca : string;
    public dominio : string;
    public colorActual : string;
    public estaPrendido : boolean;
    public velocidadActual : number;
    public direccionActual : string;


    constructor (pMarca:string,pModelo:string,pDominio:string,pColorActual:string,pEncendido:boolean,pVelocidad:number,pDireccion:string) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.dominio = pDominio;
        this.colorActual = pColorActual;
        this.estaPrendido = pEncendido;
        this.velocidadActual = pVelocidad;
        this.direccionActual = pDireccion;

    }

    
    encenderApagar (): void {
        if (this.estaPrendido===true){
            this.estaPrendido=false;
        }else{
            this.estaPrendido=true;
        }
    }
    acelerar (): void {
        this.velocidadActual = this.velocidadActual ++
    }
    frenar (): void {
        this.velocidadActual = 0;
    }
    doblarDerecha (): void {
        this.direccionActual = "derecha";
    
    }
    doblarIzquierda (): void {
        this.direccionActual = "Izquierda";
    }
}

let autoUno = new Auto ("Renault","Sandero","AB867TL","Gris Plata",false,0,"recto");
let autoDos = new Auto ("Volkswagen","Gol","AF853PL","Azul",true,120,"derecha");

console.log(`El Auto ${autoDos.marca} - ${autoDos.modelo}, tiene como dominio: ${autoDos.dominio}`)
