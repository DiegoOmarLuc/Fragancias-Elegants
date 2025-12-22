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
    price3: 18,
    price5: 25, 
    price10: 45, 
    pricefull: 180, 
    soldOut: true,
    imgUrl: "https://arabianauras.com/cdn/shop/files/vintage-radio-lattafa-eau-de-parfum-amaderado-notas-aromatico-unisex-100ml-arabian-auras.png?v=1757530458&width=1445",
    imgColor: "#8D6E63",
    accordBars: [
        { name: "Amaderado", color: "#5d4037", width: 95 },
        { name: "Afrutado", color: "#8e44ad", width: 90 },
        { name: "Aromático", color: "#27ae60", width: 75 },
        { name: "Especiado", color: "#d35400", width: 60 },
        { name: "Atalcado", color: "#bdc3c7", width: 50 }
    ]
}
];

window.products = products;
