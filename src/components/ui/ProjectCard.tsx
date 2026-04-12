import React from 'react';

export default function ProjectCard({ title = 'null', thumbnail = 'null' }) {
    return (
        <div style={{ background: '#0f102954', padding: '10px', borderRadius: '5px' }}>
            <img style={{ width: "400px", aspectRatio: '16/9', borderRadius: '5px' }} src={thumbnail} alt={title} />
            <h3 style={{ fontSize: '1.5rem', marginTop: '5px' }}>{title}</h3>
        </div>
    );
}