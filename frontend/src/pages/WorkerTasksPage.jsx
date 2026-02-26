import React from 'react';
import { MOCK_ISSUES } from '../mockData';
import { useNavigate } from 'react-router-dom';

function WorkerTasksPage() {
    const navigate = useNavigate();
    // Assume worker "w1" is logged in
    const assignedTasks = MOCK_ISSUES.filter(issue => issue.assignedTo === 'w1');

    return (
        <div className="card">
            <div className="card-header">
                <h2>My Assigned Tasks</h2>
            </div>

            <div className="dashboard-grid">
                {assignedTasks.map(task => (
                    <div key={task.id} className="card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
                        <div className="card-header" style={{ paddingBottom: 0, borderBottom: 'none' }}>
                            <h3 style={{ margin: 0 }}>{task.category}</h3>
                            <span className={`badge badge-${task.priority.toLowerCase()}`}>{task.priority}</span>
                        </div>
                        <p style={{ margin: '0.5rem 0', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Est Distance: 1.2 km away</p>
                        <p style={{ margin: '0.5rem 0' }}><strong>SLA:</strong> {new Date(task.slaDeadline).toLocaleString()}</p>
                        <button className="btn btn-secondary" style={{ width: '100%', marginTop: '0.5rem' }} onClick={() => navigate(`/worker/task/${task.id}`)}>
                            Update Status
                        </button>
                    </div>
                ))}

                {assignedTasks.length === 0 && (
                    <p>You have no pending tasks today. Great job!</p>
                )}
            </div>
        </div>
    );
}

export default WorkerTasksPage;
