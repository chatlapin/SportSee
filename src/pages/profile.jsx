import { useParams } from 'react-router-dom'
import Barchart from '../composants/bar'
import { LineChart } from '../composants/line'

export default function Profile() {
  const { id } = useParams()
  return (
    <div>Nous sommes dans le profile {id}
      <Barchart />
      <LineChart />
    </div>
  )

}


