import React from "react";

const Article = (props) =>{

    return(
        <div className='article'>
                <img className='imgArticle' alt='imagen-Articulo' src={props.img} width='250px'></img>
                <div>
                    <h2 className='titleArticle'>{props.articles.titulo}</h2>
                    <h3 className='textArticle'>{props.articles.texto}<span className='readMore'><a href='#'>Read More...</a></span></h3>
                </div>
                
            </div>
    );

}

export default Article;