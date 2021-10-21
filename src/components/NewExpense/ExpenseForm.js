import {Form} from "react-bootstrap";
import { Button } from 'react-bootstrap';
import {useState} from "react";

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
    const onTitleChangeEvent = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value }
        });
    }

    const onAmountChangeEvent = (event) => {
       setUserInput((prevState) => {
           return { ...prevState, enteredAmount: event.target.value }
       });
    }

    const onDateChangeEvent = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value }
        });
    }

    return (
      <div>
          <Form>
              <div className="row">
                  <div className="col-md-4">
                      <Form.Group className="mb-3" controlId="title">
                          <Form.Label>Title</Form.Label>
                          <Form.Control type="text" onChange={onTitleChangeEvent} />
                      </Form.Group>
                  </div>
                  <div className="col-md-4">
                      <Form.Group className="mb-3" controlId="amount">
                          <Form.Label>Amount</Form.Label>
                          <Form.Control type="number" min="0.01" step="0.01" onChange={onAmountChangeEvent} />
                      </Form.Group>
                  </div>
                  <div className="col-md-4">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Date</Form.Label>
                          <Form.Control type="date" min="2021-1-1" max="2022-12-28" onChange={onDateChangeEvent} />
                      </Form.Group>
                  </div>
              </div>
              <Button variant="primary" type="submit">
                  Submit
              </Button>
          </Form>
      </div>
    );
}

export default ExpenseForm;