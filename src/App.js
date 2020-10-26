import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      quoteText: '',
      quoteAuthor: ''
    }
    this.getQuote=this.getQuote.bind(this);
    this.getNewQuote=this.getNewQuote.bind(this);
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

  render () {

  return (
    <div className="App" id="quote-box">
      <div id="text">
        {this.state.quoteText}
      </div>
      <div id="author">
        {this.state.author}
      </div>
      <button id="new-quote" onClick={this.getNewQuote}>New Quote</button>
      <a id="tweet-quote" href="#">

      </a>
    </div>
  );
}
}

export default App;
