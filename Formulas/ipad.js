// VARIABLES GLOBALES
const cotDolar = datosVariables.cotDolar; // Cotización del dólar
const iva = datosVariables.ivaFinal / 100; // IVA en decimal
const cft = datosVariables.cftTotalFinal / 100; // CFT (suma de comisiones)
const numeroDeCuotas = datosVariables.numerDeCuotas; // Número de cuotas

// LISTA DE PRECIOS ⭐️⭐️⭐️
const listaPrecios = [
    { id: 1, modelo: "iPad 10th", cap: "64GB", precioDolares: 595, stock: "no",
    imagen: src = "img/ipad/10th/GENERAL.png", 
    estiloImagen: "width: 180px; height: auto;",  // ✅ Restauramos el estilo para la imagen
    linkWhats: "https://wa.me/541164352202?text=Hola,%20tengo%20inter%C3%A9s%20en%20el%20iPad%2010th%2064GB.%20Me%20gustar%C3%ADa%20conocer%20las%20opciones%20de%20pago%20y%20los%20tiempos%20de%20entrega.%20Gracias." },
    { id: 2, modelo: "iPad 10th", cap: "256GB", precioDolares: 765, stock: "no",
    imagen: src = "img/ipad/10th/GENERAL.png", 
    estiloImagen: "width: 180px; height: auto;",  // ✅ Restauramos el estilo para la imagen
    linkWhats: "https://wa.me/541164352202?text=Hola,%20tengo%20inter%C3%A9s%20en%20el%20iPad%2010th%20256GB.%20Me%20gustar%C3%ADa%20conocer%20las%20opciones%20de%20pago%20y%20los%20tiempos%20de%20entrega.%20Gracias." },
    { id: 3, modelo: "iPad Mini", cap: "64GB", precioDolares: 570, stock: "no",
    imagen: src = "img/ipad/mini/GENERAL.png", 
    estiloImagen: "width: 210px; height: auto;",  // ✅ Restauramos el estilo para la imagen
    linkWhats: "https://wa.me/541164352202?text=Hola,%20tengo%20inter%C3%A9s%20en%20el%20iPad%20Mini%2064GB.%20Me%20gustar%C3%ADa%20conocer%20las%20opciones%20de%20pago%20y%20los%20tiempos%20de%20entrega.%20Gracias." },
    { id: 4, modelo: "iPad Mini", cap: "256GB", precioDolares: 889, stock: "no",
    imagen: src = "img/ipad/mini/GENERAL.png", 
    estiloImagen: "width: 210px; height: auto;",  // ✅ Restauramos el estilo para la imagen
    linkWhats: "https://wa.me/541164352202?text=Hola,%20tengo%20inter%C3%A9s%20en%20el%20iPad%20Mini%20256GB.%20Me%20gustar%C3%ADa%20conocer%20las%20opciones%20de%20pago%20y%20los%20tiempos%20de%20entrega.%20Gracias." },
    { id: 5, modelo: "iPad AIR", cap: "64GB", precioDolares: 820, stock: "no",
    imagen: src = "img/ipad/air/GENERAL.png", 
    linkWhats: "https://wa.me/541164352202?text=Hola,%20tengo%20inter%C3%A9s%20en%20el%20iPad%20AIR%2064GB.%20Me%20gustar%C3%ADa%20conocer%20las%20opciones%20de%20pago%20y%20los%20tiempos%20de%20entrega.%20Gracias." },
    { id: 6, modelo: "iPad AIR", cap: "256GB", precioDolares: 1026, stock: "no",
    imagen: src = "img/ipad/air/GENERAL.png", 
    linkWhats: "https://wa.me/541164352202?text=Hola,%20tengo%20inter%C3%A9s%20en%20el%20iPad%20AIR%20256GB.%20Me%20gustar%C3%ADa%20conocer%20las%20opciones%20de%20pago%20y%20los%20tiempos%20de%20entrega.%20Gracias." },
    { id: 7, modelo: "iPad PRO 11' M2", cap: "128GB", precioDolares: 1094, stock: "no",
    imagen: src = "img/ipad/pro/GENERAL.png", 
    estiloImagen: "width: 180px; height: auto;",  // ✅ Restauramos el estilo para la imagen
    linkWhats: "https://wa.me/541164352202?text=Hola,%20tengo%20inter%C3%A9s%20en%20el%20iPad%20PRO%2011'%20M2%20128GB.%20Me%20gustar%C3%ADa%20conocer%20las%20opciones%20de%20pago%20y%20los%20tiempos%20de%20entrega.%20Gracias." },
    { id: 8, modelo: "iPad PRO 11' M2", cap: "256GB", precioDolares: 1231, stock: "no",
     imagen: src = "img/ipad/pro/GENERAL.png", 
     estiloImagen: "width: 180px; height: auto;",  // ✅ Restauramos el estilo para la imagen
    linkWhats: "https://wa.me/541164352202?text=Hola,%20tengo%20inter%C3%A9s%20en%20el%20iPad%20PRO%2011'%20M2%20256GB.%20Me%20gustar%C3%ADa%20conocer%20las%20opciones%20de%20pago%20y%20los%20tiempos%20de%20entrega.%20Gracias." },
    { id: 9, modelo: "iPad PRO 11' M2", cap: "512GB", precioDolares: 1505, stock: "no",
     imagen: src = "img/ipad/pro/GENERAL.png", 
     estiloImagen: "width: 180px; height: auto;",  // ✅ Restauramos el estilo para la imagen
    linkWhats: "https://wa.me/541164352202?text=Hola,%20tengo%20inter%C3%A9s%20en%20el%20iPad%20PRO%2011'%20M2%20512GB.%20Me%20gustar%C3%ADa%20conocer%20las%20opciones%20de%20pago%20y%20los%20tiempos%20de%20entrega.%20Gracias." },
    { id: 10, modelo: "iPad 9th", cap: "64GB", precioDolares: 450, stock: "no",
    imagen: src = "img/ipad/9th/GENERAL.png", 
    estiloImagen: "width: 180px; height: auto;",  // ✅ Restauramos el estilo para la imagen
    linkWhats: "https://wa.me/541164352202?text=Hola,%20tengo%20inter%C3%A9s%20en%20el%20iPad%209th%2064GB.%20Me%20gustar%C3%ADa%20conocer%20las%20opciones%20de%20pago%20y%20los%20tiempos%20de%20entrega.%20Gracias." },
    { id: 11, modelo: "iPad 9th", cap: "256GB", precioDolares: 600, stock: "no",
    imagen: src = "img/ipad/9th/GENERAL.png", 
    estiloImagen: "width: 180px; height: auto;",  // ✅ Restauramos el estilo para la imagen
    linkWhats: "https://wa.me/541164352202?text=Hola,%20tengo%20inter%C3%A9s%20en%20el%20iPad%209th%20256GB.%20Me%20gustar%C3%ADa%20conocer%20las%20opciones%20de%20pago%20y%20los%20tiempos%20de%20entrega.%20Gracias." },
];

