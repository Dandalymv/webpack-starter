import "../css/componentes.css";
// import webbpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');
    
    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}!!!`;

    document.body.append(h1);

    //img

    // console.log(webbpacklogo);
    // const img = document.createElement('img');
    // img.src = webbpacklogo;
    // document.body.append(img);


}