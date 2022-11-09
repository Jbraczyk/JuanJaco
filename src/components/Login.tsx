export const Login = () => {
  return (
    <form id="login-form" className="flex column">
      <h2>Me connecter</h2>
      <input type="text" name="username" placeholder="Nom d'utilisateur" />
      <input type="password" name="password" placeholder="Mot de passe" />
      <button type="submit">Me connecter</button>
    </form>
  )
}