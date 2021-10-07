import React from "react";
import logo from '../assets/githubPerfil.jpg';


const HeaderBlog = () => {
    return (
        <div className='marcaBlog'>
        <img alt='logoBlog' className='logoBlog' src={logo}/>
        <h1 className='tituloBlog'>TITULO DEL BLOG</h1>      
        </div>

    );

}

/*class SelectDificult extends Component {
    render(){
	return <h2>Hello I am a h2</h2>;
    }

}*/

export default HeaderBlog;