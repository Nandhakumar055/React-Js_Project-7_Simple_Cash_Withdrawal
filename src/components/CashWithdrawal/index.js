import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="main-card-container">
          <div className="user-container">
            <p className="user-logo">s</p>
            <p className="user-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="amount-container">
              <p className="balance-amount">{balance}</p>
              <p className="rupees">in Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-text">Withdraw</p>
            <p className="choose-sum-text">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="amount-card-item-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denominationDetails={eachItem}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
