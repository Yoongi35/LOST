function calculateBMI() {
    var weightLbs = parseFloat(document.getElementById("weight").value);
    var heightIn = parseFloat(document.getElementById("height").value);
    if (isNaN(weightLbs) || isNaN(heightIn)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }
    var weightKg = weightLbs * 0.45359237;
    var heightM = heightIn * 0.0254;
    var bmi = weightKg / (heightM * heightM);
    var bmiRounded = Math.round(bmi * 10) / 10;
    var classification;
    if (bmi < 18.5) {
        classification = "Bajo peso";
    } else if (bmi < 24.9) {
        classification = "Normal";
    } else if (bmi < 29.9) {
        classification = "Sobrepeso";
    } else {
        classification = "Obesidad";
    }
    // Actualizar el contenido del elemento 'result' con el resultado y la clasificación
    document.getElementById("result").innerHTML = "Tu IMC es " + bmiRounded + " y estás clasificado como " + classification + ".";
}



function calcularEdadMascota() {
    var edadMascota = document.getElementById("edadMascota").value;
    var edadEquivalente = 16 * Math.log(edadMascota) + 31;
    document.getElementById("dogAgeResult").innerHTML = "La edad equivalente de tu mascota es: " + edadEquivalente.toFixed(2) + " años humanos";
}

function calcularEdadMascotaFormula() {
    var edadMascota = document.getElementById("edadMascota").value;
    var formula = "Edad equivalente = 16 × log(Edad de la mascota) + 31\n\nEdad equivalente = 16 × log(" + edadMascota + ") + 31\nEdad equivalente = " + (16 * Math.log(edadMascota) + 31).toFixed(2) + " años humanos";
    alert(formula);
}





const validEmail = "YoongiM17@gmail.com";
const validPassword = "AS1993";
let attemptCount = 0;

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email === validEmail && password === validPassword) {
        alert("Bienvenido a esta página");
        $('#loginModal').modal('hide'); 
        attemptCount = 0; 
    } else {
        attemptCount++;
        if (attemptCount >= 4) {
            alert("Ha excedido el número de intentos permitidos.");
            document.querySelector("#loginForm button[type='submit']").disabled = true;
        } else {
            alert("Correo electrónico o contraseña incorrectos. Intentos restantes: " + (4 - attemptCount));
        }
    }
});




document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("registerFirstName").value.trim().toLowerCase();
    const lastName = document.getElementById("registerLastName").value.trim().toLowerCase();
    const dob = document.getElementById("registerDob").value;

    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("registerConfirmPassword").value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    if (firstName && lastName && dob) {
        const email = generateEmail(firstName, lastName, dob);
        document.getElementById("registerEmail").value = email;
        alert("Correo electrónico generado: " + email);
    } else {
        alert("Por favor completa todos los campos.");
    }
});

function generateEmail(firstName, lastName, dob) {
    const date = new Date(dob);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    
    // Generar un sufijo aleatorio de 3 dígitos
    const randomSuffix = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    
    return `${firstName}.${lastName}${year}${month}${day}.${randomSuffix}@gmail.com`;
}






// TAREA A PREFERENCIA
function agregarTarea() {
    var tareaInput = document.getElementById("nuevaTarea");
    var tareaTexto = tareaInput.value.trim(); // Obtener el texto de la tarea y eliminar espacios en blanco
    
    if (tareaTexto === "") {
        alert("Por favor, ingresa una tarea válida.");
        return; // Salir de la función si no hay texto
    }
    
    // Crear un nuevo elemento de lista y agregarlo al div de tareas dentro del modal
    var nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = tareaTexto; // Utiliza textContent para agregar texto, es más seguro
    nuevaTarea.innerHTML += ' <input type="checkbox" onclick="completarTarea(this)"> <button onclick="eliminarTarea(this)">Eliminar</button>';
    document.getElementById("listaTareas").appendChild(nuevaTarea); // Accede al elemento listaTareas
    
    // Limpiar el campo de entrada después de agregar la tarea
    tareaInput.value = "";
}

function eliminarTarea(elemento) {
    var tarea = elemento.parentNode;
    tarea.parentNode.removeChild(tarea);
}

function completarTarea(checkbox) {
    var tarea = checkbox.parentNode;
    if (checkbox.checked) {
        tarea.style.textDecoration = "line-through";
    } else {
        tarea.style.textDecoration = "none";
    }
}




   