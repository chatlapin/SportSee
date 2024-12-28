const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: "Karl",
      lastName: "Dovineau",
      age: 31,
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: "Cecilia",
      lastName: "Ratorez",
      age: 34,
    },
    score: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120,
    },
  },
];

const USER_ACTIVITY = [
  {
    userId: 12,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 80,
        calories: 240,
      },
      {
        day: "2020-07-02",
        kilogram: 80,
        calories: 220,
      },
      {
        day: "2020-07-03",
        kilogram: 81,
        calories: 280,
      },
      {
        day: "2020-07-04",
        kilogram: 81,
        calories: 290,
      },
      {
        day: "2020-07-05",
        kilogram: 80,
        calories: 160,
      },
      {
        day: "2020-07-06",
        kilogram: 78,
        calories: 162,
      },
      {
        day: "2020-07-07",
        kilogram: 76,
        calories: 390,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 70,
        calories: 240,
      },
      {
        day: "2020-07-02",
        kilogram: 69,
        calories: 220,
      },
      {
        day: "2020-07-03",
        kilogram: 70,
        calories: 280,
      },
      {
        day: "2020-07-04",
        kilogram: 70,
        calories: 500,
      },
      {
        day: "2020-07-05",
        kilogram: 69,
        calories: 160,
      },
      {
        day: "2020-07-06",
        kilogram: 69,
        calories: 162,
      },
      {
        day: "2020-07-07",
        kilogram: 69,
        calories: 390,
      },
    ],
  },
];

const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 23,
      },
      {
        day: 3,
        sessionLength: 45,
      },
      {
        day: 4,
        sessionLength: 50,
      },
      {
        day: 5,
        sessionLength: 0,
      },
      {
        day: 6,
        sessionLength: 0,
      },
      {
        day: 7,
        sessionLength: 60,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 40,
      },
      {
        day: 3,
        sessionLength: 50,
      },
      {
        day: 4,
        sessionLength: 30,
      },
      {
        day: 5,
        sessionLength: 30,
      },
      {
        day: 6,
        sessionLength: 50,
      },
      {
        day: 7,
        sessionLength: 50,
      },
    ],
  },
];

const USER_PERFORMANCE = [
  {
    userId: 12,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 80,
        kind: 1,
      },
      {
        value: 120,
        kind: 2,
      },
      {
        value: 140,
        kind: 3,
      },
      {
        value: 50,
        kind: 4,
      },
      {
        value: 200,
        kind: 5,
      },
      {
        value: 90,
        kind: 6,
      },
    ],
  },
  {
    userId: 18,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 200,
        kind: 1,
      },
      {
        value: 240,
        kind: 2,
      },
      {
        value: 80,
        kind: 3,
      },
      {
        value: 80,
        kind: 4,
      },
      {
        value: 220,
        kind: 5,
      },
      {
        value: 110,
        kind: 6,
      },
    ],
  },
];

export {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
};

/**
 * 
 * Une API (Interface de Programmation d'Applications) est un ensemble de règles et de spécifications qui permet à différentes applications de communiquer entre elles
 * 
 * Comment récupérer des données auprès d'une API ?

Identifier l'API: Vous devez connaître l'URL de l'API et les paramètres qu'elle accepte (méthode HTTP, en-têtes, corps de la requête).

Faire une requête: Vous envoyez une requête à l'API, généralement en utilisant une méthode comme fetch() en JavaScript.

Analyser la réponse: L'API renvoie une réponse, souvent au format JSON. Vous parsez cette réponse pour extraire les données qui vous intéressent.

Pourquoi récupérer des données auprès d'une API ?

Données dynamiques: Les données ne sont pas figées dans votre code, elles sont mises à jour en temps réel par le serveur.

Centralisation des données: Toutes les données sont stockées et gérées dans un seul endroit, facilitant la maintenance.

Réutilisation: Les mêmes données peuvent être utilisées par plusieurs applications.

Flexibilité: Vous pouvez facilement modifier les données sans toucher à votre code frontal.

Utiliser les données: Vous utilisez les données récupérées pour mettre à jour votre interface utilisateur ou effectuer d'autres actions.
 * 
 * Structure des Données
 *
 * Notre fichier mockdata.json contient 4 constantes principales :
 *
 * USER_MAIN_DATA : Stocke les informations principales de l'utilisateur,
 * telles que son nom, son âge, son score quotidien et ses données clés
 * (calories, protéines, etc.).
 *
 * USER_ACTIVITY : Contient l'historique d'activité de l'utilisateur,
 * incluant les données quotidiennes sur le poids et les calories brûlées.
 *
 * USER_AVERAGE_SESSIONS : Stocke la durée moyenne des sessions d'entraînement
 * de l'utilisateur par jour.
 *
 * USER_PERFORMANCE : Fournit des données sur la performance de l'utilisateur
 * dans différents domaines tels que le cardio, l'énergie, l'endurance, etc.
 *
 * Chaque constante est un tableau d'objets.
 * Chaque objet représente les données d'un utilisateur spécifique,
 * identifié par son userId.
 */
