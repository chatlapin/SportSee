import proteinIcon from '@/assets/protein-icon.svg';
import carbsIcon from '@/assets/carbs-icon.svg';
import fatIcon from '@/assets/fat-icon.svg';
import caloriesIcon from '@/assets/calories-icon.svg';
import PropTypes from 'prop-types';

/**
 * @typedef {Object} KeyDataCardProps
 * @property {'Calories' | 'Glucides' | 'Lipides' | 'Proteines'} type - The type of data to display
 * @property {number} value - The numerical value to display
 * @property {string} unit - The unit of measurement for the value
 */

/**
 * KeyDataCard component displays a card with an icon and value for different health metrics
 * @param {KeyDataCardProps} props - Component props
 * @returns {JSX.Element} A card displaying health metric data
 */
const KeyDataCard = ({ type, value, unit }) => {

  /**
   * Gets the appropriate icon based on the data type
   * @returns {JSX.Element} The icon element for the given type
   */
  const getIcon = () => {
    switch (type) {
      case 'Calories':
        return <img src={caloriesIcon} alt="Calories" />;
      case 'Glucides':
        return <img src={carbsIcon} alt="Carbohydrates" />;
      case 'Lipides':
        return <img src={fatIcon} alt="Fat" />;
      case 'Proteines':
        return <img src={proteinIcon} alt="Protein" />;
      default:
        return null;
    }
  };


  return (
    <div className="flex items-center gap-6 bg-[#FBFBFB] p-8 rounded-lg">
      <div className={`flex justify-center items-center w-16 h-16 rounded-lg ${type === 'Calories' ? 'bg-red-100' :
        type === 'Proteines' ? 'bg-blue-100' :
          type === 'Glucides' ? 'bg-yellow-100' :
            'bg-pink-100'
        }`}>
        {getIcon()}
      </div>
      <div>
        <p className="text-xl font-bold mb-2">
          {value}
          {unit}
        </p>
        <p className="text-sm text-gray-500 font-medium">{type}</p>
      </div>
    </div>
  );
};

KeyDataCard.propTypes = {
  type: PropTypes.oneOf(['Calories', 'Glucides', 'Lipides', 'Proteines']).isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default KeyDataCard;

/**
 * En React, les props (abréviation de "properties") sont un mécanisme fondamental pour passer des données entre les composants.
* Réutilisabilité: Le composant peut être réutilisé pour afficher diverses données de santé simplement en modifiant les props type, value et unit.
Séparation des préoccupations: La fonction getIcon() encapsule la logique de sélection de l'icône, améliorant ainsi l'organisation et la lisibilité du code.
Typage des données: L'utilisation de PropTypes améliore la fiabilité du code et aide à prévenir les comportements inattendus.
Style conditionnel: Le composant applique dynamiquement des couleurs d'arrière-plan en fonction du type de données, améliorant ainsi la clarté visuelle
*/

/**
 Avantages clés de l'utilisation des props:
Réutilisabilité des composants: Les props permettent de créer des composants réutilisables qui peuvent être utilisés avec différentes entrées de données.
Contrôle du flux de données: Elles contribuent à maintenir un flux de données clair et prévisible dans votre application React.
Isolation des composants: Les props encouragent la création de composants indépendants et réutilisables.
 */

