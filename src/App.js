import './App.css';
import Expenses from "./components/Expenses";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mt-4">
            <h4>Main index</h4>
            <div className="mt-4">
              <Expenses />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
