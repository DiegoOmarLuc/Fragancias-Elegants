const products = [
    { 
        id: 1, 
        name: "Hawas Ice", 
        house: "Rasasi",
        category: "Árabes",
        description: "La nueva bestia del verano. Una interpretación más fresca, helada y duradera del clásico Hawas.",
        notes: "Notas: Manzana, Limón Italiano, Ciruela, Menta, Maderas.",
        price5: 20, 
        price10: 35, 
        imgUrl: "https://http2.mlstatic.com/D_NQ_NP_902940-MPE80699421790_112024-O.webp",
        imgColor: "#a29bfe",
        accordBars: [
            { name: "Cítrico", color: "#f1c40f", width: 100 },
            { name: "Fresco", color: "#3498db", width: 90 },
            { name: "Afrutado", color: "#e74c3c", width: 80 },
            { name: "Aromático", color: "#2ecc71", width: 60 },
            { name: "Acuático", color: "#00bcd4", width: 50 }
        ]
    },
    { 
        id: 2, 
        name: "Asad Bourbon", 
        house: "Lattafa",
        category: "Árabes",
        description: "Elegancia nocturna. Un aroma cálido y especiado que proyecta masculinidad.",
        notes: "Notas: Pimienta Negra, Tabaco, Piña, Café, Pachulí.",
        price5: 25, 
        price10: 35, 
        imgUrl: "https://oechsle.vteximg.com.br/arquivos/ids/21641084-1000-1000/image-49fe62f453e7488694565dc58ce8a369.jpg?v=638876956537370000",
        imgColor: "#e67e22",
        accordBars: [
            { name: "Especiado", color: "#8e44ad", width: 100 },
            { name: "Vainilla", color: "#f39c12", width: 85 },
            { name: "Ámbar", color: "#d35400", width: 80 },
            { name: "Amaderado", color: "#795548", width: 60 },
            { name: "Atalcado", color: "#bdc3c7", width: 40 }
        ]
    },
    { 
        id: 3, 
        name: "Stronger With You Intensely", 
        house: "Giorgio Armani",
        category: "Diseñador",
        description: "Seducción pura. Una fragancia envolvente, dulce y adictiva, perfecta para citas románticas.",
        notes: "Notas: Toffee, Canela, Haba Tonka, Ámbar, Vainilla.",
        price5: 60, 
        price10: 80, 
        imgUrl: "https://http2.mlstatic.com/D_NQ_NP_693852-MPE80401217690_112024-O.webp",
        imgColor: "#c0392b",
        accordBars: [
            { name: "Dulce", color: "#e91e63", width: 100 },
            { name: "Especiado", color: "#c0392b", width: 90 },
            { name: "Vainilla", color: "#f1c40f", width: 80 },
            { name: "Ámbar", color: "#e67e22", width: 70 },
            { name: "Canela", color: "#d35400", width: 60 }
        ]
    },
    { 
        id: 4, 
        name: "Le Male", 
        house: "Jean Paul Gaultier",
        category: "Diseñador",
        description: "El clásico moderno que nunca pasa de moda. Fresco, limpio y con un fondo de vainilla.",
        notes: "Notas: Lavanda, Menta, Cardamomo, Canela, Sándalo.",
        price5: 60, 
        price10: 80, 
        imgUrl: "https://media.falabella.com/falabellaPE/17966491_5/w=800,h=800,fit=pad",
        imgColor: "#3498db",
        accordBars: [
            { name: "Vainilla", color: "#f39c12", width: 100 },
            { name: "Aromático", color: "#27ae60", width: 90 },
            { name: "Fresco Esp.", color: "#2ecc71", width: 85 },
            { name: "Lavanda", color: "#9b59b6", width: 80 },
            { name: "Verde", color: "#16a085", width: 50 }
        ]
    },
    { 
        id: 5, 
        name: "9PM", 
        house: "Afnan",
        category: "Árabes",
        description: "La opción definitiva para la fiesta. Proyecta, gusta a todos con su toque dulce.",
        notes: "Notas: Manzana, Canela, Lavanda, Flor de Azahar, Tonka.",
        price5: 20, 
        price10: 35, 
        imgUrl: "https://yauras.cl/cdn/shop/files/AntonioBanderasMediterraneo_3_132c3c24-18a1-460c-add5-ff8f4571706c_700x700.jpg?v=1761054993",
        imgColor: "#2c3e50",
        accordBars: [
            { name: "Vainilla", color: "#f39c12", width: 100 },
            { name: "Afrutado", color: "#e74c3c", width: 90 },
            { name: "Ámbar", color: "#e67e22", width: 80 },
            { name: "Dulce", color: "#e91e63", width: 75 },
            { name: "Canela", color: "#d35400", width: 60 }
        ]
    },
    { 
        id: 6, 
        name: "Club de Nuit Intense", 
        house: "Armaf",
        category: "Árabes",
        description: "Potencia bruta. Salida cítrica explosiva con un secado ahumado que deja huella.",
        notes: "Notas: Limón, Piña, Grosella Negra, Abedul, Almizcler.",
        price5: 20, 
        price10: 35, 
        soldOut: true,
        imgUrl: "https://aztra.pe/cdn/shop/files/61c7p6Q4PiL._SL1200.jpg?v=1737735536&width=1000",
        imgColor: "#333333",
        accordBars: [
            { name: "Cítrico", color: "#f1c40f", width: 100 },
            { name: "Amaderado", color: "#5d4037", width: 85 },
            { name: "Afrutado", color: "#c0392b", width: 80 },
            { name: "Cuero", color: "#34495e", width: 70 },
            { name: "Ahumado", color: "#7f8c8d", width: 60 }
        ]
    },
    { 
        id: 8, 
        name: "Vintage Radio", 
        house: "Lattafa",
        category: "Árabes",
        description: "Elegancia relajante y sofisticada. Una mezcla cremosa de ciruela madura y palo santo que proyecta calma y distinción.",
        notes: "Notas: Ciruela, Palo Santo, Lavanda, Pimienta Negra, Sándalo.",
        price3: 25,
        price5: 40, 
        price10: 56, 
        pricefull: 180, 
        soldOut: true,
        imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprivateblends.com.au%2Fcdn%2Fshop%2Ffiles%2Fvintage-radio-lattafa-pride-middle-eastern-perfumes-australia-private-blends.jpg%3Fv%3D1701837861%26width%3D1200&f=1&nofb=1&ipt=c7c7c80a9d3086431b9c2d11c61902b6d0bbe2172085c2f3b879e42345121737",
        imgColor: "#8D6E63",
        accordBars: [
            { name: "Amaderado", color: "#5d4037", width: 95 },
            { name: "Afrutado", color: "#8e44ad", width: 90 },
            { name: "Aromático", color: "#27ae60", width: 75 },
            { name: "Especiado", color: "#d35400", width: 60 },
            { name: "Atalcado", color: "#bdc3c7", width: 50 }
        ]
    },
    { 
        id: 9, 
        name: "Odyssey Aqua", 
        house: "Armaf",
        category: "Árabes",
        description: "Frescura oceánica y limpia. Una alternativa vibrante con un toque dulce y acuático muy versátil.",
        notes: "Notas: Pomelo, Artemisia, Notas Marinas, Lavanda, Pachulí.",
        price5: 25, 
        price10: 35, 
        imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.tws5EKLuZ4xp9bcMbqiIRwHaHa%3Fcb%3Ducfimg2%26pid%3DApi%26ucfimg%3D1&f=1&ipt=c9e796325dee47129c2161b3a20024db09aab4532565684aa5d6a784e6330078",
        imgColor: "#00acc1",
        accordBars: [
            { name: "Acuático", color: "#00bcd4", width: 100 },
            { name: "Cítrico", color: "#f1c40f", width: 85 },
            { name: "Aromático", color: "#2ecc71", width: 80 },
            { name: "Fresco", color: "#3498db", width: 75 },
            { name: "Amaderado", color: "#795548", width: 50 }
        ]
    },
    { 
        id: 10, 
        name: "Odyssey Spectra", 
        house: "Armaf",
        category: "Árabes",
        description: "Un aroma moderno y cautivador. Fusión de especias y maderas con un aire de sofisticación urbana.",
        notes: "Notas: Bergamota, Manzana, Jengibre, Salvia, Haba Tonka.",
        price5: 35, 
        price10: 45, 
        imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fperfumescardales.com.ar%2Fwp-content%2Fuploads%2F2024%2F12%2Fspectra-1.jpg&f=1&nofb=1&ipt=606e7dc2d8b36fd5e9963fc66f9727d02b4eaf149313c542995ffca19ada431f",
        imgColor: "#455a64",
        accordBars: [
            { name: "Aromático", color: "#27ae60", width: 100 },
            { name: "Especiado", color: "#e67e22", width: 85 },
            { name: "Amaderado", color: "#5d4037", width: 75 },
            { name: "Dulce", color: "#e91e63", width: 60 },
            { name: "Cítrico", color: "#f1c40f", width: 50 }
        ]
    },
    { 
        id: 11, 
        name: "Club de Nuit Urban Elixir", 
        house: "Armaf",
        category: "Árabes",
        description: "La mezcla perfecta entre lo limpio y lo seductor. Inspirado en los grandes éxitos de la perfumería actual.",
        notes: "Notas: Pimienta Rosa, Bergamota, Lavanda, Elemi, Vetiver.",
        price5: 45, 
        price10: 65, 
        imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fperfumepalace.pk%2Fwp-content%2Fuploads%2Farmaf-club-de-nuit-urban-man-elixir-eau-de-parfum_CQkAPN.webp&f=1&nofb=1&ipt=03674796cb99047c241e98b729481b8369eebac844ac833917855955ad701156",
        imgColor: "#212121",
        accordBars: [
            { name: "Fresco Esp.", color: "#2ecc71", width: 100 },
            { name: "Cítrico", color: "#f1c40f", width: 90 },
            { name: "Amaderado", color: "#795548", width: 85 },
            { name: "Ámbar", color: "#d35400", width: 70 },
            { name: "Aromático", color: "#9b59b6", width: 65 }
        ]
    },
    { 
        id: 12, 
        name: "Asad", 
        house: "Lattafa",
        category: "Árabes",
        description: "El rey del hype. Un aroma denso, especiado y oscuro que proyecta una personalidad imponente.",
        notes: "Notas: Pimienta Negra, Piña, Tabaco, Vainilla, Ámbar.",
        price5: 30, 
        price10: 45, 
        imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.myperfumeshop.co.nz%2Fcdn%2Fshop%2Ffiles%2FLattafa_Asad_EDP_-_Google_Search_-_il_fullxfull.5007811642_jcx1.jpg%3Fv%3D1702038815%26width%3D2048&f=1&nofb=1&ipt=9c66fedeca30bc53bdb72deb3a278c7b4604769dced5d0c4dbb1bd6e2afbdcc5",
        imgColor: "#1a1a1a",
        accordBars: [
            { name: "Especiado", color: "#8e44ad", width: 100 },
            { name: "Ámbar", color: "#d35400", width: 95 },
            { name: "Vainilla", color: "#f39c12", width: 85 },
            { name: "Amaderado", color: "#5d4037", width: 70 },
            { name: "Tabaco", color: "#34495e", width: 60 }
        ]
    }
];

window.products = products;