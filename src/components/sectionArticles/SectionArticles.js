import React, { Component } from "react";
import Article from "./Article";
import dataArticle from '../../helpers/dataArticle.json'
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpeg';
import img3 from '../../assets/3.jpeg';
import img4 from '../../assets/4.jpeg';
import img5 from '../../assets/5.jpeg';

const img = [img1, img2, img3, img4, img5];

class SectionArticles extends Component {

    constructor(props){
        super(props);
    }
    
    render(){
        return (

            <div className='sectionArticles'>

             {dataArticle.Articulos.map(item => <Article key={item.id} articles={item} img={img[item.id]}/>)}
        
             </div>

        );
    }
}

export default SectionArticles;