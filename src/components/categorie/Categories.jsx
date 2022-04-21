

export default function Categories(props) {


    return (
        <div>
            {props.categories.map(categorie =>
                <span>
                    {categorie.description}
                </span>)}
        </div>
    )
}