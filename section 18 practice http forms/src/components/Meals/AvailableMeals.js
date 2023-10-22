import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import useHttp from '../../hooks/use-http';
import { useEffect, useState, useCallback } from 'react'


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const { isLoading, error, sendRequest } = useHttp({
    url: process.env.REACT_APP_SERVER_URL + 'x'
  });

  const fetchMeal = useCallback(async () => {
    const data = await sendRequest();

    if (!data) {
      return;
    }
    const loadedMeal = [];

    for (const [id, meal] of Object.entries(data)) {
      loadedMeal.push({ id: id, ...meal })
    }
    setMeals(loadedMeal)
  }, [sendRequest])


  useEffect(() => {
    fetchMeal();
  }, [fetchMeal])


  let content = <p>No meals found.</p>;

  if (isLoading) {
    content = <p>Loading...</p>
  }

  if (error) {
    <p>{error}</p>
  }

  if (meals.length > 0)
    content = (<ul>
      {meals.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </ul>);

  return (
    <section className={classes.meals}>
      <Card>
        {content}
      </Card>
    </section>
  );
};

export default AvailableMeals;
