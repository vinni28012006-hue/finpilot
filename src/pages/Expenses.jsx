import { useEffect, useState } from "react";
import axios from "axios";
import ExpenseCard from "../components/ExpenseCard";

function Expenses() {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {

    fetchExpenses();

  }, []);

  const fetchExpenses = async () => {

    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/expenses"
      );

      setExpenses(data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h1>Expenses</h1>

      {
        expenses.map((expense) => (

          <ExpenseCard
            key={expense._id}
            expense={expense}
          />
        ))
      }

    </div>
  );
}

export default Expenses;