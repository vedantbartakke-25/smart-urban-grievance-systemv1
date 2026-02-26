import React from 'react';
import { MOCK_ISSUES } from '../mockData';

function AdminMapPage() {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Live Complaints Heatmap</h2>
            </div>

            <div className="map-container" style={{ position: 'relative', backgroundColor: '#e9ecef', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Mock Map View */}
                <p style={{ position: 'absolute', zIndex: 10, color: 'var(--color-text-muted)' }}>Interactive Map Loading (PostGIS Stub)</p>

                {/* Mock Markers */}
                {MOCK_ISSUES.map((issue, idx) => (
                    <div key={issue.id} style={{
                        position: 'absolute',
                        top: `${20 + (idx * 15)}%`,
                        left: `${30 + (idx * 20)}%`,
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: issue.priority === 'Emergency' ? 'var(--color-emergency)' : issue.priority === 'High' ? 'var(--color-high)' : 'var(--color-low)',
                        border: '2px solid white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        zIndex: 20
                    }} title={issue.category}></div>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: 'var(--color-emergency)' }}></div> Emergency</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: 'var(--color-high)' }}></div> High</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: 'var(--color-medium)' }}></div> Medium</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: 'var(--color-low)' }}></div> Low</span>
            </div>
        </div>
    );
}

export default AdminMapPage;
