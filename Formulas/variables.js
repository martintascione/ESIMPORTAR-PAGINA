

// VARIABLES ⭐️⭐️⭐️

const datosVariables = {
    cotDolar: 1225,
    ComiBase: 4.84, // Comisión base + iva (%)
    cftBaseBase: 12.24, // CFT + iva(%)
    numerDeCuotas: 6,
    iva: 25, // IVA 21% + ING BRUTOS 3% + IMP SELLOS 1%

};

// Cálculos adicionales
datosVariables.cftTotalFinal = datosVariables.ComiBase + datosVariables.cftBaseBase; // Suma de porcentajes
datosVariables.ivaFinal = datosVariables.iva; // Convertir IVA a decimal


const promociones = [
    {
      banco: "BBVA",
      color: "#0055FF",
      logo: "img/Bancos/bbva-logo.png", // 👈🏼 Archivo del logo
      cuotas: [
        { cantidad: 3, dia: "Viernes y Sabados" },
        { cantidad: 6, dia: "Miercoles 16/04" }
      ]
    },
    {
      banco: "Galicia",
      color: "#FF6600",
      logo: "img/Bancos/galicia-logo.png",
      cuotas: [
        { cantidad: 3, dia: "Miercoles y Viernes" },
       // { cantidad: 9, dia: "miércoles 20" }
      ]
    },
   
    
  ];