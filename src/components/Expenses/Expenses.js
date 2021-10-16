import ExpenseItem from "./ExpenseItem";


function Expenses(props) {
    const items = props.items;
    return (
        <div>
            <ExpenseItem
                id={items[0].id}
                title={items[0].title}
                date={items[0].date}
                amount={items[0].amount} />
            <ExpenseItem
                id={items[1].id}
                title={items[1].title}
                date={items[1].date}
                amount={items[1].amount} />
        </div>
    );
}

export default Expenses;