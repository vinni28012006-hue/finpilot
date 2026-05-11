import { useState } from "react";
import axios from "axios";

function AddExpense() {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/expenses",
        {
          title,
          amount,
          category,
        }
      );

      alert("Expense Added");

      setTitle("");
      setAmount("");
      setCategory("");

    } catch (error) {
      alert("Failed");
    }
  };

  return (
    <div>

      <h1>Add Expense</h1>

      <form onSubmit={submitHandler}>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Add Expense
        </button>

      </form>

    </div>
  );
}

export default AddExpense;