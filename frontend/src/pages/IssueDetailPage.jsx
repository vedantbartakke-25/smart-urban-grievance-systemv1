import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_ISSUES, MOCK_WORKERS } from '../mockData';

function IssueDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    // Simplified lookup for demo purposes
    const issue = MOCK_ISSUES.find(i => i.id === id) || MOCK_ISSUES[0];
    const [assignedWorker, setAssignedWorker] = useState(issue.assignedTo || '');

    const handleAssign = () => {
        alert("Assigned successfully! In a real app this would notify the Field Worker.");
        navigate('/admin/dashboard');
    };

    return (
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <button onClick={() => navigate(-1)} className="btn btn-secondary" style={{ marginBottom: '1rem', padding: '0.5rem 1rem' }}>← Back</button>

            <div className="card-header">
                <h2>Issue {issue.id}</h2>
                <span className={`badge badge-${issue.priority.toLowerCase()}`}>{issue.priority} Priority</span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                {/* Left Col */}
                <div style={{ flex: '1 1 300px' }}>
                    <img src={issue.photoUrl} alt="Complaint" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem', border: '1px solid var(--color-border)' }} />

                    <div className="card" style={{ backgroundColor: '#f8f9fa' }}>
                        <p><strong>Category:</strong> {issue.category}</p>
                        <p><strong>Status:</strong> {issue.status}</p>
                        <p><strong>Reported:</strong> {new Date(issue.reportedAt).toLocaleString()}</p>
                        <p><strong>SLA Deadline:</strong> {new Date(issue.slaDeadline).toLocaleString()}</p>
                        <p><strong>GPS:</strong> {issue.lat}, {issue.lng}</p>
                    </div>
                </div>

                {/* Right Col */}
                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
                        <h3>Assign Field Worker</h3>
                        <div className="form-group" style={{ marginTop: '1rem' }}>
                            <select className="form-control" value={assignedWorker} onChange={e => setAssignedWorker(e.target.value)}>
                                <option value="">-- Select Worker --</option>
                                {MOCK_WORKERS.map(worker => (
                                    <option key={worker.id} value={worker.id}>{worker.name} ({worker.status}, {worker.tasks} Tasks)</option>
                                ))}
                            </select>
                        </div>
                        <button className="btn btn-primary" onClick={handleAssign} disabled={!assignedWorker}>Assign Task</button>
                    </div>

                    <div className="card" style={{ borderLeft: '4px solid var(--color-primary-dark)' }}>
                        <h3>Priority Breakdown (AI)</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                            <li><strong>Severity Score:</strong> 8/10</li>
                            <li><strong>Community Yes Votes:</strong> 12 (High Density)</li>
                            <li><strong>Proximity:</strong> Near Public School (+0.2 Weight)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IssueDetailPage;
