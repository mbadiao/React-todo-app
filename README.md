# To-Do App

## Description
Cette application de tâches ("To-Do App") permet aux utilisateurs d'ajouter des tâches, de marquer des tâches comme finies, d'éditer et de supprimer des tâches. L'application utilise React pour l'interface utilisateur et le contexte pour la gestion des états globaux.

## Fonctionnalités
- Ajouter une nouvelle tâche.
- Marquer une tâche comme finie.
- Éditer le contenu d'une tâche.
- Supprimer une tâche.

## Installation

### Prérequis
- Node.js et npm installés sur votre machine.

### Étapes
1. Clonez le dépôt :
    ```bash
    git clone https://github.com/mbadiao/React-todo-app.git
    ```
2. Accédez au répertoire du projet :
    ```bash
    cd React-todo-app
    ```
3. Installez les dépendances :
    ```bash
    npm install
    ```
4. Démarrez l'application :
    ```bash
    npm start
    ```

## Utilisation
1. Ouvrez votre navigateur et accédez à `http://localhost:3000`.
2. Utilisez le champ de saisie pour ajouter une nouvelle tâche et cliquez sur "Add Task".
3. Cliquez sur l'icône des options (trois points) à côté de chaque tâche pour afficher les options suivantes :
    - **Finished** : Marque la tâche comme finie.
    - **Edit** : Permet d'éditer le contenu de la tâche.
    - **Delete** : Supprime la tâche.

## Structure du projet
- `src/`
  - `components/`
    - `TaskForm.js` : Composant pour ajouter une nouvelle tâche.
    - `TaskListItem.js` : Composant pour afficher une tâche individuelle avec ses options.
    - `Option.js` : Composant pour afficher les options (Finished, Edit, Delete) d'une tâche.
  - `contexts/`
    - `TaskContext.js` : Contexte pour gérer les états des tâches.
  - `App.js` : Composant principal de l'application.
