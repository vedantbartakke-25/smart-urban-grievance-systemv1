// mockData.js
export const MOCK_USERS = {
    citizen1: { id: 'c1', name: 'Rahul Sharma', role: 'Citizen' },
    admin1: { id: 'a1', name: 'Dept Admin (Roads)', role: 'DeptAdmin' },
    worker1: { id: 'w1', name: 'Field Worker A', role: 'FieldWorker' },
};

export const MOCK_ISSUES = [
    {
        id: 'iss-001',
        category: 'Pothole',
        priority: 'High',
        status: 'Pending',
        photoUrl: 'https://via.placeholder.com/300/e74c3c/ffffff?text=Pothole',
        lat: 20.9320,
        lng: 77.7523,
        reportedAt: new Date(Date.now() - 3600000).toISOString(),
        slaDeadline: new Date(Date.now() + 86400000).toISOString(),
        assignedTo: null
    },
    {
        id: 'iss-002',
        category: 'Water Leakage',
        priority: 'Emergency',
        status: 'In Progress',
        photoUrl: 'https://via.placeholder.com/300/3498db/ffffff?text=Water+Leak',
        lat: 20.9350,
        lng: 77.7560,
        reportedAt: new Date(Date.now() - 7200000).toISOString(),
        slaDeadline: new Date(Date.now() + 43200000).toISOString(),
        assignedTo: 'w1'
    },
    {
        id: 'iss-003',
        category: 'Stray Animals',
        priority: 'Low',
        status: 'Completed',
        photoUrl: 'https://via.placeholder.com/300/2ecc71/ffffff?text=Stray+Animal',
        lat: 20.9400,
        lng: 77.7500,
        reportedAt: new Date(Date.now() - 172800000).toISOString(),
        slaDeadline: new Date(Date.now() - 86400000).toISOString(),
        assignedTo: 'w2',
        resolutionPhotoUrl: 'https://via.placeholder.com/300/2ecc71/ffffff?text=Resolved'
    }
];

export const MOCK_WORKERS = [
    { id: 'w1', name: 'Field Worker A', status: 'Busy', tasks: 1 },
    { id: 'w2', name: 'Field Worker B', status: 'Free', tasks: 0 },
    { id: 'w3', name: 'Field Worker C', status: 'Busy', tasks: 2 },
];
