import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p className="p-6">Loading recipe...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Link
        to="/"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p className="text-gray-700 mb-4">{recipe.summary}</p>

        {recipe.ingredients && (
          <>
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {recipe.instructions && (
          <>
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="mb-2">{step}</li>
              ))}
            </ol>
          </>
        )}
      </div>
    </div>
  );
}

export default RecipeDetail;
