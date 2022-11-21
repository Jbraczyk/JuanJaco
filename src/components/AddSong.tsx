import { useForm } from "react-hook-form";

import './styles/Add.css'

export function AddSong() {
  
  const { handleSubmit, register, formState: { errors } } = useForm()
  const onSubmit = async(values) => {
    console.log(values.file[0])
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit) } id="default-form" className="flex column">
      <input type="text" placeholder="Nom du song" {...register("name", { required: "Required" })} />
      { errors.name ? errors.name.message : null }
      <input type="text" placeholder="Lien de l'image" {...register("imgLink", { required: "Required" })} />
      { errors.imgLink ? errors.imgLink.message : null }
      <input type="file" {...register("file", { required: "Required" })} />
      { errors.file ? errors.file.message : null } 
      <button type="submit">Nouveau son</button>
    </form>
  )
}
