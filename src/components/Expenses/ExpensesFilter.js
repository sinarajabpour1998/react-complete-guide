import {Form} from "react-bootstrap";

function ExpensesFilter(props) {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className="row">
            <div className="col-md-4">
                <Form.Group className="mb-3" controlId="example">
                    <Form.Label>Filter</Form.Label>
                    <Form.Select aria-label="Default select example" value={props.selected} onChange={dropdownChangeHandler}>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                        <option value='2020'>2020</option>
                        <option value='2019'>2019</option>
                    </Form.Select>
                </Form.Group>
            </div>
        </div>
    );
}

export default ExpensesFilter;