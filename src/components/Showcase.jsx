import React from 'react';
import { Github, ExternalLink, Star, Code2 } from 'lucide-react';
import dealershipImg from '../assets/dealership.png';
import cloudkitImg from '../assets/cloudkit.png';

const projects = [
    {
        id: 1,
        title: 'FiveM Car Dealership',
        description: 'A fully immersive, 3D interactive dealership management system. Features include financing calculations, test drives, and sleek showroom UI. Designed for high-end RP servers.',
        tags: ['Lua', 'React', 'NUI', 'MySQL'],
        image: dealershipImg,
        github: 'https://github.com/sarancodes/fivem-car-dealership-script',
    },
    {
        id: 2,
        title: 'GTAV Cloud Kit',
        description: 'Enterprise-grade cloud synchronization system for FiveM. Sync player data across servers with real-time latency optimization and secure API endpoints.',
        tags: ['TypeScript', 'Node.js', 'Redis', 'Rest API'],
        image: cloudkitImg,
        github: 'https://github.com/sarancodes/fivem-gtav-cloud-kit',
    }
];

const Showcase = () => {
    return (
        <section id="projects" style={{ padding: 'var(--section-padding)', position: 'relative' }}>
            <div className="container">
                <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Featured <span className="text-gradient">Scripts</span></h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Production-ready resources built for performance and scalability.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {projects.map((project) => (
                        <div key={project.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }}>
                            <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'rgba(0,0,0,0.7)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.25rem',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <Star size={12} fill="gold" stroke="none" /> Premium
                                </div>
                            </div>

                            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: '1.5rem' }}>{project.title}</h3>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
                                        <Github size={20} />
                                    </a>
                                </div>

                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6, flex: 1 }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.8rem',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '15px',
                                            background: 'rgba(124, 58, 237, 0.1)',
                                            color: 'var(--primary-color)',
                                            border: '1px solid rgba(124, 58, 237, 0.2)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a href={project.github} className="btn btn-outline" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                                    <Code2 size={18} /> View Source Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcase;
