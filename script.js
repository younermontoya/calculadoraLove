function calculadora() {
    let n1 = document.getElementById("nombre1").value;
    let n2 = document.getElementById("nombre2").value;

    if (n1 === "" || n2 === "") {
        document.getElementById("result").innerText = "Pon ambos nombres!!";
        return;
    } 

    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!regex.test(n1) || !regex.test(n2)) {
        document.getElementById("result").innerText = "Solo letras, nada de números ni símbolos 💔";
        return;
    }


    let porcentaje = Math.floor(Math.random() * 101);


    document.getElementById("result").innerText = 
        `${n1} ❤️ ${n2} = ${porcentaje}% de amor`;

        let imagenes = [
    "https://cdn.pixabay.com/photo/2015/09/27/19/50/fire-heart-961194_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/09/26/02/16/sees-it-8276376_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/01/13/05/55/geralt-heart-1137259_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/01/08/12/27/love-1127710_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/11/27/05/42/ai-generated-9227230_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/07/11/18/04/ai-generated-8121083_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/08/07/07/55/ai-generated-8174571_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/12/29/06/16/mouth-7684262_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/08/06/07/01/couple-8172283_1280.jpg",
     ];

let randomImg = imagenes[Math.floor(Math.random() * imagenes.length)];

document.body.style.backgroundImage = `url('${randomImg}')`;
}