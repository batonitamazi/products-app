import React, { Component } from 'react'
import '../App.css'

export default class Product extends Component {
    
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img  className='main image'src={this.props.productImageUrl} alt='product-image'/>
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a  onClick={this.handleUpVote}>
                            <i className='upicon' ></i>
                            
                        </a>
                        {this.props.votes}
                    </div>
                    <div className='description'>
                        <a href={this.props.url}>{this.props.title}</a>
                        <p>Authentic renaissance actors, delivered in just two weeks</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img  className='ui avatar image' src={this.props.submitterAvatarUrl} alt='avatar'/>
                    </div>
                </div>
            </div>
        );
    }
}