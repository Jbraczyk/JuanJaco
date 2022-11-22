import { UnitType } from '../types'
import './styles/UnitCard.css'

const callUrl = 'http://localhost:4000/soundCall'

type UnitProps = { unit: UnitType }

export const UnitCard = ({ unit }: UnitProps) => {

  async function handleCall() {
    fetch(callUrl, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ name: unit.slug }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
     }).then(res => console.log(res))

  }

  return (
    <div className="unit" onClick={() => handleCall()}>
        <p>{unit.name}</p>
        <img src={unit.imgLink}></img>
    </div>
  )
}
