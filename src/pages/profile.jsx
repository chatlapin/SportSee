import { useParams } from 'react-router-dom'
import Barchart from '../composants/bar'
import Activity from '../composants/tinyLine'

export default function Profile() {
  const { id } = useParams()
  return (
    <div>Nous sommes dans le profile {id}
      <Barchart currentId={id} />
      <Activity currentId={id} />
      <exemple />
    </div>
  )

}


