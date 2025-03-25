import { useState } from 'react'

import technologies from '../../data/techs.js'

export default function Main() {
    return (
        <main id="main">
            <div id="buttons" className="d-flex row-cols-6 m-5 gap-3">
                {
                    technologies.map(tech =>
                        <div className="btn bg-primary text-white col">{tech.title}</div>
                    )
                }
            </div>

            <div className="card m-5 p-5">
                Nessun linguaggio selezionato
            </div>
        </main>
    )
}