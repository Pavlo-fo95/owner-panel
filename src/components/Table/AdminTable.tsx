import React, { useEffect, useState } from "react";
import "./AdminTable.css";

interface Admin {
  id: number;
  username: string;
  email: string;
  itemsAddedCount: number;
  isActive: boolean;
}

const AdminTable: React.FC = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await fetch("https://ownercard20241120233806.azurewebsites.net/api/owner/admins");
        if (!response.ok) {
          throw new Error(`Failed to fetch admins: ${response.statusText}`);
        }
        const data: Admin[] = await response.json();
        console.log("Fetched admins:", data); // Лог данных
        setAdmins(data);
      } catch (error) {
        console.error("Error fetching admins:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchAdmins();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Items Added Count</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td>{admin.id}</td>
              <td>{admin.username}</td>
              <td>{admin.email}</td>
              <td>{admin.itemsAddedCount}</td>
              <td>{admin.isActive ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;