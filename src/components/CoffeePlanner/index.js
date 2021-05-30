// Write your code here.

import {Component} from 'react'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion'

import './index.css'

class CoffeePlanner extends Component {
  state = {
    selectedOption: [
      {option: null, title: null},
      {option: null, title: null},
      {option: null, title: null},
      {option: null, title: null},
      {option: null, title: null},
    ],
    errorMsg: false,
    successfulOrder: false,
  }

  updateOption = (val1, val2, val3) => {
    this.setState(prevState => {
      const data = prevState
      data.selectedOption[val1].option = val2
      data.selectedOption[val1].title = val3
      return {selectedOption: data.selectedOption}
    })
  }

  validate = () => {
    const {selectedOption: data} = this.state
    const res = data.every(selectedOpt => selectedOpt.option !== null)
    if (res) {
      this.setState({errorMsg: false, successfulOrder: true})
    } else {
      this.setState({errorMsg: true, successfulOrder: false})
    }
  }

  finalMsg = () => {
    const {selectedOption, errorMsg, successfulOrder} = this.state
    let res
    console.log('titleValue', selectedOption)
    if (errorMsg) {
      res = (
        <div className="finalMsgCont">
          <h1>Kindly select options for all the questions.</h1>
        </div>
      )
    } else if (successfulOrder) {
      res = (
        <div className="finalMsgCont">
          <h1>
            I Drink my coffee as {selectedOption[0].title},with a
            {selectedOption[1].title} type of bean.{selectedOption[2].title}
            ground ala
            {selectedOption[3].title},sent to me {selectedOption[4].title}.
          </h1>
        </div>
      )
    }

    return res
  }

  render() {
    const {selectedOption} = this.state
    const {coffeePlannerData} = this.props

    console.log(selectedOption)
    return (
      <div>
        <div className="coffeeHeadBg">
          <div className="content">
            <h1>Create a Plan</h1>
            <p>
              Coffee is a brewed drink prepared from roasted coffee beans, the
              seeds of berries from certain Coffea species. All fruit must be
              further processed from a raw material—the fruit and seed—into a
              stable, raw product; un-roasted, green coffee.
            </p>
          </div>
        </div>
        <div className="questionsContainer">
          <div className="shadowBox">
            <CoffeePlannerQuestion
              coffeePlannerQuestionData={coffeePlannerData}
              updateOption={this.updateOption}
              selectedOption={selectedOption}
            />
            <div className="btnAlign">
              <button onClick={this.validate} className="bn" type="submit">
                Create my plan!
              </button>
              {this.finalMsg()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoffeePlanner
