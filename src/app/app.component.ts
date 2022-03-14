import { Component } from '@angular/core';
// import { Facultad, EscuelaProfesional, Estudiante, mostrarEP } from './ts/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}


// console.log("primer mensaje a consola");

// let nombre: string;
// nombre = "Ivan Molero";
// console.log("Nombre: ", nombre);

// let cantidad: number;
// cantidad = 25;
// console.log("cantidad: ", cantidad);

// let incremento: string;
// incremento = "35";
// console.log("incremento: ", incremento);

// console.log("total: ", (cantidad + parseInt(incremento)));

// let estaActivo: boolean = true;
// console.log("esta activo: ", estaActivo);

// console.log(nombre, cantidad, incremento, estaActivo);

// let pasatiempos: string[];
// pasatiempos = ["ajedrez", "videojuegos", "correr"];

// console.log(pasatiempos);

// pasatiempos.push("nadar");
// console.log(pasatiempos);

// pasatiempos.unshift("comer");
// console.log(pasatiempos);

// pasatiempos.pop();
// console.log(pasatiempos);

// pasatiempos.shift();
// console.log(pasatiempos);

// let var01: string | number;
// const var02: string = "variable 2";

// var01 = "variable 1";

// console.log(var01);
// console.log(var02);

// var01 = 5;

// console.log(var01);

// let pasatiempos: (string | number)[] = ['ajedrez', 'peliculas'];

// pasatiempos.push(5);
// pasatiempos.push("tallar madera")

// console.table(pasatiempos);

// interface Estudiante {
//   nombre: string,
//   aPaterno: string,
//   pension: number,
//   estaMatriculado: boolean,
//   escuelaProfesional?: string,
//   pasatiempos?: string[]
// }

// let alumno: Estudiante;

// alumno = {
//   nombre: "Juan",
//   aPaterno: "Lopez",
//   pension: 850,
//   estaMatriculado: false
// };

// console.table(alumno);

// alumno.escuelaProfesional = "Ingeniería de Sistemas";

// console.table(alumno);

// alumno.pasatiempos = ['videojuegos', 'juegos de mesa'];

// console.table(alumno);

// alumno.pasatiempos.push("basket");

// console.table(alumno);

// function suma(a: number, b: number): number {
//   return a + b;
// }

// const sumaFlecha = (a: number, b: number): number => {
//   return a + b;
// };

// console.log(suma(5, 6));

// console.log(sumaFlecha(5, 6));

// function multiplicar(numero: number, otroNumero?: number, baseM: number = 3): number {
//   return numero * baseM;
// }

// console.log(multiplicar(5,7,4));
// console.log(multiplicar(5));

// interface Estudiante {
//   nombre: string,
//   estaMatriculado: boolean,
//   mostrarMatricula: (nombre: string) => void
// }

// function matricular(est: Estudiante, estadoMat: boolean): void {
//   est.estaMatriculado = estadoMat;
//   est.mostrarMatricula("Juan");
// }

// let alumno: Estudiante = {
//   nombre: "Pedro",
//   estaMatriculado: false,
//   mostrarMatricula(nombre: string) {
//     console.log(this.estaMatriculado);
//   } 
// };

// // console.table(alumno);
// alumno.mostrarMatricula("Pedro");proyectodummy
// // console.table(alumno);

// interface Facultad {
//   nombre: string,
//   tieneEscuelaProfesional: EscuelaProfesional[]
// }

// interface EscuelaProfesional {
//   nombre: string,
//   perteneceFacultad: Facultadproyectodummy
// facultades.push({
//   nombre: "FIA",
//   tieneEscuelaProfesional: []
// });
// facultades.push({
//   nombre: "CEAC",
//   tieneEscuelaProfesional: []
// });
// facultades.push({
//   nombre: "MEDICINA",
//   tieneEscuelaProfesional: []
// });

// console.table(facultades);

// let escuelas: EscuelaProfesional[] = [];
// escuelas.push({
//   nombre: "Ingeniería de Sistemas",
//   perteneceFacultad: facultades[0]
// });
// facultades[0].tieneEscuelaProfesional.push(escuelas[0]);

// escuelas.push({
//   nombre: "Medicina Humana",
//   perteneceFacultad: facultades[2]
// });
// facultades[2].tieneEscuelaProfesional.push(escuelas[1]);

// escuelas.push({
//   nombre: "Arquitectura",
//   perteneceFacultad: facultades[0]
// });
// facultades[0].tieneEscuelaProfesional.push(escuelas[2]);

// console.table(escuelas);
// console.table(facultades);

// nuevo cambio
// otro cambio

// const facu01: Facultad = {
//   nombre: "INGENIERIA Y ARQUITECTURA"
// }

// const ep01: EscuelaProfesional = {
//   nombre: "INGENIERIA DE SISTEMAS"
// }

// ep01.perteneceFacultad = facu01;
// facu01.tieneEscuelaProfesional = [ep01];

// mostrarEP(ep01);

// const est01: Estudiante = {
//   nombre: "Juan Perez",
//   codigo: "0000000001a"
// }

// console.table(est01);

// interface Alumno {
//   codigo: string;
//   nombre: string;
//   aPaterno: string;
// }

// class Estudiante {
//   public codigo: string;
//   private nombre: string;
//   static codigoGenerado: number = 0;

//   constructor(nombre: string) {
//     this.nombre = nombre;
//     this.codigo = (Estudiante.codigoGenerado + 1).toString();
//     Estudiante.codigoGenerado++;
//   }
// }

// const var01: Alumno = {
//   codigo: "00000001a",
//   nombre: "Juan Carlos",
//   aPaterno: "Garcia"
// }

// const est01 = new Estudiante("Pedro");
// console.table(est01);
// console.log(Estudiante.codigoGenerado);
// const est02 = new Estudiante("Ana");
// console.log(Estudiante.codigoGenerado);
// const est03 = new Estudiante("Juan");
// console.log(Estudiante.codigoGenerado);

// // console.table(var01);
// console.table(est01);
// console.table(est02);
// console.table(est03);


// class Estudiante {

//   constructor(public codigo: string, 
//     public nombre: string, 
//     public aPaterno: string) {

//   }
// }

// const est01 = new Estudiante("001", "Juan", "Garcia");
// const est02 = new Estudiante("002", "Juana", "Perez");
// const est03 = new Estudiante("003", "Ana", "Arminto");

// console.table(est01);
// console.table(est02);
// console.table(est03);
