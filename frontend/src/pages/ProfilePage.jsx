import React, { useState } from 'react';

function ProfilePage() {
    const [lang, setLang] = useState('English');

    const handleLogout = () => {
        alert("Logged out successfully! Support returning to login in full backend version.");
    };

    return (
        <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div className="card-header">
                <h2>My Profile 👤</h2>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
                <p style={{ margin: '0 0 0.5rem 0' }}><strong>Name:</strong> Rahul Sharma</p>
                <p style={{ margin: '0 0 0.5rem 0' }}><strong>Email:</strong> rahul.sharma@example.com</p>
                <p style={{ margin: 0 }}><strong>Ward/Area:</strong> South Amravati, Ward 4</p>
            </div>

            <div className="form-group">
                <label className="form-label">Preferred Language 🌐</label>
                <select className="form-control" value={lang} onChange={e => setLang(e.target.value)}>
                    <option value="English">English</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Hindi">Hindi</option>
                </select>
            </div>

            <button className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem', color: 'var(--color-emergency)', borderColor: 'var(--color-emergency)', border: '1px solid' }} onClick={handleLogout}>
                Sign Out
            </button>
        </div>
    );
}

export default ProfilePage;
