import React, { Component } from 'react'


const Card = ({name,img})=>{
    return(
        <div> <img src={img} />
          <b className="card">{name}</b>
          </div>
    )
}

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
  user:[ {name:'imma watson',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/240px-Emma_Watson_2013.jpg'} ,   
   {name:'tom',img:'http://fr.web.img6.acsta.net/c_215_290/pictures/18/07/13/09/57/3777492.jpg'},
   {name:'mabrouka',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Emma_Stone_Deauville_2011.jpg/170px-Emma_Stone_Deauville_2011.jpg'}]
        }
    }
    render() {
        return (
            <div className="container">
            {this.state.user.map(x=>{
                return <Card name={x.name} img={x.img} />
            }) }
                
            </div>)
            }
}

export default Main
