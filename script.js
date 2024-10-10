// Información de los países incluyendo foto y título del mandatario
const countriesInfo = {
    "Estados Unidos": {
        divisa: "Dólar estadounidense (USD)",
        mandatario: "Joe Biden",
        titulo: "Presidente",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/640px-Joe_Biden_presidential_portrait.jpg"
    },
    "Canadá": {
        divisa: "Dólar canadiense (CAD)",
        mandatario: "Justin Trudeau",
        titulo: "Primer Ministro",
        foto: "https://oceanpanel.org/wp-content/uploads/2022/05/JustinTrudeau.jpg"
    },
    "México": {
        divisa: "Peso mexicano (MXN)",
        mandatario: "Claudia Sheinbaum Pardo",
        titulo: "Presidenta",
        foto: "https://sabervotar.mx/wp-content/uploads/2023/07/CLAUDIA-SHEINBAUM-PARDO.png"
    },
    "Groenlandia": {
        divisa: "Corona danesa (DKK)",
        mandatario: "Mette Frederiksen",
        titulo: "Primera Ministra",
        foto: "https://www.ft.dk/-/media/cv/foto/2022/s/mette-frederiksen/mette_frederiksen_500.jpg"
    },
    "Venezuela": {
        divisa: "Bolívar venezolano (VES)",
        mandatario: "Nicolás Maduro",
        titulo: "Dictador",
        foto: "https://www.contactomagazine.com/articulos/nicolas-maduro-vertical.jpeg"
    },
    "Belice": {
        divisa: "Dólar beliceño (BZD)",
        mandatario: "Johnny Briceño",
        titulo: "Primer Ministro",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Johnny_Brice%C3%B1o_%2852135383761%29_%28cropped%29.jpg/640px-Johnny_Brice%C3%B1o_%2852135383761%29_%28cropped%29.jpg"
    },
    "Costa Rica": {
        divisa: "Colón costarricense (CRC)",
        mandatario: "Rodrigo Chaves Robles",
        titulo: "Presidente",
        foto: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Rodrigo_Chaves_2022-5-16_Foto_by_Julieth_Mendez_%28cropped%29.jpg"
    },
    "El Salvador": {
        divisa: "Dólar estadounidense (USD)",
        mandatario: "Nayib Bukele",
        titulo: "Presidente",
        foto: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Presidente_Bukele_%28cropped%29.jpg"
    },
    "Guatemala": {
        divisa: "Quetzal guatemalteco (GTQ)",
        mandatario: "Alejandro Giammattei",
        titulo: "Presidente",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN51XqMIo82SLOt0fPIK71Xoe0aGzr9JudRA&s"
    },
    "Honduras": {
        divisa: "Lempira hondureña (HNL)",
        mandatario: "Xiomara Castro",
        titulo: "Presidenta",
        foto: "https://www.cidob.org/sites/default/files/styles/max_width_290/public/xiomara_castro_de_zelaya.jpg.webp?itok=4XYc9s71"
    },
    "Nicaragua": {
        divisa: "Córdoba nicaragüense (NIO)",
        mandatario: "Daniel Ortega",
        titulo: "Presidente",
        foto: "https://upload.wikimedia.org/wikipedia/commons/1/10/01.10_%E7%B8%BD%E7%B5%B1%E8%88%87%E5%B0%BC%E5%8A%A0%E6%8B%89%E7%93%9C%E7%B8%BD%E7%B5%B1%E5%A5%A7%E5%BE%B7%E5%98%89%28Jos%C3%A9_Daniel_Ortega_Saavedra%29%E9%9B%99%E9%82%8A%E6%9C%83%E6%99%A4_%2832074399712%29_%28cropped%29.jpg"
    },
    "Panamá": {
        divisa: "Balboa panameño (PAB)",
        mandatario: "Laurentino Cortizo",
        titulo: "Presidente",
        foto: "https://upload.wikimedia.org/wikipedia/commons/6/60/Laurentino_Cortizo_%2852134360482%29_%28cropped%29.jpg"
    },
    "Argentina": {
        divisa: "Peso argentino (ARS)",
        mandatario: "Javier Gerardo Milei",
        titulo: "Presidente",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Javier_Milei_en_el_Sal%C3%B3n_Blanco_2_%28cropped%29_%282%29.jpg/360px-Javier_Milei_en_el_Sal%C3%B3n_Blanco_2_%28cropped%29_%282%29.jpg"
    },
    "Bolivia": {
        divisa: "Boliviano (BOB)",
        mandatario: "Luis Arce",
        titulo: "Presidente",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Luis_Alberto_Arce_Catacora_%28Official_Portrait%2C_2020%29_Cropped_II.png/640px-Luis_Alberto_Arce_Catacora_%28Official_Portrait%2C_2020%29_Cropped_II.png"
    },
    "Brasil": {
        divisa: "Real brasileño (BRL)",
        mandatario: "Luiz Inácio Lula da Silva",
        titulo: "Presidente",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lula_-_foto_oficial_-_05_jan_2007_%28cropped_3%29.jpg/220px-Lula_-_foto_oficial_-_05_jan_2007_%28cropped_3%29.jpg"
    },
    "Chile": {
        divisa: "Peso chileno (CLP)",
        mandatario: "Gabriel Boric",
        titulo: "Presidente",
        foto: "https://acuerdodeescazu.cepal.org/cop3/sites/acuerdodeescazucop3/files/styles/person_picture/public/images/retrato_oficial_presidente_boric_font.jpg?itok=F6WQ2XR4"
    },
    "Colombia": {
        divisa: "Peso colombiano (COP)",
        mandatario: "Gustavo Petro",
        titulo: "Presidente",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Presidente_Gustavo_Petro_Urrego.jpg/640px-Presidente_Gustavo_Petro_Urrego.jpg"
    },
    "Ecuador": {
        divisa: "Dólar estadounidense (USD)",
        mandatario: "Daniel Roy Gilchrist Noboa Azín",
        titulo: "Presidente",
        foto: "https://www.cidob.org/sites/default/files/styles/max_width_290/public/daniel_noboa_azin.jpg.webp?itok=RP1cgOrb"
    },
    "Guyana": {
        divisa: "Dólar guyanés (GYD)",
        mandatario: "Irfaan Ali",
        titulo: "Presidente",
        foto: "https://caribbeannewsglobal.com/wp-content/uploads/2021/01/Dr-Ali.jpg"
    },
    "Paraguay": {
        divisa: "Guaraní paraguayo (PYG)",
        mandatario: "Santiago Peña",
        titulo: "Presidente",
        foto: "https://pbs.twimg.com/profile_images/1691545935275266048/gSAppDQk_400x400.jpg"
    },
    "Perú": {
        divisa: "Sol peruano (PEN)",
        mandatario: "Dina Boluarte",
        titulo: "Presidenta",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Presidenta_Boluarte_2024.jpg/220px-Presidenta_Boluarte_2024.jpg"
    },
    "Surinam": {
        divisa: "Dólar surinamés (SRD)",
        mandatario: "Chandrikapersad Santokhi",
        titulo: "Presidente",
        foto: "https://ximage.c-spanvideo.org/eyJidWNrZXQiOiJwaWN0dXJlcy5jLXNwYW52aWRlby5vcmciLCJrZXkiOiJGaWxlc1wvNzg1XC8wMTJcLzE2NjMyNjM3NjhfMDEyLmpwZyIsImVkaXRzIjp7ImV4dHJhY3QiOnsibGVmdCI6NTYxLCJ0b3AiOjAsIndpZHRoIjo1NTIsImhlaWdodCI6NjcwfSwicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwiaGVpZ2h0IjoyMDAsIndpZHRoIjoyMDB9fX0="
    },
    "Uruguay": {
        divisa: "Peso uruguayo (UYU)",
        mandatario: "Luis Lacalle Pou",
        titulo: "Presidente",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Foto_Oficial_Presidente_Luis_Lacalle_Pou_%28cropped%29.jpg/220px-Foto_Oficial_Presidente_Luis_Lacalle_Pou_%28cropped%29.jpg"
    },
    "Antigua y Barbuda": {
        divisa: "Dólar del Caribe Oriental (XCD)",
        mandatario: "Gaston Browne",
        titulo: "Primer Ministro",
        foto: "https://periododesesiones.cepal.org/36/sites/pses36/files/styles/person_picture/public/images/gaston_browne159b.jpg?itok=DZOHreu1"
    },
    "Bahamas": {
        divisa: "Dólar bahameño (BSD)",
        mandatario: "Philip Edward Davis",
        titulo: "Primer Ministro",
        foto: "https://www.blackpast.org/wp-content/uploads/Philip-Edward-Davis-Wikipedia-e1654893020485.jpg"
    },
    "Barbados": {
        divisa: "Dólar barbadeño (BBD)",
        mandatario: "Mia Mottley",
        titulo: "Primera Ministra",
        foto: "https://pbs.twimg.com/profile_images/1637256253234659332/hQcZ6r7s_400x400.jpg"
    },
    "Cuba": {
        divisa: "Peso cubano (CUP)",
        mandatario: "Miguel Díaz-Canel",
        titulo: "Presidente",
        foto: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Miguel_D%C3%ADaz-Canel_%28cropped%29.jpg"
    },
    "Dominica": {
        divisa: "Dólar del Caribe Oriental (XCD)",
        mandatario: "Roosevelt Skerrit",
        titulo: "Primer Ministro",
        foto: "https://odm.gov.dm/wp-content/uploads/2022/01/prime_minister_skerrit.jpg"
    },
    "República Dominicana": {
        divisa: "Peso dominicano (DOP)",
        mandatario: "Luis Abinader",
        titulo: "Presidente",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Luis_Abinader_en_2021.jpg/640px-Luis_Abinader_en_2021.jpg"
    },
    "Granada": {
        divisa: "Dólar del Caribe Oriental (XCD)",
        mandatario: "Dickon Mitchell",
        titulo: "Primer Ministro",
        foto: "https://mitchellsco.com/wp-content/uploads/2017/09/Dickon.jpg"
    },
    "Haití": {
        divisa: "Gourde haitiano (HTG)",
        mandatario: "Ariel Henry",
        titulo: "Primer Ministro",
        foto: "https://almomento.mx/wp-content/uploads/2024/03/Dimite-el-primer-ministro-de-Haiti-Ariel-Henry-%E2%80%98No-hay-sacrificio-demasiado-grande.jpeg"
    },
    "Jamaica": {
        divisa: "Dólar jamaicano (JMD)",
        mandatario: "Andrew Holness",
        titulo: "Primer Ministro",
        foto: "https://oceanpanel.org/wp-content/uploads/2022/05/OceanPanelMembers-_0008_Andrew-Holness.jpg"
    },
    "San Cristóbal y Nieves": {
        divisa: "Dólar del Caribe Oriental (XCD)",
        mandatario: "Terrance Drew",
        titulo: "Primer Ministro",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Terrance_Drew_2022.jpg/220px-Terrance_Drew_2022.jpg"
    },
    "Santa Lucía": {
        divisa: "Dólar del Caribe Oriental (XCD)",
        mandatario: "Philip J. Pierre",
        titulo: "Primer Ministro",
        foto: "https://www.blackpast.org/wp-content/uploads/Philip-J.-Pierre-Twitter.jpg"
    },
    "San Vicente y las Granadinas": {
        divisa: "Dólar del Caribe Oriental (XCD)",
        mandatario: "Ralph Gonsalves",
        titulo: "Primer Ministro",
        foto: "https://www.ecured.cu/images/8/85/Prime-Minister-St.-Vincent-Gonsalves.jpg"
    },
    "Trinidad y Tobago": {
        divisa: "Dólar trinitense (TTD)",
        mandatario: "Keith Rowley",
        titulo: "Primer Ministro",
        foto: "https://pbs.twimg.com/profile_images/1041776131999854592/6LttFus1_400x400.jpg"
    }
};

// Obtener elementos del modal
const modal = document.getElementById("modal");
const modalCountryName = document.getElementById("modal-country-name");
const modalCountryInfo = document.getElementById("modal-country-info");
const modalCountryLeaderPhoto = document.getElementById("modal-country-leader-photo");
const closeModalBtn = document.querySelector(".close");

// Abrir modal con información del país
document.querySelectorAll('.country-card button').forEach(button => {
    button.addEventListener('click', (e) => {
        const country = e.target.parentElement.dataset.country;
        const info = countriesInfo[country];
        if (info) {
            modalCountryName.textContent = country;
            modalCountryLeaderPhoto.src = info.foto;
            modalCountryInfo.innerHTML = `<p>Divisa: ${info.divisa}</p><p>${info.titulo}: ${info.mandatario}</p>`;
            modal.style.display = "block";
        }
    });
});

// Cerrar modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// Cerrar modal si se hace clic fuera de la ventana
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Código para el botón de "Regresar arriba"
const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
