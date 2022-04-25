import './Platforms.css'

export default function Platforms(props) {

    const { windows, linux, mac } = props.platforms
    return (
        <div className='description__platfroms'>
            <div className='platforms__platfrom'>
                <p className='platform__name'>Windows:</p>
                <p className={`platform__sup ${windows ? 'supported' : 'notSupported'}`}>
                    {windows ? ' supported' : ' not supported'}
                </p>
            </div>
            <div className='platforms__platfrom'>
                <p className='platform__name'>Mac:</p>
                <p className={`platform__sup ${mac ? 'supported' : 'notSupported'}`}>
                    {mac ? ' supported' : ' not supported'}
                </p>
            </div>
            <div className='platforms__platfrom'>
                <p className='platform__name'>Linux:</p>
                <p className={`platform__sup ${linux ? 'supported' : 'notSupported'}`} >{
                    linux ? ' supported' : ' not supported'}
                </p>
            </div>
        </div>
    )
}