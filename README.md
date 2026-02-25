Recipe Finder

Overview

Recipe Finder is a React-based web application that enables users to search for recipes based on ingredients. The application integrates with TheMealDB API to fetch real-time data and provides filtering options for Vegetarian and Non-Vegetarian recipes. Users can also view detailed cooking instructions and manage a list of favorite recipes.

The project demonstrates API integration, state management, routing, conditional rendering, and performance optimization in a modern frontend application.

⸻

Features

Ingredient-Based Search

Users can enter an ingredient (e.g., chicken, egg, onion) and retrieve recipes containing that ingredient. The search triggers API calls dynamically using React hooks.

Vegetarian / Non-Vegetarian Filtering

Recipes can be filtered client-side based on category without requiring additional API calls.

Recipe Detail Page

Each recipe has a dedicated detail page displaying:
	•	Recipe image
	•	Ingredient list with measurements
	•	Cooking instructions
	•	YouTube tutorial (if available)

Favorites Management

Users can mark recipes as favorites. Favorites are maintained in application state and can be viewed separately.

Responsive Design

The UI is built using Tailwind CSS and adapts to different screen sizes for desktop and mobile devices.

⸻

Technologies Used
	•	React.js
	•	React Router DOM
	•	Axios
	•	Tailwind CSS
	•	JavaScript (ES6+)
	•	TheMealDB API

  -----
  The application uses the following endpoints from TheMealDB:

  Search by ingredient:https://www.themealdb.com/api/json/v1/1/filter.php?i=INGREDIENT
  Fetch full recipe details:https://www.themealdb.com/api/json/v1/1/lookup.php?i=ID

  To support category filtering, the application first fetches meals by ingredient and then retrieves full details for a limited number of results to optimize performance.

Installation
	1.	Clone the repository:git clone https://github.com/your-username/recipe-finder.git
  	2.	Navigate to the project directory:cd recipe-finder
   3. Install dependencies:npm install
   	4.	Run the development server:npm run dev

    Future Improvements
	•	Persist favorites using localStorage
	•	Pagination or load-more functionality
	•	Debounced search input
	•	Dark mode support
	•	Recipe ratings and reviews
	•	User authentication

⸻

Learning Outcomes

This project demonstrates:
	•	REST API consumption using Axios
	•	React Hooks (useState, useEffect)
	•	Client-side routing with React Router
	•	Dynamic filtering and conditional rendering
	•	Component-based architecture
	•	Performance optimization strategies
