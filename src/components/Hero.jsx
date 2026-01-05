import React from 'react';
import { ArrowRight, Code, Server } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px' // offset for fixed navbar
        }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, rgba(5, 5, 5, 0) 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                {/* <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '50px',
                    marginBottom: '2rem'
                }}>
                    <span style={{ width: '8px', height: '8px', background: 'var(--accent-color)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent-color)' }}></span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Available for Commissions</span>
                </div> */}

                <h1 style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    marginBottom: '1.5rem',
                    letterSpacing: '-2px',
                    lineHeight: 1.1,
                    maxWidth: '900px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    High-Performance <br />
                    <span className="text-gradient">FiveM Scripts</span>
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '3rem',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    lineHeight: 1.7
                }}>
                    Enhance your server with premium, optimized scripts designed for stability and user experience. No bloat, just performance.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="#projects" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                        View Scripts <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                    </a>
                    <a href="https://github.com/sarancodes" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                        GitHub Profile
                    </a>
                </div>

                {/* Stats / Features Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    marginTop: '6rem',
                    maxWidth: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <div className="glass-card" style={{ padding: '2rem', textAlign: 'left' }}>
                        <Code size={32} color="var(--primary-color)" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Clean Code</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Optimized, readable, and well-documented Lua & JS.</p>
                    </div>
                    <div className="glass-card" style={{ padding: '2rem', textAlign: 'left' }}>
                        <Server size={32} color="var(--accent-color)" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Server Sided</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Secure and synchronized logic for accurate roleplay.</p>
                    </div>
                    <div className="glass-card" style={{ padding: '2rem', textAlign: 'left' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', marginBottom: '1rem' }}>
                            <span style={{ fontWeight: 'bold' }}>UI</span>
                        </div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Modern UI</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>React-based responsive interfaces for in-game immersion.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
