import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadForm from './components/UploadForm';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import ConfirmationPage from './components/ConfirmationPage';
import ErrorPage from './components/ErrorPage';
import ViewStudents from './components/ViewStudents';  // Import the new component
import AddMenuItem from './components/AddMenuItem';
import ViewMenu from './components/ViewMenu';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/upload" element={<UploadForm />} />
          <Route path="/view-students" element={<ViewStudents />} />  {/* New Route */}
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/add-menu-item" element={<AddMenuItem />} />
          <Route path="/view-menu" element={<ViewMenu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
