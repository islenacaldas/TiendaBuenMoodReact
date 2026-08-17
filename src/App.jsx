
import "./assets/estilos/estilos.css"
import './App.css'
import ProductoCard from './componentes/productoCard'

const productos = [
  {
    id: 1,
    imagen: "/imagenes/img1.png",
    titulo: "Falda deportiva",
    descripcion: "Falda deportiva cómoda y versátil, ideal para entrenar y disfrutar de tus actividades favoritas con total libertad de movimiento.",
    precio: 89900
  },
  {
    id: 2,
    imagen: "/imagenes/img2.png",
    titulo: "Guantes para ejercicio",
    descripcion: "Guantes deportivos diseñados para brindar comodidad y protección durante tus rutinas de entrenamiento.",
    precio: 59900
  },
  {
    id: 3,
    imagen: "/imagenes/img3.png",
    titulo: "Leggings deportivos",
    descripcion: "Leggings deportivos de ajuste cómodo y flexible, perfectos para entrenamientos y actividades del día.",
    precio: 79900
  },
  {
    id: 4,
    imagen: "/imagenes/img4.png",
    titulo: "Camiseta deportiva",
    descripcion: "Camiseta ligera y fresca, ideal para hacer ejercicio, entrenar o disfrutar de un look deportivo casual.",
    precio: 59900
  },
  {
    id: 5,
    imagen: "/imagenes/img5.png",
    titulo: "Short deportivo",
    descripcion: "Short cómodo y práctico que permite libertad de movimiento durante tus entrenamientos y actividades deportivas.",
    precio: 69900
  },
   {
    id: 6,
    imagen: "/imagenes/img6.png",
    titulo: "Mancuernas",
    descripcion: "Mancuernas de polietilano, pensadas exclusivamente para ti",
    precio: 90000
  }
];


function App(){
  return <div className='contenedor-productos'>
    <h1>Buen mood tienda</h1>
   {
      productos.map (
        producto=>(<ProductoCard
        key ={producto.id}
        imagen={producto.imagen}
        titulo={producto.titulo}
        descripcion= {producto.descripcion}
        precio={producto.precio}
        
        />)
        
      )
    } 
  
  </div>
}

export default App

