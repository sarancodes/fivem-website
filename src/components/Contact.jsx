import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: 'var(--section-padding)', textAlign: 'center', background: 'linear-gradient(to top, rgba(124, 58, 237, 0.05), transparent)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to <span className="text-gradient">Collaborate</span>?</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                    Whether you need a custom script, a full server optimization, or UI design, I'm available for commissions.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <a href="mailto:contact@sarancodes.com" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                        <Mail size={20} style={{ marginRight: '8px' }} /> Email Me
                    </a>
                    <a href="#" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>
                        <MessageCircle size={20} style={{ marginRight: '8px' }} /> Discord
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
