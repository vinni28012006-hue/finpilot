import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div
      style={{
        width: "200px",
        height: "100vh",
        background: "□#0f172a",
        padding: "20px",
      }}
    >

      <h2>Menu</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "30px",
        }}
      >

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/expenses">
          Expenses
        </Link>

        <Link to="/add-expense">
          Add Expense
        </Link>

        <Link to="/invoices">
          Invoices
        </Link>
<Link to="/add-invoice">
  Add Invoice
</Link>
      </div>

    </div>
  );
}

export default Sidebar;