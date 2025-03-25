export default function Card({selectedItem}) {
    return (
        <div className="card m-5 p-5">
            <h2 className='mb-4 fw-bold fs-3'>{selectedItem ? selectedItem.title : ''}</h2>
            <p className='fs-5'>{selectedItem ? selectedItem.description : 'Nessun linguaggio selezionato'}</p>
        </div>
    )
}