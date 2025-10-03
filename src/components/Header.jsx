const Header = () => {
  return (
    <header style={{background: "gray"}}>
      <img src="https://cdn.pixabay.com/photo/2016/03/22/09/08/online-store-1272390_1280.png" width={400} alt="logo-tienda" />
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <button>Cerrar Sesion</button>
        </ul>
      </nav>
    </header>
  )
}

export { Header }