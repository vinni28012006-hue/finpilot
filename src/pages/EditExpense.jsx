import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditExpense() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {

    fetchExpense();

  }, []);

  const fetchExpense = async () => {

    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/expenses"
      );

      const singleExpense = data.find(
        (item) => item._id === id
      );

      if (singleExpense) {

        setTitle(singleExpense.title);
        setAmount(singleExpense.amount);
        setCategory(singleExpense.category);
      }

    } catch (error) {

      console.log(error);
    }
  };

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:5000/api/expenses/${id}`,
        {
          title,
          amount,
          category,
        }
      );

      navigate("/expenses");

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="min-h-screen bg-slate-950 flex justify-center items-center">

      <form
        onSubmit={submitHandler}
        className="bg-slate-900 p-10 rounded-2xl w-[400px]"
      >

        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Edit Expense
        </h1>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 text-white mb-5"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 text-white mb-5"
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 text-white mb-5"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-white"
        >
          Update Expense
        </button>

      </form>

    </div>
  );
}

export default EditExpense;