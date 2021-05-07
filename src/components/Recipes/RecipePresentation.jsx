import React from 'react';
import MainRecipesItem from './MainRecipesItem';
import { useSelector } from 'react-redux';

function RecipePresentation() {
  const recipes = useSelector((state) => state.recipes.items);

  const frontSideRecipes = recipes.filter((recipe) => {
    return recipe.id === 5 || recipe.id === 20 || recipe.id === 11;
  });

  return (
    <>
      <div className="block-main">
        Рецепты на каждый день: вкусно, быстро и легко
      </div>
      <div>
        {frontSideRecipes.map((recipe) => {
          return <MainRecipesItem recipe={recipe} key={recipe.id} />;
        })}
      </div>
    </>
  );
}

export default RecipePresentation;
