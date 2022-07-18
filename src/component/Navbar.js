import React,{useState} from 'react'; 
import './Navbar.css';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
    const [click,setClick] = useState(false)

    const handleClick = ()=>{
        setClick(!click)
    }
  return (
    <div className='header'>
        <div className='container'>
            <h1>DE<span className='primary'>FI</span></h1>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Featured</a>
                </li>
                <li>
                    <a href='/'>Earn</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </ul>

            <div className='btn-group'>
            <button className='btn'>
                Connect Wallet
            </button>
            </div>
        
        <div  className='hamburger' onClick={handleClick} >
            {click?( <AiOutlineClose size={20} />):(<AiOutlineMenu size={20} />)}
        </div>
    </div> 
        
</div>
  )
}

export default Navbar