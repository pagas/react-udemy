import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import Meal from './MealItem/MealItem';
import { DUMMY_MEALS } from './dummy-meals';

const AvailableMeals = () => {
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map(meal => (
                        <Meal key={meal.id} {...meal} />
                    ))}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;