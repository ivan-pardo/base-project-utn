import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header style={{background: "gray"}}>
      <img src="https://cdn.pixabay.com/photo/2016/03/22/09/08/online-store-1272390_1280.png" width={400} alt="logo-tienda" />
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <button>Cerrar Sesion</button>
        </ul>
      </nav>
    </header>
  )
}

export { Header }