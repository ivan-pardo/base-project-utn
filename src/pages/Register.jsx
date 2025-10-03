import { Layout } from "../components/Layout"

const Register = () => {
  return (
    <Layout>
      <h1>Registrate</h1>
    
      <section>
        <h2>Hola, Bienvenido</h2>
        <form action="">
          <div>
            <label>Username:</label>
            <input type="text" />
          </div>

        <div>
            <label>Correo Electronico:</label>
            <input type="email" />
        </div>

          <div>
            <label>Contraseña:</label>
            <input type="password" />
          </div>
          <button>Ingresar</button>
        </form>
      </section>
    </Layout>
  )
}

export { Register }