import React, { useState } from 'react';
import { MOCK_ISSUES } from '../mockData';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
    const [filter, setFilter] = useState('All');
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/admin/issue/${id}`);
    };

    const displayedIssues = filter === 'All' ? MOCK_ISSUES : MOCK_ISSUES.filter(i => i.status === filter);

    return (
        <div className="card">
            <div className="card-header" style={{ marginBottom: '1.5rem' }}>
                <h2>Department Admin Dashboard</h2>
                <div>
                    <label className="form-label" style={{ display: 'inline', marginRight: '0.5rem' }}>Filter Status:</label>
                    <select className="form-control" style={{ display: 'inline', width: 'auto' }} value={filter} onChange={e => setFilter(e.target.value)}>
                        <option value="All">All Statuses</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ background: '#f8f9fa', borderBottom: '2px solid var(--color-border)' }}>
                            <th style={{ padding: '0.75rem' }}>ID</th>
                            <th style={{ padding: '0.75rem' }}>Category</th>
                            <th style={{ padding: '0.75rem' }}>Priority</th>
                            <th style={{ padding: '0.75rem' }}>Status</th>
                            <th style={{ padding: '0.75rem' }}>Assigned To</th>
                            <th style={{ padding: '0.75rem' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedIssues.map((issue) => (
                            <tr key={issue.id} style={{ borderBottom: '1px solid var(--color-border)', cursor: 'pointer' }} onClick={() => handleRowClick(issue.id)}>
                                <td style={{ padding: '0.75rem' }}>{issue.id}</td>
                                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{issue.category}</td>
                                <td style={{ padding: '0.75rem' }}><span className={`badge badge-${issue.priority.toLowerCase()}`}>{issue.priority}</span></td>
                                <td style={{ padding: '0.75rem' }}>{issue.status}</td>
                                <td style={{ padding: '0.75rem' }}>{issue.assignedTo || 'Unassigned'}</td>
                                <td style={{ padding: '0.75rem' }}>
                                    <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}>View Detail →</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {displayedIssues.length === 0 && <p style={{ padding: '1rem', textAlign: 'center' }}>No issues found.</p>}
            </div>
        </div>
    );
}

export default AdminDashboard;
