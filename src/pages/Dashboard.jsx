import { useState } from "react"
import { Layout } from "../components/Layout"

const Dashboard = () => {

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: crypto.randomUUID(),
      name: name,
      price: price,
      description: description
    }

    console.log(newProduct, "Enviando Form... ");
  }

  return (
    <Layout>
      <h1>Panel de Administracion</h1>
      
      <section>
        <h2>Cargar nuevo producto</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre del producto:</label>
            <input type="text" name="nombre" onChange={(e) => setName(e.target.value)}/>
          </div>

          <div>
            <label>Precio:</label>
            <input type="number" name="precio" onChange={(e) => setPrice(e.target.value)}/>
          </div>

          <div>
            <label>Descripcion:</label>
            <textarea type="descripcion" rows="4" onChange={(e) => setDescription(e.target.value)}/>
          </div>

          <button>Guardar producto</button> 
        </form>
      </section>
    </Layout>
  )
}

export { Dashboard }