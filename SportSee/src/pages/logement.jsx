import {UseParams} from 'react-router-dom';

export default function logement() {
    const{id} = UseParams();
  return (
    <div>Nous sommes dans le logement {id} </div>
  )
}
