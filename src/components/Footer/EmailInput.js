import { Component } from 'react'

export default class EmailInput extends Component {
  constructor(props) {
    super(props)
    this.updateInputValue = this.updateInputValue.bind(this)
    this.state = {
      inputValue: '',
    }
  }
  updateInputValue(value) {
    this.setState = { inputValue: value }
  }
  render() {
    //const { theme } = this.props
    return (
      <div>
        {this.state.inputValue}
        <input onChange={(e) => this.updateInputValue(e.target.value)} />
      </div>
    )
  }
}
