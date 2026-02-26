import React from 'react';

function AIHelpPage() {
    const faqs = [
        { q: "How does the AI determine the priority of my complaint?", a: "AI uses image recognition to detect the severity of the issue, combined with community voting density, and proximity to critical areas like hospitals." },
        { q: "Can I override the AI's suggested complaint category?", a: "Yes, the AI provides a suggestion to save time, but you always have the final say before submitting." },
        { q: "What happens if a duplicate complaint is found?", a: "If our system detects a similar recent complaint within 100 meters, it will ask if you want to 'upvote' that one instead to escalate its priority." }
    ];

    return (
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card-header">
                <h2>AI Assistant & Help 🤖</h2>
            </div>

            <div style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
                <p style={{ margin: 0 }}><strong>Hi, I'm UrbanSathi AI.</strong> I help automatically classify complaints, calculate priority based on severity, and detect duplicates. How can I help you understand our system today?</p>
            </div>

            <h3>Frequently Asked Questions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                {faqs.map((faq, idx) => (
                    <div key={idx} style={{ border: '1px solid var(--color-border)', padding: '1rem', borderRadius: '8px' }}>
                        <p style={{ fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>Q: {faq.q}</p>
                        <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>A: {faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AIHelpPage;
