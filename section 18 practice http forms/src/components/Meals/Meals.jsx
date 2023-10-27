import { Fragment } from 'react';
import styles from './Meals.module.css';

import MealItem from './MealItem/MealItem';
import useHttp from '../../hooks/use-http';
import { useState } from 'react'

const config = { triggerFirstLoad: true };

const Meals = () => {
  const [meals, setMeals] = useState([]);
  console.log('meals created!')

  const { isLoading, error, data: mealsData } = useHttp('http://localhost:3000/meals', config);

  let content = <p className='center'>No meals found.</p>;

  if (isLoading) {
    content = <p className='center'>Loading...</p>
  }

  if (error) {
    <p>{error}</p>
  }

  if (mealsData && mealsData.length > 0) {
    const formatedMeals = mealsData.map(meal => ({ ...meal, price: +meal.price }));
    content = formatedMeals.map((meal) => (
      <MealItem
        key={meal.id}
        meal={meal}
      />
    ))
  }


  return (
    <ul id={styles.meals}>
      {content}
    </ul>
  );
};

export default Meals;