import ExpenseItem from "./ExpenseItem";


function Expenses() {
    const expenses = [
        { id: 1, title: "Car insurance", date: new Date(2021, 8, 16), amount: 450 },
        { id: 1, title: "Toilet paper", date: new Date(2021, 8, 12), amount: 200 },
        { id: 1, title: "New House", date: new Date(2021, 7, 16), amount: 2500 },
        { id: 1, title: "New Car", date: new Date(2021, 8, 15), amount: 8500 },
        { id: 1, title: "Other", date: new Date(2021, 8, 19), amount: 2650 },
    ];

    return (
        <div>
            <ExpenseItem
                title={expenses[0].title}
                date={expenses[0].date}
                amount={expenses[0].amount} />
            <ExpenseItem
                title={expenses[1].title}
                date={expenses[1].date}
                amount={expenses[1].amount} />
        </div>
    );
}

export default Expenses;