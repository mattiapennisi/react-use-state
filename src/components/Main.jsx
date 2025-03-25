import { useState } from 'react'

import technologies from '../../data/techs.js'
import Card from './Card.jsx'
import Button from './Button.jsx'

export default function Main() {
    const [buttonId, setButtonId] = useState(0)

    const selectedTech = technologies.find(tech => tech.id === buttonId)

    return (
        <main id="main">
            <div id="buttons" className="d-flex m-5 gap-3">
                {
                    technologies.map(tech =>
                        <Button key={tech.id} tech={tech} buttonId={buttonId} setButtonId={setButtonId} />
                    )
                }
            </div>

            <Card selectedItem={selectedTech} />
        </main>
    )
}