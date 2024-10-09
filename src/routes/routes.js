const routes = [
    {
      to: "/",
      text: "Inicio",
    },
    {
      to: "/blog",
      text: "Blog"
    },
    {
      to: "/login",
      text: "Iniciar sesión",
      publicOnly: true
    },
    {
      to: "/profile",
      text: "Perfil",
      loggedOnly: true
    }
]
export { routes }