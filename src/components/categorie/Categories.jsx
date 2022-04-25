import './Categories.css'

export default function Categories(props) {


    return (
        <div className='description__categories'>
            {props.categories.map(categorie =>
                <div className='categories__name'>
                    {categorie.description}
                </div>)}
        </div>
    )
}