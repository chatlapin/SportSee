import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useFetch from '@/hooks/useFetch';
import PropTypes from 'prop-types';

/**
 * Formats the activity data for the chart
 * @param {Object} data - Raw activity data from the API
 * @returns {Array<Object>} Formatted data with day numbers and activity values
 */
const formatActivityData = (data) => {
  return data.data.sessions.map((session, index) => ({
    name: (index + 1).toString(),
    kg: session.kilogram,
    cal: session.calories,
  }));
};

/**
 * ActivityChart component that displays user's daily activity
 * @param {Object} props - Component properties
 * @param {number} props.userId - The ID of the user whose activity to display
 * @returns {JSX.Element} A bar chart showing daily weight and calories burned
 */
const ActivityChart = ({ userId }) => {
  const { data, isLoading } = useFetch(userId, 'activity');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#FBFBFB] p-6 rounded-lg h-full">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-[15px] font-medium text-[#20253A]">Activité quotidienne</h3>
        <div className="flex gap-8">
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-[#282D30]"></div>
            <span className="text-[14px] text-[#74798C] font-medium">Poids (kg)</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-[#E60000]"></div>
            <span className="text-[14px] text-[#74798C] font-medium">Calories brûlées (kCal)</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={formatActivityData(data)} barGap={8} barCategoryGap="35%">
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DEDEDE" />
          <XAxis
            dataKey="name"
            tickLine={false}
            tick={{ fill: '#9B9EAC', fontSize: 14 }}
            dy={15}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#9B9EAC', fontSize: 14 }}
            dx={15}
          />
          <YAxis yAxisId="left" orientation="left" hide={true} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#E60000',
              border: 'none',
              color: 'white',
              padding: '4px 8px',
            }}
            itemStyle={{ color: 'white', fontSize: 12, padding: 0 }}
            labelStyle={{ display: 'none' }}
          />
          <Bar
            yAxisId="right"
            dataKey="kg"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="left"
            dataKey="cal"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

ActivityChart.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default ActivityChart;

/**
 le but de ces fichiers est de créer des visualisations de données pour une application de suivi d'activité physique. Chaque fichier est responsable d'un type de graphique spécifique :

Activity.jsx: Affiche un graphique en barres représentant l'activité quotidienne de l'utilisateur (poids et calories brûlées).
Performance.jsx: Affiche un graphique radar montrant les performances de l'utilisateur dans différents domaines.
Session.jsx: Affiche un graphique en ligne représentant la durée moyenne des sessions d'entraînement par jour de la semaine.
Score.jsx: Affiche un graphique circulaire (camembert) représentant le score global de l'utilisateur.
Comment ça marche ?

Récupération des données:
Chaque composant utilise le hook personnalisé useFetch pour récupérer les données de l'API en fonction de l'utilisateur et du type de données (activité, performance, score).
Les données brutes sont ensuite formatées pour correspondre aux exigences de chaque type de graphique.
 
Création des graphiques:

Recharts: La bibliothèque Recharts est utilisée pour créer les graphiques. Elle fournit des composants pour différents types de graphiques (barres, radar, camembert).
Configuration des axes, des données et des styles: Chaque composant configure les axes, les données et les styles des graphiques en utilisant les propriétés de Recharts. Par exemple, l'axe des x du graphique d'activité représente les jours, tandis que les axes du graphique radar représentent les différents domaines de performance.
ResponsiveContainer: Ce composant permet aux graphiques de s'adapter à différentes tailles d'écran.

Affichage des graphiques:

Les graphiques sont rendus à l'intérieur des composants en utilisant JSX.
Des éléments supplémentaires comme des titres, des légendes et des styles CSS sont ajoutés pour améliorer l'apparence des graphiques.

Points clés:

Réutilisabilité: Le hook useFetch est réutilisé dans les trois composants, ce qui permet de centraliser la logique de récupération des données.
Flexibilité: Recharts offre une grande flexibilité pour créer différents types de graphiques et personnaliser leur apparence.
Lisibilité: Le code est bien structuré et facile à comprendre grâce à l'utilisation de composants fonctionnels et de props.


*/