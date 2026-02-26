import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ReportIssuePage() {
    const [photo, setPhoto] = useState(null);
    const [useAI, setUseAI] = useState(false);
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handlePhotoUpload = (e) => {
        // Mock photo upload
        setPhoto("uploaded-photo.jpg");
        // Simulate AI inference
        setTimeout(() => {
            setUseAI(true);
            setCategory('Pothole');
        }, 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Issue Reported Successfully!");
        navigate('/citizen/history');
    };

    return (
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="card-header">
                <h2>Report an Issue</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Upload Photo (Required) 📸</label>
                    {!photo ? (
                        <div className="file-upload-container" onClick={() => document.getElementById('photo-upload').click()}>
                            <p>Click to capture or upload photo</p>
                            <input type="file" id="photo-upload" style={{ display: 'none' }} onChange={handlePhotoUpload} accept="image/*" />
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', backgroundColor: '#e9ecef', padding: '1rem', borderRadius: '4px' }}>
                            <p>✅ Photo Selected</p>
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label className="form-label">Location (Auto-detected) 📍</label>
                    <input type="text" className="form-control" readOnly value="Lat: 20.9320, Lng: 77.7523" style={{ backgroundColor: '#f8f9fa' }} />
                </div>

                {useAI && (
                    <div className="card" style={{ backgroundColor: '#e8f4fd', borderColor: 'var(--color-primary)' }}>
                        <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-primary-dark)' }}>🤖 AI Suggestion</p>
                        <p style={{ margin: '0.5rem 0' }}>We detected this issue as: <strong>{category}</strong> (94% confidence)</p>
                    </div>
                )}

                <div className="form-group">
                    <label className="form-label">Issue Category</label>
                    <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="">Select Category...</option>
                        <option value="Pothole">Pothole</option>
                        <option value="Water Leakage">Water Leakage</option>
                        <option value="Street Light">Street Light</option>
                        <option value="Stray Animals">Stray Animals</option>
                        <option value="Garbage">Garbage</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">Description (Optional)</label>
                    <textarea className="form-control" rows="3" placeholder="Add more details..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <div className="form-group">
                    <label className="form-label">Voice Note (Optional) 🎤</label>
                    <button type="button" className="btn btn-secondary" style={{ width: '100%' }}>
                        Hold to Record Audio
                    </button>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={!photo || !category}>
                    Submit Report
                </button>
            </form>
        </div>
    );
}

export default ReportIssuePage;
