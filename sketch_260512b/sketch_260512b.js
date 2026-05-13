let paletaActual;

let paletaOriginal = {
    colBloque1: '#ece81a',
    colBloque2: '#e60000',
    colBloque3: '#a626b4',
    colBloque4: '#3b59ba',
    colBloque5: '#f7b8d4',
    colBloque6: '#79f000',
    colBloque7: '#5eb6d2',
    colInteriorV1: '#8db2d5',
    colInteriorV2: '#ff9900',
    colInteriorV3: '#e81175',
    colMarcoV1: '#8473b6',
    colMarcoV2: '#0071a4',
    colMarcoV3: '#2e1c4a'
};

let paletaFria = {
    colBloque1: '#87bdc9',
    colBloque2: '#8fa6eb',
    colBloque3: '#5f64a9 ',
    colBloque4: '#3868ba',
    colBloque5: '#b3a5d3',
    colBloque6: '#004f6b',
    colBloque7: '#678fca ',
    colInteriorV1: '#496ec6 ',
    colInteriorV2: '#7cabd6',
    colInteriorV3: '#4d5da3',
    colMarcoV1: '#1f3cb0',
    colMarcoV2: '#003058 ',
    colMarcoV3: '#06286d'
};

let paletaCalida = {
    colBloque1: '#f0b812',
    colBloque2: '#e60000',
    colBloque3: '#b42676',
    colBloque4: '#b36566',
    colBloque5: '#ff8389',
    colBloque6: '#f08000',
    colBloque7: '#d25e71',
    colInteriorV1: '#d58db5',
    colInteriorV2: '#ff6600',
    colInteriorV3: '#e8112e',
    colMarcoV1: '#241719',
    colMarcoV2: '#a40039',
    colMarcoV3: '#640026'
};


// Colores de la obra (semánticos)
let colFondo = '#f0f0f0';

// Parámetro de interacción para las ventanas
let variacionVentana = 0;
const LIMITE_EXPANSION = 40;
const LIMITE_CONTRACCION = -50;

function setup() {
    //document.oncontextmenu = () => false;
    createCanvas(800, 800);
    noStroke();
    paletaActual = paletaOriginal;
    noLoop();
}

function draw() {
    background(colFondo);

    // Escala y traslación para centrar la figura
    push();
    translate(width * 0.15, height * 0.05);
    scale(0.85);

    // 1. Rectángulos de fondo (Verde y Rosa)
    fill(paletaActual.colBloque6);
    rect(60, 420, 450, 310); // Base verde

    fill(paletaActual.colBloque5);
    rect(450, 275, 300, 330); // Bloque rosa a la derecha

    // 2. Bloque Amarillo (Arriba Izquierda)
    fill(paletaActual.colBloque1);
    rect(45, 50, 260, 260);
    
    // Ventana Celeste (Parametrizada)
    let v1X = 100 - variacionVentana;
    let v1Y = 95 - variacionVentana;
    let v1W = 150 + 2 * variacionVentana;
    let v1H = 165 + 2 * variacionVentana;
    
    fill(paletaActual.colMarcoV1);
    rect(v1X, v1Y, v1W, v1H);
    
    fill(paletaActual.colInteriorV1);
    // Mantiene el marco de 8px
    rect(v1X + 8, v1Y + 8, v1W - 16, v1H - 16);
    
    // Barrotes ventana 1 (Distribución proporcional)
    stroke(paletaActual.colMarcoV1);
    strokeWeight(4);
    line(v1X + v1W * 0.346, v1Y + 8, v1X + v1W * 0.346, v1Y + v1H - 8);
    line(v1X + v1W * 0.64, v1Y + 8, v1X + v1W * 0.64, v1Y + v1H - 8);
    noStroke();

    // 3. Bloque Rojo (Arriba Derecha)
    fill(paletaActual.colBloque2);
    rect(305, 0, 355, 320);

    // 4. Bloque Morado (Centro abajo)
    fill(paletaActual.colBloque3);
    rect(115, 310, 345, 415);
    
    // Ventana Naranja (Parametrizada)
    let v2X = 170 - variacionVentana;
    let v2Y = 365 - variacionVentana;
    let v2W = 230 + 2 * variacionVentana;
    let v2H = 310 + 2 * variacionVentana;
    
    fill(paletaActual.colMarcoV2);
    rect(v2X, v2Y, v2W, v2H);
    
    fill(paletaActual.colInteriorV2);
    // Mantiene el marco de 10px
    rect(v2X + 10, v2Y + 10, v2W - 20, v2H - 20);
    
    // Barrotes ventana 2 (Distribución proporcional)
    stroke(paletaActual.colMarcoV2);
    strokeWeight(6);
    line(v2X + v2W * 0.269, v2Y + 10, v2X + v2W * 0.269, v2Y + v2H - 10);
    line(v2X + v2W * 0.5, v2Y + 10, v2X + v2W * 0.5, v2Y + v2H - 10);
    line(v2X + v2W * 0.73, v2Y + 10, v2X + v2W * 0.73, v2Y + v2H - 10);
    noStroke();

    // 5. Bloque Azul (Centro Derecha)
    fill(paletaActual.colBloque4);
    rect(460, 310, 255, 250);
    
    // Ventana Rosa Fuerte (Parametrizada)
    let v3X = 510 - variacionVentana;
    let v3Y = 360 - variacionVentana;
    let v3W = 150 + 2 * variacionVentana;
    let v3H = 150 + 2 * variacionVentana;
    
    fill(paletaActual.colMarcoV3);
    rect(v3X, v3Y, v3W, v3H);
    
    fill(paletaActual.colInteriorV3);
    // Mantiene el marco de 8px
    rect(v3X + 8, v3Y + 8, v3W - 16, v3H - 16);
    
    // Barrotes ventana 3 (Distribución proporcional)
    stroke(paletaActual.colMarcoV3);
    strokeWeight(5);
    line(v3X + v3W * 0.346, v3Y + 8, v3X + v3W * 0.346, v3Y + v3H - 8);
    line(v3X + v3W * 0.64, v3Y + 8, v3X + v3W * 0.64, v3Y + v3H - 8);
    noStroke();

    // 6. Barra inferior (Cielo)
    fill(paletaActual.colBloque7);
    rect(0, 725, 575, 75);

    applyGrain([paletaActual.colBloque1, paletaActual.colBloque2, paletaActual.colBloque3, paletaActual.colBloque4]);

    pop();
}


