import React, { useEffect, useState } from "react";

function App() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/employees")
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);

  return (
    <div>
      <h1>Employee Management System</h1>

      {employees.map(emp => (
        <div key={emp.id}>
          {emp.name} - {emp.role}
        </div>
      ))}
    </div>
  );
}

export default App;
