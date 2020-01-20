export default class Usuario {
    constructor(nombres, apellidos, correo, activo) {
        this.nombres = nombres
        this.apellidos = apellidos
        this.correo = correo
        this.activo = activo
    }
    presentarse() {
        return `Hola, soy ${this.nombres} y mi correo es: ${this.correo}`
    }

    getNombres() {
        return this.nombres
    }

    getApellidos() {
        return this.apellidos
    }

    getCorreo() {
        return this.correo
    }

    getActivo() {
        return this.activo
    }

    setNombres(nuevosNombres) {
        this.nombres = nuevosNombres
    }

    setApellidos(nuevosApellidos) {
        this.apellidos = nuevosApellidos
    }

    setCorreo(nuevosCorreo) {
        this.correo = nuevosCorreo
    }

}