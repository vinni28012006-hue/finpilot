import { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";

function Invoices() {

  const [invoices, setInvoices] = useState([]);

  useEffect(() => {

    fetchInvoices();

  }, []);

  const fetchInvoices = async () => {

    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/invoices"
      );

      setInvoices(data);

    } catch (error) {

      console.log(error);
    }
  };

  const downloadPDF = (invoice) => {

    const doc = new jsPDF();

    doc.setFontSize(22);

    doc.text("FinPilot Invoice", 20, 20);

    doc.setFontSize(14);

    doc.text(
      `Customer Name: ${invoice.customerName}`,
      20,
      50
    );

    doc.text(
      `Amount: ₹ ${invoice.amount}`,
      20,
      70
    );

    doc.text(
      `Status: ${invoice.status}`,
      20,
      90
    );

    doc.save("invoice.pdf");
  };

  return (

    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Invoices
      </h1>

      <div className="grid gap-5">

        {
          invoices.map((invoice) => (

            <div
              key={invoice._id}
              className="bg-slate-900 p-5 rounded-2xl flex justify-between items-center"
            >

              <div>

                <h2 className="text-2xl font-bold">
                  {invoice.customerName}
                </h2>

                <p className="text-gray-400 mt-2">
                  {invoice.status}
                </p>

              </div>

              <div className="text-right">

                <div className="text-3xl font-bold text-green-400">

                  ₹ {invoice.amount}

                </div>

                <button
                  onClick={() => downloadPDF(invoice)}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white mt-3"
                >

                  Download PDF

                </button>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default Invoices;