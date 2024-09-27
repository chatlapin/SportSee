import { useParams } from 'react-router-dom'
import Barchart from '../composants/bar'
import Activity from '../composants/tinyLine'

export default function Profile() {
  const { id } = useParams()
  return (
    <div>
      <p>Nous sommes dans le profile {id}</p>
      <div className='Barchart' style={{ height: '800px', width: '100%' }}>
        <Barchart currentId={id} />
      </div>
      <div className='GridContainer' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        <div className='Activity' style={{ height: '300px', width: '100%' }}>
          <Activity currentId={id} />
        </div>
        <div className='GridItem'>
          GridItem 1
        </div>
        <div className='GridItem'>
          GridItem 2
        </div>
      </div>
    </div>
  )
}