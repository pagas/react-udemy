import { Fragment } from 'react';
import styles from './Meals.module.css';

import MealItem from './MealItem/MealItem';
import useHttp from '../../hooks/use-http';
import { useEffect, useState, useCallback } from 'react'


const Meals = () => {
  const [meals, setMeals] = useState([]);

  const { isLoading, error, sendRequest } = useHttp({
    url: 'http://localhost:3000/meals'
  });

  const fetchMeals = useCallback(async () => {
    const mealsData = await sendRequest();

    if (!mealsData) {
      return;
    }

    const formatedMealsData = mealsData.map(meal => ({ ...meal, price: +meal.price }));

    setMeals(formatedMealsData)
  }, [sendRequest])


  useEffect(() => {
    fetchMeals();
  }, [fetchMeals])


  let content = <p>No meals found.</p>;

  if (isLoading) {
    content = <p>Loading...</p>
  }

  if (error) {
    <p>{error}</p>
  }

  if (meals.length > 0)
    content = meals.map((meal) => (
      <MealItem
        key={meal.id}
        meal={meal}
      />
    ))


  return (
    <ul id={styles.meals}>
      {content}
    </ul>
  );
};

export default Meals;