// FUNCIONES DE CÁLCULO

// Calcular el valor base (valor en dólares convertido a pesos)
function calcularValorBase(precioUSD) {
    return precioUSD * cotDolar;
}

// Calcular el monto a cobrar al cliente (para recibir el valor base después de IVA y CFT)
function calcularMontoACobrar(valorBase) {
    return valorBase / (1 - (iva + cft));
}

// Calcular el valor de cada cuota
function calcularValorCuota(valorLista) {
    return valorLista / numeroDeCuotas;
}

// Calcular el monto con descuento para transferencia (valor con IVA)
function calcularValorTransferencia(valorBase) {
    return valorBase * (1 + iva);
}

// Calcular el valor promocional en efectivo (valor base con descuento extra)
function calcularValorPromoEfectivo(valorBase, descuentoEfectivo) {
    return valorBase * (1 - descuentoEfectivo / 100);
}

// Calcular el porcentaje de descuento entre dos valores
function calcularPorcentajeDescuento(valorLista, valorConDescuento) {
    return (1 - (valorConDescuento / valorLista)) * 100;
}

// PROCESAR PRODUCTOS
const listaProcesada = listaPrecios.map(producto => {
    const valorBase = calcularValorBase(producto.precioDolares); // Valor base
    const valorLista = calcularMontoACobrar(valorBase); // Valor de lista (con IVA y CFT)
    const valorTransferencia = calcularValorTransferencia(valorBase); // Valor por transferencia
    const valorCuota = calcularValorCuota(valorLista); // Valor por cuota
    const valorPromoEfectivo = calcularValorPromoEfectivo(valorBase, 0); // Sin descuento adicional


    // Validar cálculos
    if (!valorLista || !valorTransferencia || !valorCuota || !valorPromoEfectivo) {
        console.error(`Error en cálculos para el producto: ${producto.modelo}`);
    }

    // Descuentos automáticos
    const descuentoTransferencia = calcularPorcentajeDescuento(valorLista, valorTransferencia);
    const descuentoEfectivo = calcularPorcentajeDescuento(valorLista, valorPromoEfectivo);

    return {
        ...producto,
        valorBase,
        valorLista,
        valorCuota,
        valorTransferencia,
        valorPromoEfectivo,
        descuentoTransferencia,
        descuentoEfectivo,
    };
});

