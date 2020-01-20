import Curso from "./clases/Curso.js"
import Profesor from "./clases/Profesor.js"
import Alumno from "./clases/Alumno.js"

/* Instanciando objetos de la clase Curso */
// const html = new Curso("HTML desde cero", "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t", 10)
// const css = new Curso("CSS desde cero", "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/css-poster_1.jpg?itok=VUK9BKuY", 8)
// const javascript = new Curso("Javascript desde cero", "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/javascript_0.jpg?itok=aKHihrP0", 5)

// console.log(html)
const elem = document.getElementById('cursos')

// elem.innerHTML = `
//     <img src="${html.getPoster()}" />
//     <h3>${html.getNombre()}</h3>
//     <span>Cantidad de clases: ${html.getClases()}</span>
// `

/* Imprime un curso en el DOM */
/* Recibe un objeto de tipo Curso */
function mostrarCurso(curso) {
    const hijo = document.createElement('div')
    hijo.classList.add("card")
    hijo.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="${curso.getPoster()}" alt="${curso.getNombre()}" />
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 class="t5 s-mb-2 s-center">
            ${curso.getNombre()}
        </h3>
        <div class="s-center">
                <span class="small">Cantidad de clases: ${curso.getClases()}</span>
        </div>
    </div>
    `
    elem.appendChild(hijo)
}



/* Llamadas a la funcion mostrar curso */
// mostrarCurso(html)
// mostrarCurso(css)
// mostrarCurso(javascript)

const formulario = document.getElementById('formCursos')
formulario.addEventListener('submit', e => {
    e.preventDefault()
        // console.log(e.target) // te imprime todo el formulario
    const target = e.target
        // console.log(target.nombreCurso.value)
    const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value)
    mostrarCurso(curso)
    formulario.reset()
})

const profe = new Profesor("Beto", "Quiroga", "beto@ed.team", true, ["React", "Drupal"])
    // console.log(profe)

const alumno1 = new Alumno("Juanito", "Perez", "juan@ed.team", false, ["HTML", "CSS"])
const alumno2 = new Alumno("Maria", "Rodriguez", "maria@ed.team", true, ["Drupal", "JS"])
    // console.log(alumno)

const html = new Curso("Html desde cero", "mi-poster.png", 7)

// html.setInscritos([alumno1, alumno2]) // inscritos poder asignar nuevos valores
// console.log(html)

/* Agregar alumnos sin que se pierda el valor */
// html.setInscritos([...html.getInscritos(), alumno1])
// console.log(html)

html.setInscritos([...html.getInscritos(), alumno2])
console.log(html)

/* Crear un formulario para crear usuarios 
selector profesor, Alumno*/

const usuario = document.getElementById('usuario')
const formUsuario = document.getElementById('usuarios')

usuario.addEventListener('change', e => {
    const target = parseInt(e.target.value)
        // console.log(target)
    if (target == "0") {
        formUsuario.innerHTML = ``
    } else if (target == "1") {
        // console.log('Alumno')
        formUsuario.innerHTML = `
            <h1>EDalumnos</h1>
            <form id="formAlumnos" action="">
                <div class="ed-grid m-grid-4">
                    <div class="form-item">
                        <label>
                            Nombre
                            <input type="text" name="nombreAlumno" required>
                        </label>
                    </div>
                    <div class="form-item">
                        <label>
                            Apellido
                            <input type="text" name="apellidoAlumno" required>
                        </label>
                    </div>
                    <div class="form-item">
                        <label>
                            Correo
                            <input type="email" name="correoAlumno" required>
                        </label>
                    </div>
                    <div class="form-item">
                        <label>
                            activo
                            <input type="checkbox" name="activoAlumno">
                        </label>
                    </div>
                    <div class="form-item">
                        <label>
                            cursos Tomados<br>
                            <input type="checkbox" name="html" value="HTML">HTML
                            <input type="checkbox" name="css" value="CSS">CSS
                            <input type="checkbox" name="javascript" value="JAVASCRIPT">JAVASCRIPT
                            <input type="checkbox" name="js" value="JS">JS
                            <input type="checkbox" name="drupal" value="DRUPAL">DRUPAL
                            <input type="checkbox" name="react" value="REACT">REACT
                        </label>
                    </div>
                    
                    <div class="form-item m-py-3">
                        <input type="submit" class="button" value="Crear Alumno">
                    </div>
                </div>
            </form>
            <div class="ed-grid m-grid-4 s-grid-2 row-gap">
                <table class="table">
                    <thead>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Activo</th>
                        <th>Cursos Tomados</th>
                    </thead>
                    <tbody id="alumnos">
                    </tbody>
                </table>
            </div>
        `

        const formAlumnos = document.getElementById('formAlumnos')
            // console.log(formAlumnos)

        const elem2 = document.getElementById('alumnos')

        function mostrarAlumno(alumno) {
            const hijo2 = document.createElement('tr')
            hijo2.innerHTML = `
                <td>${alumno.getNombres()}</td>
                <td>${alumno.getApellidos()}</td>
                <td>${alumno.getCorreo()}</td>
                <td>${alumno.getActivo()}</td>
                <td>${alumno.getCursosTomados()}</td>
            `
            elem2.appendChild(hijo2)
        }


        formAlumnos.addEventListener('submit', e => {
            e.preventDefault()
                // console.log(e.target) // te imprime todo el formulario
            const target = e.target
                // console.log(target.nombreAlumno.value)
            const alumno = new Alumno(target.nombreAlumno.value, target.apellidoAlumno.value, target.correoAlumno.value, target.activoAlumno.checked, [target.html.checked, target.css.checked, target.javascript.checked, target.js.checked, target.drupal.checked, target.react.checked])
            console.log(alumno)
            mostrarAlumno(alumno)
            formAlumnos.reset()
        })

    } else if (target == "2") {
        // console.log('Profesor')
    }
})