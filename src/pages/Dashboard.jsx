import Sidebar from "../components/sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import ExpenseChart from "../components/ExpenseChart";

function Dashboard() {

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

  const totalAmount = expenses.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  const latestExpense =
    expenses.length > 0
      ? expenses[expenses.length - 1].title
      : "No Expense";

  return (

    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-5xl font-bold">
          Dashboard
        </h1>

        {/* STAT CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">

            <h2 className="text-gray-400 text-lg">
              Total Expenses
            </h2>

            <p className="text-4xl font-bold text-white mt-3">
              ₹ {totalAmount}
            </p>

          </div>

          <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">

            <h2 className="text-gray-400 text-lg">
              Expense Count
            </h2>

            <p className="text-4xl font-bold text-white mt-3">
              {expenses.length}
            </p>

          </div>

          <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">

            <h2 className="text-gray-400 text-lg">
              Latest Expense
            </h2>

            <p className="text-2xl font-bold text-white mt-3">
              {latestExpense}
            </p>

          </div>

        </div>

        {/* RECENT EXPENSES */}

        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-6">
            Recent Expenses
          </h2>

          <div className="grid gap-5">

            {
              expenses
                .slice()
                .reverse()
                .map((expense) => (

                  <div
                    key={expense._id}
                    className="bg-slate-900 p-5 rounded-2xl shadow-md flex justify-between items-center"
                  >

                    <div>

                      <h3 className="text-2xl font-semibold">
                        {expense.title}
                      </h3>

                      <p className="text-gray-400 mt-1">
                        {expense.category}
                      </p>

                    </div>

                    <div className="text-2xl font-bold text-green-400">

                      ₹ {expense.amount}

                    </div>

                  </div>
                ))
            }

          </div>

        </div>

        {/* CHART */}

        <div className="mt-14 bg-slate-900 p-8 rounded-2xl shadow-lg">

          <h2 className="text-3xl font-bold mb-8">
            Expense Analytics
          </h2>

          <ExpenseChart expenses={expenses} />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;