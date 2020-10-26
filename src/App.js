import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      quoteText: '',
      quoteAuthor: ''
    }
    this.getQuote = this.getQuote.bind(this);
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getNewQuote() {
    this.getQuote();
  }

  getQuote() {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        let quotesArr = data;
        console.log(quotesArr.length);
        const randomNum = Math.floor(Math.random() * quotesArr.length);
        console.log(randomNum)
        this.setState({
          quoteText: quotesArr[randomNum].text,
          quoteAuthor: quotesArr[randomNum].author
        });
      });
  }

  render() {

    return (
      <div className="App container" id="quote-box">
        <div className="card w-75">
          <blockquote className="blockquote">
          <div className="card-body">
            
            <div id="text">
            <p>
              {this.state.quoteText}
            </p>
          </div>
          </div>
          <div className="card-footer">
            <footer className="blockquote-footer" id="author">
            {this.state.quoteAuthor}
            <button id="new-quote" onClick={this.getNewQuote}>New Quote</button>
          <a id="tweet-quote" href="#">
            
          </a>
          </footer>
          </div>
          </blockquote>
          
          
        </div>

      </div>
    );
  }
}

export default App;
