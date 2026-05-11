import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

const logoutHandler = () => {

  localStorage.removeItem("userInfo");

  navigate("/");
};

  return (

    <nav
      style={{
        background: "#1e293b",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >

      <h2>FinPilot</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
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
<button onClick={logoutHandler}>
  Logout
</button>
      </div>
      

    </nav>
  );
}

export default Navbar;