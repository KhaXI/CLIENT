import React from 'react'

export function Blog() {
    return (
        <div>
            <h2>Estamos en BLOG {localStorage.getItem('id')}</h2>
        </div>
    )
}
