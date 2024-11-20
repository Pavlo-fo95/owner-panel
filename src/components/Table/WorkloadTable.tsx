import React, { useEffect, useState } from "react";
import "./WorkloadTable.css";

interface Workload {
  id: number;
  name: string;
  dateAdded: string;
  dateEdited: string | null;
}

const WorkloadTable: React.FC = () => {
  const [workloads, setWorkloads] = useState<Workload[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWorkloads = async () => {
      try {
        const response = await fetch("https://ownercard20241120233806.azurewebsites.net/api/owner/cards");
        if (!response.ok) {
          throw new Error(`Failed to fetch workloads: ${response.statusText}`);
        }
        const data: Workload[] = await response.json();
        console.log("Fetched workloads:", data); // Лог данных
        setWorkloads(data);
      } catch (error) {
        console.error("Error fetching workloads:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchWorkloads();
  }, []);

  const handleShowClick = (id: number) => {
    console.log(`Show details for Weapon ID: ${id}`);
    // Здесь можно добавить логику перенаправления, например:
    // window.location.href = `/weapon-details/${id}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="workload-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Weapon Name</th>
            <th>Date Added</th>
            <th>Date Edited</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {workloads.map((workload) => (
            <tr key={workload.id}>
              <td>{workload.id}</td>
              <td>{workload.name}</td>
              <td>{workload.dateAdded}</td>
              <td>{workload.dateEdited || "No edits"}</td>
              <td>
                <button
                  className="show-button"
                  onClick={() => handleShowClick(workload.id)}
                >
                  Show
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkloadTable;
