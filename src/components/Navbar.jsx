import React, { useState, useEffect } from 'react';
import { Github } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                transition: 'all 0.3s ease',
                background: isScrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
                padding: isScrolled ? '1rem 0' : '2rem 0'
            }}
        >
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <a href="#" style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'white', letterSpacing: '-1px' }}>
                    FIVEM <span style={{ color: 'var(--primary-color)' }}>.</span>
                </a>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <a href="#home" className="nav-link" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Home</a>
                    <a href="#projects" className="nav-link" style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Scripts</a>
                    <a href="https://github.com/sarancodes" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Github size={18} /> GitHub
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
