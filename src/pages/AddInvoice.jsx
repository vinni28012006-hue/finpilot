import { useState } from "react";
import axios from "axios";

function AddInvoice() {

  const [customerName, setCustomerName] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/invoices",
        {
          customerName,
          amount,
        }
      );

      alert("Invoice Added");

      setCustomerName("");
      setAmount("");

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
          Add Invoice
        </h1>

        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 text-white mb-5"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 text-white mb-5"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-white"
        >
          Add Invoice
        </button>

      </form>

    </div>
  );
}

export default AddInvoice;