import React, { Component } from 'react';
import { getAdvices as getAdvicesService } from "../../services/advices";
import Advice from "../advices/advices";

import './MainComponent.scss';

class MainComponent extends Component {   
    async getAdviceHandler() {
        const newAdvice = await getAdvicesService();
        this.props.updateAdvice(newAdvice); 
    };

    render() {
        return (
            <div className="container">
                <span className="quoteWrapper">
                    <p className="quoteMarkUp"><i className="fas fa-quote-left"></i></p>
                    <Advice currentAdvice={this.props.currentAdvice} />
                    {/* <p className="quotes">{this.props.currentAdvice}</p> */}
                    <p className="quoteMarkDown"><i className="fas fa-quote-right"></i></p>
                </span>
                <button className="getMore" onClick={(e) => this.getAdviceHandler()}>more wisdom !</button>                
            </div>
        )
    }
};

export default MainComponent;
