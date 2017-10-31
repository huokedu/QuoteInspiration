import React from "react";
import { QuoteContainer, QuoteText, Author } from "./Quote.style";


export default class Quote extends React.Component {
  

  render() {
    return (
      
        <QuoteContainer>
          <QuoteText 
          
          size={this.props.size}>
          {this.props.quoteText}
          </QuoteText>
          <Author>
          - {this.props.authorName} -
          </Author>
        </QuoteContainer>
      
    );
  }
}
