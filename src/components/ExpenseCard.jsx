import axios from "axios";
import { Link } from "react-router-dom";

function ExpenseCard({ expense }) {

  const deleteHandler = async () => {

    try {

      await axios.delete(
        `http://localhost:5000/api/expenses/${expense._id}`
      );

      window.location.reload();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="bg-slate-900 p-5 rounded-2xl shadow-md flex justify-between items-center mb-5">

      <div>

        <h2 className="text-2xl font-bold text-white">
          {expense.title}
        </h2>

        <p className="text-gray-400 mt-1">
          {expense.category}
        </p>

        <p className="text-green-400 text-xl mt-2">
          ₹ {expense.amount}
        </p>

      </div>

      <div className="flex gap-3">

        <Link
          to={`/edit-expense/${expense._id}`}
        >

          <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg text-white">

            Edit

          </button>

        </Link>

        <button
          onClick={deleteHandler}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white"
        >

          Delete

        </button>

      </div>

    </div>
  );
}

export default ExpenseCard;