import picture from '../media/pic.jpg'


const About = ()=> {
    return(
        <div className='aboutpage'>
            <h1>About</h1>
            
            <div className='about'>
            <img className='mypic' src={picture} alt='mypic'/>
            <h3>I am from Pakistan and I moved to the United States in 2020. I got my Bachelors of Science degree in Biotechnology from Forman Christian College, Lahore, Pakistan. Working in a fully automated diagnostic lab developed my interest towards learning coding. My goal is focused on improving the world through the use of new technologies. I am hard working, detail-oriented, and persistent. I frequently challenge myself to improve my skill-set and am driven to contribute with a company that I can grow with long-term.
           <br/>
           Apart from coding I like hiking, playing tennis, painting and spending time with my family. </h3>
        </div>
        </div>
        
    )
}

export default About