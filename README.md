# Installation et lancement du back-end :
Aller dans le dossier Back

Installer toutes les dépendances pour le back-end:

npm install ou yarn
Lancer le back-end (port 3000 par défaut):
npm run dev ou yarn run dev

# Installation et lancement du front-end :
Aller dans le dossier

Installer toutes les dépendances pour le front-end:

npm install ou yarn
Lancer le front-end:
npm start ou yarn start
Le front-end sera lancé à l'URL: (http://localhost:5173/)

URL disponibles dans ce projet:

1. http://localhost:5173/
2. http://localhost:5173/profile/12
3. http://localhost:5173/profile/18

dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router": "^7.1.0",
    "recharts": "^2.15.0"

    "devDependencies": {
    ...
    "prop-types": "^15.8.1",
    "tailwindcss": "^3.4.17",
    "vite": "^6.0.3"
  }
}

1. Version Desktop seulement
2. React : Séparation logique du code dans des composants réutilisables.
3. Utilisation de D3 ou de Recharts pour générer les graphiques.
4. Données : Utilisation d’une API en faisant des calls HTTP sur le backend NodeJS fourni en utilisant Fetch ou Axios.
Les calls doivent être réalisé en dehors des composants React.
un mock des données doit être réalisé pour commencer.
le schéma des données étant légèrement différent selon les utilisateurs, une uniformisation des données provenant de l'API est nécessaire pour formater les correctement.

Figma: https://www.figma.com/design/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=1-2&node-type=frame&t=bVLroY0ou0vCuTuy-0
Back-end: https://github.com/OpenClassrooms-Student-Center/SportSee
Kanban: https://openclassrooms.notion.site/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e


