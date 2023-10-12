import './ExpenseItem.css';


function ExpenseItem() {
    const date = new Date(2021, 2, 28);
    const title = "Car Insurance";
    const price = 252.23;

    return (
        <div className='expense-item'>
            <div>{date.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem
