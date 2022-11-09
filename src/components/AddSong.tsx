import './styles/Add.css'

const isLoggedIn: boolean = true

export const AddSong = () => {
  return (
    <form id="default-form" className="flex column">
      <input type="text" name="name" placeholder="Nom du son" />
      <input type="text" name="image-link" placeholder="Lien de l'image" />
      <input type="file" name="mp3-file" />
      <button type="submit">Nouveau son</button>
    </form>
  )
}
