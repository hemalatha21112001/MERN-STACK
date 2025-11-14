import firstjuice from '../assets/images/first juice.jpeg';
const card=({ src, description,title})=>{
    return(
        <div className='Card1'>
            <div className='imgg'>
                <img src={src}/>
            </div>
            <h1> {title}</h1>
            <p> {description}</p>
        </div>
    )
}
export default card;
