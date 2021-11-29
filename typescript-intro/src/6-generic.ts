
function queTipoSoy<Type> (arg: Type) : Type {
  return arg;
}

let ej1 = console.log(queTipoSoy<number>(12));
let ej2 = console.log(queTipoSoy<string>('hola'));
let ej3 = console.log(queTipoSoy<number[]>([1, 2, 3, 4]));