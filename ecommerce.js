// pre entrega 1

let gastoTotal = 0; //variable que suma los precios seleccionados

let producto = prompt('Que te gustaría comprar?\n1-Adhesivos $650\n2-Tarjetas personales $1500\n3-Folletos $950\n4-Fotografía tradicional $500\n5-Fotografía instantanea $300\n0-Para SALIR');

while(producto != '0'){
    // listado de productos para Ecommerce
    switch(producto){
        case '1':
            alert('Agregaste Adhesivos al carrito ... $650 !!!');
            sumarGastoTotal(650);
            break;
        case '2':
            alert('Agregaste Tarjetas personales al carrito ... $1500 !!!');
            sumarGastoTotal(1500);
            break;
        case '3':
            alert('Agregaste Folletos al carrito ... $950 !!!');
            sumarGastoTotal(950);
            break;
        case '4':
            alert('Agregaste Fotografía tradicional al carrito ... $500 !!!');
            sumarGastoTotal(500);
            break;
        case '5':
            alert('Agregaste Fotografía intantanea al carrito ... $300 !!!');
            sumarGastoTotal(300);
            break;
        default:
            alert('ERROR / Volver a ingresar');
            break;
    }
    producto = prompt('Que te gustaría comprar?\n1-Adhesivos $650\n2-Tarjetas personales $1500\n3-Folletos $950\n4-Fotografía tradicional $500\n5-Fotografía instantanea $300\n0-Para SALIR');
}

alert ('Monto hasta ahora de tu compra: $ '+gastoTotal);

function sumarGastoTotal(precioProducto){
    gastoTotal = gastoTotal + precioProducto;
    console.log('Subtotal hasta el momento $ '+gastoTotal);
}