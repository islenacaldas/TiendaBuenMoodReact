
import './App.css'
import ProductoCard from './componentes/productoCard'

const productos=[
  { id: 1, imagen: "/imagenes/img1.jpg", titulo: "Formación Profesional Integral", descripcion: "De acuerdo con el Estatuto de la formación profesional del SENA, la Formación profesional integral gratuita que imparte el SENA, se orienta al desarrollo de conocimientos técnicos, tecnológicos y de actitudes y de valores para la convivencia social, que le permiten a la persona desempeñarse en una actividad productiva. Esta formación implica el dominio operacional e instrumental de una ocupación determinada, la apropiación de un saber técnico y tecnológico integrado a ella, y la capacidad de adaptación dinámica a los cambios constantes de la productividad." },
 {id: 2, imagen: "/imagenes/img2.jpg", titulo: "Asesoría para la creación de empresas", descripcion: "El SENA es el lugar ideal para emprender en Colombia y dar el salto a mercados internacionales. Mediante asesorías, acompañamiento, formación y financiación, la creación de empresa es una posibilidad real para generar ingresos y empleo a los colombianos. El SENA cuenta con una plataforma virtual del Fondo Emprender." }, 
 { id: 3, imagen: "/imagenes/img3.jpg", titulo: "Investigación Aplicada e Innovación", descripcion: "El SENA, a través de las líneas programáticas del Programa de Investigación, Desarrollo Tecnológico e Innovación, ha buscado contribuir al desarrollo tecnológico del país y a la implantación de procesos innovadores en el sector productivo nacional, mediante el aporte de recursos a proyectos de las unidades productivas." }
]




function App(){
  return <div className='App'>
    <h1>hello bebis</h1>
    <div>
      productos.map(
        item=>(<ProductoCard
        key ={item.id}
        imagen={item.imagen}
        titulo={item.titulo}
        descripcion= {item.descripcion}
        />)
      )
      <ProductoCard/>
    </div>
  </div>
}

export default App
