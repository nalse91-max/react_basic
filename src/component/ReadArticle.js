import React, { Component } from 'react'

class ReadArticle extends Component{
  render(){
    console.log('Readarticle 실행');
    let className = 'menu';
    if(this.props.mode === 'welcome'){
      className += ' hidden';
    }
    return (
      <section>
        <article>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>  
          <ul className={className}>
            <li>
              <a 
                href="/update" 
                className="secondary"
                onClick={(e)=>{
                  e.preventDefault();
                  this.props.onChangeMode('update');
                }}
                >update</a>
            </li>
            <li>
              <input 
                type="button" 
                className="danger" 
                value="delete"
                onClick={(e)=>{
                  e.preventDefault();
                  this.props.onChangeMode('delete');
                }}  
              />
            </li>
          </ul>               
        </article>
      </section>      
    )
  }
}

export default ReadArticle