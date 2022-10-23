import { UnitType } from '../types'
import './styles/UnitCard.css'

type UnitProps = { unit: UnitType }

export const UnitCard = ({ unit }: UnitProps) => {
  return (
    <div className="unit">
        <p>{unit.name}</p>
        <img src={unit.imgLink}></img>
    </div>
  )
}
