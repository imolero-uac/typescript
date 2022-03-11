import { Component } from '@angular/core';

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
// alumno.mostrarMatricula("Pedro");

// matricular(alumno, true);

// // console.table(alumno);

// interface Facultad {
//   nombre: string,
//   tieneEscuelaProfesional: EscuelaProfesional[]
// }

// interface EscuelaProfesional {
//   nombre: string,
//   perteneceFacultad: Facultad
// }

// let facultades: Facultad[] = [];
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