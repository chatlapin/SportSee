import { useParams } from 'react-router-dom';
import Barchart from '../composants/bar';
import Activity from '../composants/tinyLine';
import Performance from '../composants/Performance';
import Score from '../composants/score';
import useFetch from '@/services/useFetch';

export default function Profile() {
  const { id } = useParams();

  // Find the user data based on the id
  //const userData = USER_MAIN_DATA.find((user) => user.id === parseInt(id));
  const url = `http://localhost:3000/user/${id}/`; // replace with your API endpoint
  const { data: userData, loading, error } = useFetch(url);
  // If user data is not found, display an error message or redirect
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (!userData) {
    return <p>User not found.</p>;
  }
  if (error) {
    return <h1>error</h1>
  }
  const { firstName } = userData.data.userInfos;

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
          <Score currentId={id} />
        </div>
      </div>
    </div>
  );
}