import { Form } from "react-router-dom";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const AddBudgetForm = () => {
    return (

        <div className="form-wrapper">
            <h2 className="h3">
                Create budget
            </h2>
            <Form method="post"
                className="grid-sm">
                <div className="grid-xs">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input type="text" name="newBudget" id="newBudget"
                        placeholder="e.g., Groceries" required />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">Amount</label>
                    <input type="number" step="0.01" name="newBugetAmount"
                        id="newBudgetAmount" placeholder="e.g., $250" required
                        inputMode="decimal" />

                </div>
                <button type="submit" className="btn btn--dark">
                    <span>Create Budget</span>
                    <CurrencyDollarIcon width={20}></CurrencyDollarIcon>
                </button>
            </Form>
        </div>
    )
        ;
}

export default AddBudgetForm;