console.log(listaProcesada); // Verificar valores procesados

function generarTarjetasDeProductos(listaProductos) {
    const container = document.querySelector('#productos-container');
    container.innerHTML = ""; // Limpiar contenedor

    listaProductos.forEach((producto, index) => {
        const tarjetaHTML = `
        <div class="product-card" id="producto${index + 1}">
          <div class="product-top">
            <span class="capacity-badge">${producto.cap}</span>
            <span class="availability-badge ${producto.stock === 'si' ? 'available' : 'delayed'}">
              ${producto.stock === 'si' ? 'Disponible para entrega' : 'Entrega en 48hs'}
            </span>
          </div>
  
          <div class="product-image">
            <img src="${producto.imagen}" alt="${producto.modelo}">
          </div>
  
          <div class="product-info">
            <h2 class="product-name">${producto.modelo}</h2>
  
            <div class="product-price-group">
            <p class="original-price">$${formatearNumero(producto.valorLista)}</p>
            <p class="discounted-line">
              <span class="discounted-price">$${formatearNumero(producto.valorPromoEfectivo)}</span>
              <span class="discount-percentage">40% Off de contado</span>
            </p>
            <p class="installment-total">$${formatearNumero(producto.valorLista)}</p>
            <p class="installment-details">
              Mismo precio en 6 cuotas de $${formatearNumero(producto.valorCuota)}
            </p>
          </div>
  
            <a href="${producto.linkWhats}" class="buy-button" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cart-icon">
                <circle cx="8" cy="21" r="1"/>
                <circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
              <span>Comprar</span>
            </a>
          </div>
        </div>
      `;

        container.innerHTML += tarjetaHTML;
    });
}

// GENERAR TARJETAS DE PRODUCTOS EN DÓLARES
function generarTarjetasDeProductosDolares(listaProductos) {
    const container = document.querySelector('#productos-container');
    container.innerHTML = ""; // Limpiar contenedor

    listaProductos.forEach((producto, index) => {
        const mensajeStock = producto.stock === "si"
            ? "<span class='availability-badge available'>Disponible para entrega</span>"
            : "<span class='availability-badge delayed'>Entrega en 48hs</span>";

        const tarjetaHTML = `
        <div class="product-card" id="producto${index + 1}">
          <div class="product-top">
            <span class="capacity-badge">${producto.cap}</span>
            ${mensajeStock}
          </div>
          
          <div class="product-image">
            <img src="${producto.imagen}" alt="${producto.modelo}">
          </div>
          
          <div class="product-info">
            <h2 class="product-name">${producto.modelo}</h2>
            
            <div class="product-price">
              <span class="discounted-price">U$${formatearNumero(producto.precioDolares)}</span>
              <span class="discount-percentage">(40% OFF de contado)</span>
            </div>
            
            <a href="${producto.linkWhats}" class="buy-button" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cart-icon">
                <circle cx="8" cy="21" r="1"/>
                <circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
              <span>COMPRAR</span>
            </a>
          </div>
        </div>
      `;

        container.innerHTML += tarjetaHTML;
    });
}



// SWITCH PARA CAMBIAR ENTRE PESOS Y DÓLARES
const currencySwitch = document.querySelector("#currency-switch");
const currencyLabel = document.querySelector(".switch-x-text");

currencySwitch.addEventListener("change", (event) => {
    const enDolares = event.target.checked;

    if (enDolares) {
        generarTarjetasDeProductosDolares(listaPrecios);
        currencyLabel.textContent = "Mostrar precios en ";
    } else {
        generarTarjetasDeProductos(listaProcesada);
        currencyLabel.textContent = "Mostrar precios en ";
    }
});

// INICIALIZAR LA PÁGINA
function inicializarPagina() {
    generarTarjetasDeProductos(listaProcesada); // Mostrar precios en pesos al inicio
    currencyLabel.textContent = "Mostrar precios en";
}

inicializarPagina();

// FORMATEAR NÚMEROS
function formatearNumero(numero) {
    if (numero === undefined || numero === null) {
        console.error("Número indefinido o nulo pasado a formatearNumero:", numero);
        return "0"; // Devuelve un valor por defecto
    }
    return numero.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}