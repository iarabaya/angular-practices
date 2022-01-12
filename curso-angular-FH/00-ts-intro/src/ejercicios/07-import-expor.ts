/*
    ===== Código de TypeScript =====
*/
import { Producto, calcularISV } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono1',
        precio: 100
    },
    {
        desc: 'Telefono2',
        precio: 150
    },
    {
        desc: 'Telefono3',
        precio: 200
    }
];

const [total, isv] = calcularISV( carritoCompras );

console.log('Total', total);
console.log('ISV', isv);

