
const lines = document.querySelectorAll(".code-card .line");

const sleep = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

// Guardamos el HTML original de cada línea, incluidos sus colores
const originalLines = [...lines].map(line => line.innerHTML);

const typeLine = async (element, html, speed = 45) => {
    // Convertimos el HTML en texto visible para animarlo
    const temp = document.createElement("div");
    temp.innerHTML = html;
    const text = temp.textContent;

    element.innerHTML = "";
    element.style.visibility = "visible";

    // Escribimos carácter por carácter
    for (const character of text) {
        element.appendChild(document.createTextNode(character));
        await sleep(speed);
    }

    // Restauramos el HTML con sus colores al terminar la línea
    element.innerHTML = html;
};

const typeCode = async () => {
    while (true) {
        // Reiniciamos todas las líneas
        lines.forEach(line => {
            line.innerHTML = "";
            line.style.visibility = "visible";
        });

        // Escribimos el código línea por línea
        for (let i = 0; i < lines.length; i++) {
            await typeLine(lines[i], originalLines[i], 45);
            await sleep(180);
        }

        // Pausa al terminar
        await sleep(1500);
    }
};

typeCode();
