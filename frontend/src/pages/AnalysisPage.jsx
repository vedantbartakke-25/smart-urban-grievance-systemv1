import React from 'react';

function AnalysisPage() {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Department Analytics</h2>
            </div>

            <div className="dashboard-grid">
                {/* Placeholder for simple charts using CSS blocks */}

                <div className="card" style={{ backgroundColor: '#f8f9fa' }}>
                    <h3>Issues by Category</h3>
                    <div style={{ display: 'flex', height: '150px', alignItems: 'flex-end', gap: '10px', marginTop: '1rem' }}>
                        <div style={{ flex: 1, backgroundColor: 'var(--color-primary)', height: '80%', position: 'relative' }}><span style={{ position: 'absolute', bottom: '-20px', left: 0, right: 0, textAlign: 'center', fontSize: '0.8rem' }}>Potholes</span></div>
                        <div style={{ flex: 1, backgroundColor: 'var(--color-primary-dark)', height: '40%', position: 'relative' }}><span style={{ position: 'absolute', bottom: '-20px', left: 0, right: 0, textAlign: 'center', fontSize: '0.8rem' }}>Water</span></div>
                        <div style={{ flex: 1, backgroundColor: 'var(--color-text-muted)', height: '20%', position: 'relative' }}><span style={{ position: 'absolute', bottom: '-20px', left: 0, right: 0, textAlign: 'center', fontSize: '0.8rem' }}>Stray</span></div>
                    </div>
                </div>

                <div className="card" style={{ backgroundColor: '#f8f9fa' }}>
                    <h3>SLA Compliance</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px' }}>
                        <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'conic-gradient(var(--color-low) 0% 85%, var(--color-emergency) 85% 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#f8f9fa', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>85%</div>
                        </div>
                    </div>
                    <p style={{ textAlign: 'center', margin: '0.5rem 0 0 0', fontSize: '0.85rem' }}>85% issues resolved on time</p>
                </div>

                <div className="card" style={{ backgroundColor: '#f8f9fa' }}>
                    <h3>Avg Resolution Time</h3>
                    <h1 style={{ textAlign: 'center', fontSize: '3rem', margin: '1rem 0', color: 'var(--color-primary)' }}>14 <span style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>hrs</span></h1>
                </div>
            </div>
        </div>
    );
}

export default AnalysisPage;
