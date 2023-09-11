const registro=[
    { materia:"Lenguaje", nota: 8},
    { materia:"Matematica", nota: 8},
    { materia:"Ingles", nota: 8},
    { materia:"Fisica", nota: 8},
    { materia:"Biologia", nota: 8},
];

const obtenerDatos=(id)=>{
    return new Promise((resolve, reject)=>{
        materia=registro[id];
        if(materia===undefined) reject('No se encontro tal materia');
        else{ setTimeout(()=>{
            resolve(materia);
        },Math.random()*7000)}
    })
}
const container=document.querySelector('.container');
tomarDatos= async()=>{
    let materia=[]; //declarar la variable aca
    for(reg in registro){  
    materia[reg]= await obtenerDatos(reg); // tener 
    let codeHTML=`
    <div class="grid-container">
            <h1 class=" grid-element materia">${materia[reg].materia}</h1>
            <p class=' grid-element nota'>${materia[reg].nota}</p>
        </div>`;
        container.innerHTML+=codeHTML;
    }
}
tomarDatos();