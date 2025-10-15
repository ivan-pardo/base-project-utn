import { useState } from "react"
import { Layout } from "../components/Layout"

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [succes, setSucces] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSucces("");

    if(!username || !email || !password){
      setError("Debes completar todos los campos");
      return;
    }

    const newUser = {
      username: username,
      email: email,
      password: password
    }
    console.log(newUser)
    setSucces("Usuario Registrado con exito");
    setUsername("");
    setEmail("");
    setPassword("");

  }

  return (
    <Layout>
      <h1>Registrate</h1>
    
      <section>
        <h2>Hola, Bienvenido</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} 
            value={username}/>
          </div>

        <div>
            <label>Correo Electronico:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)}
            value={email}/>
        </div>

          <div>
            <label>Contraseña:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)}
            value={password}/>
          </div>
          <button>Ingresar</button>
        </form>
      </section>
      {
        error && <p style={{color:"red"}}>ERROR! Debes completar todos los campos</p>
      }
      {
        succes && <p style={{color: "green"}}>{succes}</p>
      }
    </Layout>
  )
}

export { Register }