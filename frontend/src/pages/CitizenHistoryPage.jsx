import React, { useState } from 'react';
import { MOCK_ISSUES } from '../mockData';

function CitizenHistoryPage() {
    const [activeTab, setActiveTab] = useState('Pending');

    const tabs = ['Pending', 'In Progress', 'Completed'];

    // Filter mock issues by status
    const filteredIssues = MOCK_ISSUES.filter(issue => issue.status === activeTab);

    return (
        <div>
            <h2 style={{ marginBottom: '1.5rem' }}>My Reported Issues</h2>

            {/* Custom Tab UI using Standard CSS */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--color-border)' }}>
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: '0.75rem 1.5rem',
                            background: 'none',
                            border: 'none',
                            borderBottom: activeTab === tab ? '3px solid var(--color-primary)' : '3px solid transparent',
                            fontWeight: activeTab === tab ? 'bold' : 'normal',
                            color: activeTab === tab ? 'var(--color-primary)' : 'var(--color-text-muted)',
                            cursor: 'pointer',
                            marginBottom: '-2px'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="dashboard-grid">
                {filteredIssues.length === 0 ? (
                    <p style={{ color: 'var(--color-text-muted)' }}>No {activeTab.toLowerCase()} issues found.</p>
                ) : (
                    filteredIssues.map(issue => (
                        <div key={issue.id} className="card">
                            <div className="card-header">
                                <strong>{issue.category}</strong>
                                <span className={`badge badge-${issue.priority.toLowerCase()}`}>{issue.priority}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <img src={issue.photoUrl} alt={issue.category} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                                <div>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Reported: {new Date(issue.reportedAt).toLocaleDateString()}</p>
                                    <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>SLA Deadline: <br />{new Date(issue.slaDeadline).toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default CitizenHistoryPage;
