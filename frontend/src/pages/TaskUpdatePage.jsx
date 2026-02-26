import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_ISSUES } from '../mockData';

function TaskUpdatePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const task = MOCK_ISSUES.find(i => i.id === id) || MOCK_ISSUES[1];

    const [status, setStatus] = useState(task.status);
    const [remarks, setRemarks] = useState('');
    const [afterPhoto, setAfterPhoto] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (status === 'Completed' && !afterPhoto) {
            alert("Please upload a resolution photo before completing this task.");
            return;
        }
        alert("Task Updated Successfully!");
        navigate('/worker/tasks');
    };

    return (
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <button onClick={() => navigate(-1)} className="btn btn-secondary" style={{ marginBottom: '1rem', padding: '0.5rem 1rem' }}>← Back</button>

            <div className="card-header">
                <h2>Update Task: {task.id}</h2>
            </div>

            <div style={{ marginBottom: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}>
                <p style={{ padding: '0.5rem 1rem', background: '#f8f9fa', margin: 0, fontWeight: 'bold', borderBottom: '1px solid var(--color-border)' }}>Before (Citizen Photo)</p>
                <img src={task.photoUrl} alt="Before" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Current Status</label>
                    <select className="form-control" value={status} onChange={e => setStatus(e.target.value)}>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Work Completed</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">After Photo (Required for Completion) 📸</label>
                    {!afterPhoto ? (
                        <div className="file-upload-container" onClick={() => document.getElementById('after-upload').click()}>
                            <p>Click to capture resolution photo</p>
                            <input type="file" id="after-upload" style={{ display: 'none' }} onChange={() => setAfterPhoto(true)} accept="image/*" />
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', backgroundColor: '#e9ecef', padding: '1rem', borderRadius: '4px' }}>
                            <p>✅ Resolution Photo Attached</p>
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label className="form-label">Remarks</label>
                    <textarea className="form-control" rows="3" placeholder="Enter details about the work done..." value={remarks} onChange={e => setRemarks(e.target.value)}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Save Update</button>
            </form>
        </div>
    );
}

export default TaskUpdatePage;
