// import { useState } from "react";

import Input from "../../UI/Input"
import classes from "./MealItemForm.module.css";
import { type } from "@testing-library/user-event/dist/type";


const MealItemForm = () => {
    // const [amount, setAmount] = useState([1]);

    // const amountHandler = (event) => {
    //     event.target.value(setAmount);
    // }

    // const formSubmitHandler = (event) => {
    //     event.preventDefault();
    //     const obj = {
    //         amount:amount
    //     }
    //     console.log(obj);
    // }
    return (
        <>
            <form>
                <Input label="Amount" input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    defaultValue: "1"
                }} />
                <button type="submit">+ADd</button>
            </form>
        </>
    )
}

export default MealItemForm;