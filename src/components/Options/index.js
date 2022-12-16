import './Options.css'


const Options = ({item,op}) =>{
    return(
        <div className='options'>
            <ul>
            {item.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}


export default Options