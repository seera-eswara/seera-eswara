import {Component} from 'react'

import QuestionOption from '../QuestionOption'

import './index.css'

class CoffeePlannerQuestion extends Component {
  render() {
    const {coffeePlannerQuestionData, updateOption, selectedOption} = this.props
    return (
      <ul className="alignQuestionData">
        {coffeePlannerQuestionData.map(coffeeQ => (
          <>
            <li key={coffeeQ.id}>
              <h1 className="head">{coffeeQ.questionTitle}</h1>
              <QuestionOption
                coffeeQuestionOptionData={coffeeQ.optionsData}
                updateOption={updateOption}
                questionId={coffeeQ.id}
                selectedOption={selectedOption}
              />
            </li>
          </>
        ))}
      </ul>
    )
  }
}

export default CoffeePlannerQuestion
