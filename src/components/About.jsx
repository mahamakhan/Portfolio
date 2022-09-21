import picture from '../media/pic.jpg'


const About = ()=> {
    return(
        <div>
            <h1>About</h1>
            
            <div className='about'>
            <img className='mypic' src={picture} alt='mypic'/>
            <h4>I am a Full-stack web developer with a background in Biotechnology.</h4>
           
        </div>
        </div>
        
    )
}

export default About