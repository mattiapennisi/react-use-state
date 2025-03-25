export default function Button({tech, buttonId, setButtonId}) {
    return (
        <div
            className={`btn ${tech.id === buttonId ? 'bg-warning text-black' : 'bg-primary text-white'}`}
            onClick={() => setButtonId(buttonId === tech.id ? 0 : tech.id)}
        >
            {tech.title}
        </div>
    )
}