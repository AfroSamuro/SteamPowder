

export default function Platforms(props) {

    const { windows, linux, mac } = props.platforms
    return (
        <div>
            <p>Windows:{windows ? ' supported' : ' not supported'}</p>
            <p>Mac:{mac ? ' supported' : ' not supported'}</p>
            <p>Linux:{linux ? ' supported' : ' not supported'}</p>
        </div>
    )
}