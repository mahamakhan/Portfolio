import {MdKeyboardArrowDown} from 'react-icons/md'
import { Link } from "react-scroll";

const Home = ()=> {
  return(
      <div className='homepage'>
         
          <h1>Hey!</h1>
          <h1>I'm Maham Almizan Khan</h1>
          <h1>I am a Software Engineer.</h1>
          <Link to='aboutpage' spy={true} smooth={true} offset={-20} duration={500}><MdKeyboardArrowDown className='down' color='lightgrey' size='10em'/></Link>
          
          
         
      
      </div>
      
  )
}

export default Home