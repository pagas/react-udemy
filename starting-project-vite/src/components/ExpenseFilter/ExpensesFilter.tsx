import { ChangeEvent } from 'react';
import './ExpensesFilter.css';

interface ExpenseFilterProps {
  selected: string
  onChangeFilter: (year:string) => void
}

const ExpensesFilter = ({onChangeFilter, selected} : ExpenseFilterProps) => {

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(event.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={changeHandler} value={selected}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;