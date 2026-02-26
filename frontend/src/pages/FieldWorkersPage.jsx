import React from 'react';
import { MOCK_WORKERS } from '../mockData';

function FieldWorkersPage() {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Department Field Workers</h2>
            </div>

            <div className="dashboard-grid">
                {MOCK_WORKERS.map(worker => (
                    <div key={worker.id} className="card" style={{ borderLeft: worker.status === 'Free' ? '4px solid #2ecc71' : '4px solid #f39c12' }}>
                        <h3 style={{ margin: '0 0 0.5rem 0' }}>{worker.name}</h3>
                        <p style={{ margin: 0, display: 'flex', justifyContent: 'space-between' }}>
                            <span><strong>Status:</strong> {worker.status}</span>
                            <span><strong>Tasks:</strong> <span className="badge badge-medium">{worker.tasks} assigned</span></span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FieldWorkersPage;
