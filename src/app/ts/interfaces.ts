export interface Estudiante {
    codigo: string,
    nombre: string
}

export interface EscuelaProfesional {
    nombre: string,
    perteneceFacultad?: Facultad
}

export interface Facultad {
    nombre: string,
    tieneEscuelaProfesional?: EscuelaProfesional[]
}

export function mostrarEP(ep: EscuelaProfesional){
    console.table(ep);
}