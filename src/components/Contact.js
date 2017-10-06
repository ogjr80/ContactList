import React, {Component} from 'react';


class Contact extends Component{
  render(){
    return(
      <li onClick={this.props.ChangeContact(this.props.mycontact.name)}  className="list-group-item">
        <div className="card" style={{width: 300}}>
          <img className="card-img-top" src={this.props.mycontact.imageUrl} style={{width: 288}} alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">{this.props.mycontact.name}</h4>
            <p className="card-text">{this.props.mycontact.description}</p>
            <a  href="#" className="btn btn-primary">{this.props.mycontact.votes}</a>
          </div>
        </div>
      </li>
    )
  }
}

export default Contact;
