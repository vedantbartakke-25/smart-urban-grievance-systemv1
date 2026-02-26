import React from 'react';
import { MOCK_ISSUES } from '../mockData';

function AdminHistoryPage() {
    const completedIssues = MOCK_ISSUES.filter(i => i.status === 'Completed');

    return (
        <div className="card">
            <div className="card-header">
                <h2>Completed Issues History</h2>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ background: '#f8f9fa', borderBottom: '2px solid var(--color-border)' }}>
                            <th style={{ padding: '0.75rem' }}>ID</th>
                            <th style={{ padding: '0.75rem' }}>Category</th>
                            <th style={{ padding: '0.75rem' }}>Resolution Photo</th>
                            <th style={{ padding: '0.75rem' }}>Resolved By</th>
                            <th style={{ padding: '0.75rem' }}>SLA Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {completedIssues.map((issue) => {
                            // Mock logic for SLA status based on SLA deadline vs currently (not perfectly accurate for demo, just visual)
                            const isOnTime = true; // Hardcoded mock
                            return (
                                <tr key={issue.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <td style={{ padding: '0.75rem' }}>{issue.id}</td>
                                    <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{issue.category}</td>
                                    <td style={{ padding: '0.75rem' }}>
                                        <img src={issue.resolutionPhotoUrl || "https://via.placeholder.com/50"} alt="Resolved" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
                                    </td>
                                    <td style={{ padding: '0.75rem' }}>{issue.assignedTo}</td>
                                    <td style={{ padding: '0.75rem' }}>
                                        <span className={`badge badge-${isOnTime ? 'low' : 'emergency'}`}>{isOnTime ? 'On Time' : 'Delayed'}</span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {completedIssues.length === 0 && <p style={{ padding: '1rem', textAlign: 'center' }}>No completed issues found in history.</p>}
            </div>
        </div>
    );
}

export default AdminHistoryPage;
