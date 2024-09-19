import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar'; // Import the AdminNavbar component
import './ViewStudents.css'; // Import the CSS for the ViewStudents

const ViewStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/students");
        console.log("Student data:", response.data);  // Log the response data
        setStudents(response.data);  // Set the response data in state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching students:", error);  // Log error if there's an issue
        setError("Error fetching students data");
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <p className="loading-message">Loading students...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div>
      <AdminNavbar /> {/* Include the AdminNavbar component */}
      <div className="view-students-container">
        <h2>List of Students</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 && students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>{student.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewStudents;
