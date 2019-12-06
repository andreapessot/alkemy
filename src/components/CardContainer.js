import React from 'react';
import '../App.css';
import axios from 'axios';
import Card from './Card';
import CardButton from './CardButton';
import '../style/titolo.css'





class CardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     // selectedCard: ""
      //cards:[]
    }
  }

  render() {
    const {
      answers,
      question
    } = this.props

    const cards = answers.map((answer, index) => {
      if (answer.image) {
        return <Card
          key={index}
          answer={answer}
          onClick={() => this.props.selectCard(index)}
              />       
      }
      else return <CardButton
                    key={index}
                    answer={answer}
                    onClick = {() => this.props.selectCard(index)}
              />
    })

    return (
      <div>
      <div className="titolo">
      <h2>{question}</h2>
      </div>
      <div className="step-cards-container">
        

        {cards}

      </div>
      </div>
    )
  }
}
export default CardContainer;