function mousePressed() {

    detectarInputMouse();

}

function detectarInputMouse() {

    let tipoFrecuencia;
    let tipoAmplitud;

    if (mouseY < height / 2) {
        tipoFrecuencia = "alta (sonido agudo)";
        activarPaletaFria();
    } else {
        tipoFrecuencia = "baja (sonido grave)";
        activarPaletaCalida();
    }

    if (mouseButton === LEFT) {
        tipoAmplitud = "izquierdo (alta amplitud)";
    } else if (mouseButton === RIGHT) {
        tipoAmplitud = "derecho (baja amplitud)";
    } else {
        tipoAmplitud = "desconocida";
    }

    console.log(
        "Se presionó click " +
        tipoAmplitud +
        " en la zona " +
        tipoFrecuencia +
        " del canvas."
    );

}

function activarPaletaFria() {

    paletaActual = paletaFria;
    redraw();

    console.log("Paleta fría activada");
}

function activarPaletaCalida() {

    paletaActual = paletaCalida;
    redraw();

    console.log("Paleta cálida activada");

}

function activarPaletaOriginal() {

    paletaActual = paletaOriginal;
    redraw();

    console.log("Paleta original activada");

}

function keyPressed() {
    if (key === '1') {
        // Agrandar ventanas hasta el límite
        if (variacionVentana < LIMITE_EXPANSION) {
            variacionVentana += 5;
            redraw();
        }
    } else if (key === '2') {
        // Achicar ventanas hasta el límite
        if (variacionVentana > LIMITE_CONTRACCION) {
            variacionVentana -= 5;
            redraw();
        }
    } else if (key === ' ') {
        // Volver al tamaño original y paleta original
        variacionVentana = 0;
        activarPaletaOriginal();
    }
}


function drawNoise(x, y, w, h) {
    push();
    strokeWeight(1);
    for (let i = 0; i < (w * h) * 0.05; i++) {
        let px = x + random(w);
        let py = y + random(h);
        stroke(0, 15); // Subtle dark grain
        point(px, py);
        stroke(255, 15); // Subtle light grain
        point(px + 1, py + 1);
    }
    pop();
}

function applyGrain(coloresObjetivo) {
    loadPixels();

    // Convertimos el arreglo de colores (hex) a sus niveles RGB para comparar
    let targets = coloresObjetivo.map(c => color(c).levels);

    for (let i = 0; i < pixels.length; i += 4) {
        let r = pixels[i];
        let g = pixels[i + 1];
        let b = pixels[i + 2];

        // Verificamos si el píxel actual coincide con alguno de los colores del arreglo
        let match = false;
        for (let t of targets) {
            if (r === t[0] && g === t[1] && b === t[2]) {
                match = true;
                break;
            }
        }

        if (match) {
            let noise = random(-10, 10);
            pixels[i] += noise;
            pixels[i + 1] += noise;
            pixels[i + 2] += noise;
        }
    }
    updatePixels();
}
