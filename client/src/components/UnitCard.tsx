import { UnitType } from '../types'
import './styles/UnitCard.css'

type UnitProps = { unit: UnitType }

export const UnitCard = ({ unit }: UnitProps) => {

  async function handleCall(e) {
    console.log(unit.slug)
  }

  return (
    <div className="unit" onClick={(e) => handleCall(e)}>
        <p>{unit.name}</p>
        <img src={unit.imgLink}></img>
    </div>
  )
}
