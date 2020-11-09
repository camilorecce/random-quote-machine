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
        <div className="card w-75 my-3">

          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <div id="text">
                <p>
                  "{this.state.quoteText}"
                </p>
              </div>
              <footer className="blockquote-footer float-right" id="author">
                {this.state.quoteAuthor}
              </footer>
            </blockquote>
          </div>
          <div className="card-footer">

            <button id="new-quote" className="btn btn-primary float-left mr-3" onClick={this.getNewQuote}>New Quote</button>
            <a className="float-left" id="tweet-quote" href="#">
              <i className="fab fa-twitter btn btn-primary"></i>
            </a>

          </div>



        </div>

      </div>
    );
  }
}

export default App;
