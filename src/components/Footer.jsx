import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--border-color)', marginTop: '4rem' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Saran Kumar. All rights reserved.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Privacy Policy</a>
                    <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
