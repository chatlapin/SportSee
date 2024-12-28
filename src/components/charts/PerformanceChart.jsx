import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import useFetch from '@/hooks/useFetch';

/**
 * Formats the performance data for the radar chart
 * @param {Object} data - Raw performance data from the API
 * @returns {Array<Object>} Formatted data with performance kinds and values
 */
const formatPerformanceData = (data) => {
  return data.data.data.map(item => ({
    subject: data.data.kind[item.kind],
    value: item.value
  }));
};

/**
 * PerformanceChart component that displays user performance metrics in a radar chart
 * @param {Object} props - Component props
 * @param {number} props.userId - The ID of the user to fetch performance data for
 * @returns {JSX.Element} A radar chart showing different performance metrics
 */
const PerformanceChart = ({ userId }) => {
  const { data, isLoading } = useFetch(userId, 'performance');
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#282D30] p-4 rounded-lg h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={formatPerformanceData(data)} cx="50%" cy="50%" outerRadius="65%">
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="white"
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          <Radar
            name="Performance"
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

PerformanceChart.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default PerformanceChart;

/**
 * 
 * Fonctionnement:

Importations:

Chaque fichier importe les composants nécessaires de la bibliothèque Recharts (par exemple, BarChart, RadarChart, LineChart, PieChart).
Il importe également le hook personnalisé useFetch pour récupérer les données de l'API.
Il utilise PropTypes pour vérifier les types des props passées au composant.
Formatage des données:

Une fonction de formatage est définie dans chaque fichier pour préparer les données brutes récupérées de l'API au format attendu par le composant de graphique correspondant.
Par exemple, dans Activity.jsx, les données sont transformées pour inclure le numéro du jour et les valeurs de poids et de calories.
Création des graphiques:

Chaque composant utilise le hook useFetch pour récupérer les données de l'utilisateur auprès de l'API.
Un message de chargement est affiché pendant la récupération des données.
Une fois les données récupérées, le composant crée un graphique à l'aide des composants Recharts :
Activity.jsx: Utilise un BarChart avec deux séries de données (poids et calories).
Performance.jsx: Utilise un RadarChart pour représenter les performances dans différents domaines.
Session.jsx: Utilise un LineChart pour afficher la durée moyenne des sessions par jour de la semaine.
Score.jsx: Utilise un PieChart pour représenter le score global de l'utilisateur sous forme de camembert.
Les composants Recharts permettent de configurer les axes, les données, les couleurs, les styles, etc.
ResponsiveContainer permet aux graphiques de s'adapter à différentes tailles d'écran.
Affichage:

Chaque composant rend le graphique à l'écran à l'aide de JSX.
Des éléments supplémentaires peuvent être ajoutés, tels que des titres, des légendes et des styles CSS pour améliorer la présentation.
Points clés:

Réutilisabilité: Le hook useFetch est réutilisé dans tous les composants, ce qui améliore la maintenabilité du code.
Flexibilité: La bibliothèque Recharts offre une grande flexibilité pour créer différents types de graphiques et les personnaliser.
Lisibilité: L'utilisation de composants fonctionnels et des props contribue à améliorer la lisibilité du code.
*/