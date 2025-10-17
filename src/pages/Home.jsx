import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";

const Home = () => {

  const [products, setProducts] = useState([]);

  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", {method: "GET"});
    const data = await response.json();
    setProducts(data);
  };  
  
  useEffect(() => {
    fetchingProducts();
  }, []);

  const handleDelete = (id) => {
    console.log("Borrando producto", id)
  }

    return (
      <Layout>
        <section>
          <h1>Bienvenido a Nuestra Tienda</h1>
          <p>
            Descubri una seleccion exclusiva de productos para vos. Calidad,
            confianza y atencion personalizada.
          </p>
        </section>
        <section>
          <h2>¿Por que elegirnos?</h2>
          <ul>
            <li>
              <h3>Envios a todo el pais</h3>
              <p>Recibi tu compra en la puerta de tu casa estes donde estes.</p>
            </li>
            <li>
              <h3>Pagos Seguros</h3>
              <p>Trabajamos con plataformas que garantizan tu seguridad</p>
            </li>
            <li>
              <h3>Atencion personalizada</h3>
              <p>Estamos disponibles para ayudarte en todo momento</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>Nuestros productos</h2>
          <p>Elegi entre nuestras categorias mas populares</p>
          <div>
            <p>Cargando productos...</p>
          </div>
        </section>
        {
          products.map((product) => <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width={150} />
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <div>
              <button>Comprar</button>
              <button onClick={() => handleDelete(product.id)}>Borrar</button>
            </div>
            <hr/>
            <br/>
          </div>)
        }
      </Layout>
    );
};

export { Home }
