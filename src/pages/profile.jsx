import { useParams } from 'react-router-dom'
import Barchart from '../composants/bar'

export default function Profile() {
  const { id } = useParams()
  return (
    <div>Nous sommes dans le profile {id}
      <Barchart />
    </div>
  )

}


