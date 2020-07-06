import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';


const Header = (props) => {
    
    const [clicked, setClicked] = useState(false);
    
    const changeClicked = () => {
      setClicked(!clicked);
    };
    
    return (
    <header className="py-2 w-full bg-white flex shadow-xl justify-around items-center bg-white">
            <a href="/">
                <div className='text-indigo-800 font-bold text-lg'>
                    CHAT-APP
                </div>
            </a>
            <div>
                {
                    props.name ? (
                        
                        <div className='relative'>
                            <div
                                onClick={changeClicked}
                                className='flex items-center space-x-2 bg-gray-200 px-3 py-1 rounded-md border hover:shadow-md cursor-pointer'>
                                <span className='rounded-full h-6 w-6 inline-block bg-white border-2 border-green-700'/>
                                <span className='text-gray-700 text-sm font-bold'>{props.name}</span>
                            </div>
                            {
                                clicked ? ( <div className='transition duration-200 ease-in-out bg-white rounded-md shadow-md absolute mt-3 ml-6 px-3 py-2 border'>
                                    <a href='/' className='inline-block hover:text-red-700 rounded text-sm text-gray-500 whitespace-no-wrap'>
                                        Se déconnecter du Groupe</a>
                                </div>) :
                                    null
                            }
                        </div>
                        
                    ) :
                        <nav>
                            <Link to="/register">
                                <button className="p-2 hover:shadow-xl border-2 border-indigo-700 text-gray-800 mr-2 font-semibold rounded-md text-sm md:text-base md:p-2">
                                    Se connecter{' '}
                                    <span className='px-2 text-sm bg-green-200 align-top text-green-700 rounded-md ml-1'>plus tard</span>
                                </button>
                            </Link>
                            <Link to="/login">
                                <button className="p-2 hover:shadow-xl bg-indigo-700 text-white mr-2 font-semibold rounded-md text-sm md:text-base md:py-2 md:px-3">
                                    S'inscrire
                                    <span className='px-2 text-sm bg-green-200 align-top text-green-700 rounded-md ml-1'>plus tard</span>
                                </button>
                            </Link>
                        </nav>
                }
            </div>
        </header>
    )
};
const mapStateToProps = state => {
    return {
        name : state.chat.name
    }
};

export default connect(mapStateToProps)(Header);