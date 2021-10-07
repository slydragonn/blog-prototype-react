import React from "react";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus a erat ut sagittis. Curabitur erat sem, pellentesque id dui at, scelerisque iaculis nisl. Integer non lacus mi. Suspendisse potenti. Duis tempor lorem ante, vel finibus quam pellentesque ut. Donec porta felis enim, id sagittis tellus porta eget. Ut laoreet odio quis nisi venenatis ultrices. Ut dictum, dolor sit amet pulvinar aliquam, leo mauris vehicula odio, eu rutrum nunc elit ac leo. Pellentesque auctor tristique feugiat. Phasellus vulputate egestas dui, vel sodales lectus. Ut eu maximus mi. Etiam non nunc congue, ornare orci eget, maximus est.';

const SectionArticles = (props) => {
    return (
        <div className='sectionArticles'>

            <div className='article'>
                <img className='imgArticle' alt='imagen-Articulo' src={img1} width='250px'></img>
                <div>
                    <h2 className='titleArticle'>{props.titulo}</h2>
                    <h3 className='textArticle'>{text}<span className='readMore'><a href='#'>Read More...</a></span></h3>
                </div>
                
            </div>
            <div className='article'>
                <img className='imgArticle' alt='imagen-Articulo' src={img2} width='250px'></img>
                <div>
                    <h2 className='titleArticle'>{props.titulo}</h2>
                    <h3 className='textArticle'>{text}<span className='readMore'><a href='#'>Read More...</a></span></h3>
                </div>
            </div>
            <div className='article'>
                <img className='imgArticle' alt='imagen-Articulo' src={img3} width='250px'></img>
                <div>
                    <h2 className='titleArticle'>{props.titulo}</h2>
                    <h3 className='textArticle'>{text}<span className='readMore'><a href='#'>Read More...</a></span></h3>
                </div>
                
            </div>
            <div className='article'>
                <img className='imgArticle' alt='imagen-Articulo' src={img4} width='250px'></img>
                <div>
                    <h2 className='titleArticle'>{props.titulo}</h2>
                    <h3 className='textArticle'>{text}<span className='readMore'><a href='#'>Read More...</a></span></h3>
                </div>
                
            </div>
            <div className='article'>
                <img className='imgArticle' alt='imagen-Articulo' src={img5} width='250px'></img>
                <div>
                    <h2 className='titleArticle'>{props.titulo}</h2>
                    <h3 className='textArticle'>{text}<span className='readMore'><a href='#'>Read More...</a></span></h3>
                </div>
                
            </div>
           
        
        </div>
    );
}

export default SectionArticles;