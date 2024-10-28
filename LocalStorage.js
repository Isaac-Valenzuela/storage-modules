// Importar node-localstorage
const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage("./scratch"); // Directorio para almacenar los datos

fetch("https://meowfacts.herokuapp.com/")
    .then(response => response.json())
    .then(json => {
        let fact = {
            fact: json.data[0]
        };
        guardarLocalStorage(fact);
    })
    .catch(error => console.error("Error:", error));


const guardarLocalStorage = (data) => {
    localStorage.setItem("catFact", JSON.stringify(data));
};


const obtenerLocalStorage = () => {
    const respuesta = localStorage.getItem("catFact") ? JSON.parse(localStorage.getItem("catFact")) : "No hay datos";
    console.log(respuesta);
};

const eliminarLocalStorage = () => {
    !localStorage.getItem("catFact") ? console.log("No hay clave") : localStorage.removeItem("catFact");
};
 // Para ver el dato almacenado
eliminarLocalStorage(); // Para eliminar el dato almacenado 
