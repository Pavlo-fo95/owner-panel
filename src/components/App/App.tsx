import React from "react";
import AuthForm from "../Table/AuthForm";
import AdminTable from "../Table/AdminTable";
import AdminForm from "../Table/AdminForm";
import WorkloadTable from "../Table/WorkloadTable";
import "./App.css";


function App() {
  return (
    <div className="container">
      <h1>Owner Panel</h1>
      <div className="auth-admin-container">
        <AuthForm />
        <div className="admin-table-container">
          <AdminTable />
        </div>
      </div>
      <AdminForm />
      <WorkloadTable />
    </div>
  );
}

export default App;