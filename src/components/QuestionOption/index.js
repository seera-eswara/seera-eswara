// Write your code here.

import {Component} from 'react'

import './index.css'

class QuestionOption extends Component {
  optionSelected

  optionsInfo = () => {
    const {
      coffeeQuestionOptionData,
      questionId,
      updateOption,
      selectedOption,
    } = this.props

    return coffeeQuestionOptionData.map(option => {
      const optionSelected = () => {
        updateOption(questionId, option.id, option.optionTitle)
      }

      const classNm = () => {
        if (selectedOption[questionId].option === option.id) {
          return {
            clsStyle: 'liBgColorSelected',
            imgUrl:
              'https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png',
          }
        }
        return {
          clsStyle: 'liBgColor',
          imgUrl:
            'https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png',
        }
      }

      const {clsStyle, imgUrl} = classNm()

      return (
        <li className={clsStyle} onClick={optionSelected} key={option.id}>
          <div className="headImg">
            <h1 className="head">{option.optionTitle}</h1>
            <img className="cupImage" alt="cup" src={imgUrl} />
          </div>
          <p className="head">{option.description}</p>
        </li>
      )
    })
  }

  render() {
    return <ul className="ulStyle">{this.optionsInfo()}</ul>
  }
}

export default QuestionOption
