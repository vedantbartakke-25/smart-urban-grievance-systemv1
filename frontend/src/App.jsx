import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation, Navigate } from 'react-router-dom';

// Import Pages
import ReportIssuePage from './pages/ReportIssuePage';
import CitizenHistoryPage from './pages/CitizenHistoryPage';
import AIHelpPage from './pages/AIHelpPage';

import AdminDashboard from './pages/AdminDashboard';
import IssueDetailPage from './pages/IssueDetailPage';
import FieldWorkersPage from './pages/FieldWorkersPage';
import AdminMapPage from './pages/AdminMapPage';
import AnalysisPage from './pages/AnalysisPage';
import AdminHistoryPage from './pages/AdminHistoryPage';
import ProfilePage from './pages/ProfilePage';

import WorkerTasksPage from './pages/WorkerTasksPage';
import TaskUpdatePage from './pages/TaskUpdatePage';

function App() {
    const [role, setRole] = useState('Citizen');
    const navigate = useNavigate();
    const location = useLocation();

    // Redirect root to logical start
    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/citizen/report', { replace: true });
        }
    }, [location, navigate]);

    const handleRoleChange = (e) => {
        const newRole = e.target.value;
        setRole(newRole);
        // Auto-navigate to the logical starting page for each role
        if (newRole === 'Citizen') navigate('/citizen/report');
        if (newRole === 'DeptAdmin') navigate('/admin/dashboard');
        if (newRole === 'FieldWorker') navigate('/worker/tasks');
        if (newRole === 'Commissioner') navigate('/admin/dashboard');
    };

    return (
        <div className="app-container">
            <header className="header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <h1 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', margin: 0 }}>UrbanSathi</h1>
                    <span className="badge badge-medium">Prototype</span>
                </div>

                {/* Role Switcher Demo Control */}
                <div className="role-switcher">
                    <label className="form-label" style={{ marginBottom: 0, fontSize: '0.85rem' }}>Viewing As:</label>
                    <select className="form-control" value={role} onChange={handleRoleChange} style={{ padding: '0.25rem 0.5rem' }}>
                        <option value="Citizen">Citizen</option>
                        <option value="DeptAdmin">Department Admin</option>
                        <option value="FieldWorker">Field Worker</option>
                        <option value="Commissioner">Commissioner</option>
                    </select>
                </div>
            </header>

            <main className="main-content">
                {/* Navigation specific to role */}
                <nav className="nav-links" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                    {role === 'Citizen' && (
                        <>
                            <Link to="/citizen/report" className={`nav-link ${location.pathname.includes('report') ? 'active' : ''}`}>Report Issue</Link>
                            <Link to="/citizen/history" className={`nav-link ${location.pathname.includes('history') ? 'active' : ''}`}>My History</Link>
                            <Link to="/citizen/profile" className={`nav-link ${location.pathname.includes('profile') ? 'active' : ''}`}>Profile</Link>
                            <Link to="/citizen/ai-help" className={`nav-link ${location.pathname.includes('ai-help') ? 'active' : ''}`}>AI Help</Link>
                        </>
                    )}
                    {(role === 'DeptAdmin' || role === 'Commissioner') && (
                        <>
                            <Link to="/admin/dashboard" className={`nav-link ${location.pathname.includes('dashboard') ? 'active' : ''}`}>Dashboard</Link>
                            <Link to="/admin/map" className={`nav-link ${location.pathname.includes('map') ? 'active' : ''}`}>Live Map</Link>
                            <Link to="/admin/workers" className={`nav-link ${location.pathname.includes('workers') ? 'active' : ''}`}>Field Workers</Link>
                            <Link to="/admin/analysis" className={`nav-link ${location.pathname.includes('analysis') ? 'active' : ''}`}>Analytics</Link>
                            <Link to="/admin/history" className={`nav-link ${location.pathname.includes('history') ? 'active' : ''}`}>History</Link>
                        </>
                    )}
                    {role === 'FieldWorker' && (
                        <>
                            <Link to="/worker/tasks" className={`nav-link ${location.pathname.includes('tasks') ? 'active' : ''}`}>My Tasks</Link>
                        </>
                    )}
                </nav>

                {/* Routes */}
                <Routes>
                    {/* Default/Catch-all Redirect */}
                    <Route path="/" element={<Navigate to="/citizen/report" replace />} />

                    {/* Citizen Routes */}
                    <Route path="/citizen/report" element={<ReportIssuePage />} />
                    <Route path="/citizen/history" element={<CitizenHistoryPage />} />
                    <Route path="/citizen/profile" element={<ProfilePage />} />
                    <Route path="/citizen/ai-help" element={<AIHelpPage />} />

                    {/* Admin Routes */}
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/map" element={<AdminMapPage />} />
                    <Route path="/admin/workers" element={<FieldWorkersPage />} />
                    <Route path="/admin/analysis" element={<AnalysisPage />} />
                    <Route path="/admin/history" element={<AdminHistoryPage />} />
                    <Route path="/admin/issue/:id" element={<IssueDetailPage />} />

                    {/* Worker Routes */}
                    <Route path="/worker/tasks" element={<WorkerTasksPage />} />
                    <Route path="/worker/task/:id" element={<TaskUpdatePage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
