import { useState, useEffect } from "react";
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
  USER_MAIN_DATA,
} from "@/data/mockData";

const API_BASE_URL = "http://localhost:3000/user/";

/**
 Résumé du code
Le code fourni définit un hook personnalisé useFetch en React. Ce hook est conçu pour :

Récupérer des données d'un serveur: Il effectue une requête HTTP à une API spécifiée pour obtenir des données utilisateur.
Gérer les erreurs: En cas d'échec de la requête, il redirige vers des données simulées (mock data).
Mettre à jour l'état: Il utilise les hooks useState et useEffect pour gérer l'état du composant et déclencher la récupération des données.
 
Analyse approfondie du code useFetch.jsx et du cycle de vie d'une application React avec données asynchrones
Le code useFetch.jsx définit un hook personnalisé en React qui permet de récupérer des données d'une API de manière asynchrone. Il gère également la gestion des erreurs et fournit des données simulées en cas d'échec.
*/

/**
 Fonctionnement détaillé
1.Définition du hook useFetch:
Prend en entrée l'ID de l'utilisateur et le type de données à récupérer.

Utilise useState pour gérer l'état du composant :
data: Stocke les données récupérées ou les données simulées.
isLoading: Indique si la récupération des données est en cours.

Utilise useEffect pour effectuer la requête à chaque fois que userId ou type change.

2. Fonction fetchData:
Effectue la requête HTTP à l'API.
Gère les erreurs à l'aide d'un try...catch.
En cas d'erreur, utilise getMockData pour récupérer des données simulées.
Met à jour l'état isLoading en fonction de l'état de la requête.

3. Fonction getMockData:
Fournit des données simulées en fonction du type de données demandé.
Sert de secours en cas d'échec de la requête API.

*/

const useFetch = (userId, type = "") => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_BASE_URL}${userId}/${type}`);

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const responseData = await response.json();

        if (responseData.error) {
          throw new Error(responseData.error);
        }
        setData(responseData);
      } catch (err) {
        console.warn(
          `Failed to fetch from API: ${err.message}. Using mock data instead.`
        );
        setData(getMockData(userId, type));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId, type]);

  return { data, isLoading };
};

/**
Réutilisabilité:

Abstraction de la logique: Le hook useFetch encapsule toute la logique liée à la récupération des données : la requête à l'API, la gestion des erreurs, la mise à jour de l'état, etc. Cette logique est ainsi centralisée et réutilisable dans différents composants de votre application.

Paramétrage: En passant simplement l'userId et le type en argument, vous pouvez adapter le hook à différentes situations sans avoir à réécrire le code de récupération. Par exemple :

* Dans un composant affichant les activités d'un utilisateur
const { data, isLoading } = useFetch(userId, 'activity');

* Dans un autre composant affichant les performances d'un utilisateur
const { data, isLoading } = useFetch(userId, 'performance');
 */

/**
 * Retrieves mock data when API call fails
 * @param {string} id - The user ID
 * @param {string} type - The type of data to retrieve ('', 'activity', 'average-sessions', 'performance')
 * @returns {Object} The corresponding mock data for the specified type and user
 */
function getMockData(id, type) {
  // Return the corresponding mock data based on the type

  switch (type) {
    case "activity":
      return {
        data: USER_ACTIVITY.find((user) => user.userId == id),
      };
    case "average-sessions":
      return {
        data: USER_AVERAGE_SESSIONS.find((user) => user.userId == id),
      };
    case "performance":
      return {
        data: USER_PERFORMANCE.find((user) => user.userId == id),
      };
    default:
      return {
        data: USER_MAIN_DATA.find((user) => user.id == id),
      };
  }
}

export default useFetch;

/**
 * Les promesses et l'asynchronisme
fetch() renvoie une promesse: L'appel à fetch() retourne une promesse qui représente le résultat éventuel de la requête.

then() et catch(): Ces méthodes sont utilisées pour gérer la résolution ou le rejet de la promesse.

async/await: Cette syntaxe permet d'écrire du code asynchrone de manière plus synchrone, en attendant la résolution de la promesse.

Asynchronisme: Les opérations réseau sont asynchrones. Les promesses permettent de gérer cette asynchronie.
*/

/**
 * Le cycle de vie et les concepts clés
useState et useEffect:

useState est utilisé pour gérer l'état du composant : data pour stocker les données récupérées et isLoading pour indiquer si la requête est en cours.
useEffect déclenche la récupération des données à chaque fois que userId ou type change. Cela garantit que les données sont toujours à jour.
Récupération des données:

La fonction fetchData effectue la requête HTTP à l'API.
Elle utilise async/await pour gérer l'asynchronisme de la requête.
En cas d'erreur, elle utilise getMockData pour retourner des données simulées.
Gestion des erreurs:

Le try...catch permet de capturer les erreurs potentielles lors de la requête.
En cas d'erreur, un message est affiché dans la console et les données simulées sont utilisées.
Données simulées:

getMockData fournit des données factices pour le développement et le débogage.

 */

/**
 * Analyse approfondie du code useFetch.jsx et du cycle de vie d'une application React avec données asynchrones
Compréhension globale
Le code useFetch.jsx définit un hook personnalisé en React qui permet de récupérer des données d'une API de manière asynchrone. Il gère également la gestion des erreurs et fournit des données simulées en cas d'échec.

Le cycle de vie et les concepts clés
useState et useEffect:

useState est utilisé pour gérer l'état du composant : data pour stocker les données récupérées et isLoading pour indiquer si la requête est en cours.
useEffect déclenche la récupération des données à chaque fois que userId ou type change. Cela garantit que les données sont toujours à jour.
Récupération des données:

La fonction fetchData effectue la requête HTTP à l'API.
Elle utilise async/await pour gérer l'asynchronisme de la requête.
En cas d'erreur, elle utilise getMockData pour retourner des données simulées.
Gestion des erreurs:

Le try...catch permet de capturer les erreurs potentielles lors de la requête.
En cas d'erreur, un message est affiché dans la console et les données simulées sont utilisées.
Données simulées:

getMockData fournit des données factices pour le développement et le débogage.
Le cycle de vie d'une application React avec données asynchrones
Rendu initial:

Le composant utilisant useFetch est rendu pour la première fois.
useEffect est déclenché et la requête est lancée.
Pendant que la requête est en cours, isLoading est true et le composant peut afficher un indicateur de chargement.
Réception des données:

La requête est terminée avec succès.
Les données sont mises à jour dans l'état data.
Le composant est rerendu avec les nouvelles données.
Erreur lors de la requête:

Une erreur se produit lors de la requête.
Les données simulées sont utilisées.
Le composant est rerendu avec les données simulées.
Changement de paramètres:

userId ou type change.
useEffect est à nouveau déclenché et une nouvelle requête est lancée.
 */

/**
 * Avantages du hook useFetch
Réutilisabilité: Le hook peut être utilisé dans différents composants pour récupérer des données de manière standardisée.
Gestion des erreurs: Le hook gère les erreurs de manière robuste et fournit une solution de secours.
Séparation des préoccupations: La logique de récupération des données est encapsulée dans le hook, ce qui améliore la lisibilité du code.
Asynchronisme: Le hook gère efficacement les opérations asynchrones grâce aux promesses et à async/await.
 */

/**
 * Points clés à retenir
Les hooks personnalisés sont un moyen puissant d'extraire la logique réutilisable dans les composants React.
useState et useEffect sont essentiels pour gérer l'état et les effets de bord dans les composants fonctionnels.
Les promesses sont le mécanisme standard pour gérer l'asynchronisme en JavaScript.
async/await rend le code asynchrone plus lisible
 */
