import { useParams } from 'react-router-dom'

export default function Logement() {
    const { id } = useParams()
  return (
    <div>Nous sommes dans le logement {id} </div>
  )
}
