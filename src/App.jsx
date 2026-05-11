import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import Expenses from "./pages/Expenses";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import EditExpense from "./pages/EditExpense";
import AddInvoice from "./pages/AddInvoice";
import Invoices from "./pages/Invoices";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
       <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
       <Route
  path="/add-expense"
  element={
    <ProtectedRoute>
      <AddExpense />
    </ProtectedRoute>
  }
/>
       <Route
  path="/expenses"
  element={
    <ProtectedRoute>
      <Expenses />
    </ProtectedRoute>
  }
/>
<Route
  path="/edit-expense/:id"
  element={
    <ProtectedRoute>
      <EditExpense />
    </ProtectedRoute>
  }
/>
<Route
  path="/add-invoice"
  element={
    <ProtectedRoute>
      <AddInvoice />
    </ProtectedRoute>
  }
/>

<Route
  path="/invoices"
  element={
    <ProtectedRoute>
      <Invoices />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;