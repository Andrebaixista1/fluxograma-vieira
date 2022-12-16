import './Options.css'


const Options = ({item,op}) =>{
    return(
        <div className='options'>
            <ul>
            {item.map(item => <li key={item}>{item}
            <ul>
                {op.map(op => <li>{op}</li>)}
            </ul></li>)}
            
            </ul>
        </div>
    )
}


export default Options