import { UnitType } from '../types'
import './styles/UnitCard.css'

type UnitProps = { unit: UnitType }

function UnitCard(props: UnitProps) {
  return (
    <div className="unit">
        <p>{props.unit.name}</p>
        <img src={props.unit.imgLink}></img>
    </div>
  )
}

export default UnitCard
