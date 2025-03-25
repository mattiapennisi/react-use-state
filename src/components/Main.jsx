import { useState } from 'react'

import Card from './Card.jsx'
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
                            className={`btn ${tech.id === buttonId ? 'bg-warning text-black' : 'bg-primary text-white'}`}
                            onClick={() => setButtonId(buttonId === tech.id ? 0 : tech.id)}
                        >
                            {tech.title}
                        </div>
                    )
                }
            </div>

            <Card selectedItem={selectedTech} />
        </main>
    )
}