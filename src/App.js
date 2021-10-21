import './App.scss';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: 1, title: "Car insurance", date: new Date(2021, 8, 16), amount: 450 },
    { id: 2, title: "Toilet paper", date: new Date(2021, 8, 12), amount: 200 },
    { id: 3, title: "New House", date: new Date(2021, 7, 16), amount: 2500 },
    { id: 4, title: "New Car", date: new Date(2021, 8, 15), amount: 8500 },
    { id: 5, title: "Other", date: new Date(2021, 8, 19), amount: 2650 },
  ];

  const handleExpenseNewData = (expenseData) => {
    console.log("App js call");
    console.log(expenseData);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mt-4">
            <h4>Main index</h4>
            <div className="mt-4">
              <NewExpense onNewExpenseDataSave={handleExpenseNewData} />
              <Expenses items={expenses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
