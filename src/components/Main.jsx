import { useState } from 'react'

import technologies from '../../data/techs.js'

export default function Main() {
    const [buttonId, setButtonId] = useState(0)

    const selectedTech = technologies.find(tech => tech.id === buttonId)

    return (
        <main id="main">
            <div id="buttons" className="d-flex m-5 gap-3">
                {
                    technologies.map(tech =>
                        <div
                            key={tech.id}
                            className={`btn ${tech.id === buttonId ? 'bg-warning' : 'bg-primary'} ${tech.id === buttonId ? 'text-black' : 'text-white'}`}
                            onClick={() => setButtonId(tech.id)}
                        >
                            {tech.title}
                        </div>
                    )
                }
            </div>

            <div className="card m-5 p-5">
                <h2 className='mb-4 fw-bold fs-3'>{selectedTech ? selectedTech.title : ''}</h2>
                <p className='fs-5'>{selectedTech ? selectedTech.description : 'Nessun linguaggio selezionato'}</p>
            </div>
        </main>
    )
}