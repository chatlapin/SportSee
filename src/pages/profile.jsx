import { useParams } from 'react-router-dom';
import Barchart from '../composants/bar';
import Activity from '../composants/tinyLine';
import Performance from '../composants/Performance';
import Exemple from '../composants/score';
import { USER_MAIN_DATA } from '../../public/data/data.js';

export default function Profile() {
  const { id } = useParams();

  // Find the user data based on the id
  const userData = USER_MAIN_DATA.find((user) => user.id === parseInt(id));

  // If user data is not found, display an error message or redirect
  if (!userData) {
    return <p>User not found.</p>;
  }

  const { firstName } = userData.userInfos;

  return (
    <div>
      <p>Bonjour {firstName}</p>
      <p>Félicitation ! Vous avez explosé vos objectifs hier </p>
      <div className='Barchart' style={{ height: '800px', width: '100%' }}>
        <Barchart currentId={id} />
      </div>
      <div className='GridContainer' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        <div className='Activity' style={{ height: '300px', width: '100%' }}>
          <Activity currentId={id} />
        </div>
        <div className='RadarChartComponent' style={{ height: '300px', width: '100px' }}>
          <Performance currentId={id} />
        </div>
        <div className='GridItem'>
          <Exemple currentId={id} />
        </div>
      </div>
    </div>
  );
}