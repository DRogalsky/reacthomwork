import React, { Component } from 'react';
import Header from './components/header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import friends from './friends.json';

class App extends Component {
  state = {
    friends,
    guessed: [],
    score: 0,
    topScore: 0
  };

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

  handleClick = event => {
    const friendName = event.target.alt;
    let currentScore = this.state.score + 1;
    const guessedList = this.state.guessed;

    if (guessedList.includes(friendName)) {
      this.restart()
    } else {
      this.setState({
        friends: this.shuffle(this.state.friends),
        score: currentScore,
        guessed: [...guessedList, friendName]
      })
    }
  };

  restart() {
    if(this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score
      })
    }
    this.setState({
      score: 0,
      guessed: []
    })
  };

  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Header />
        {this.state.friends.map(friendObj => {
          return <Card
            key={friendObj.id}
            id={friendObj.id}
            name={friendObj.name}
            image={friendObj.image}
            onClick={this.handleClick}
          />
        })}
        <Footer />
      </div>
    )
  };
}

export default App;
