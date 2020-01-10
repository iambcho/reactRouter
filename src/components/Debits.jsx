


import React from "react"
import axios from "axios"

class Debits extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            debits: []
        }
        this.addDebit = this.addDebit.bind(this)
    }


    debitsView() {
        const { debits } = this.state;
        return debits.map((debit) => {
            return <li key={debit.id}>{debit.amount} {debit.description}</li>
        }) 
    }

    addDebit(e) {
        e.preventDefault()
        const {debits } = this.state
        const description  = e.target[0].value
        const amount  = e.target[1].value
        const newDebit = [{description, amount}]
        this.setState({debits: debits.concat(newDebit)})
    }

    async componentDidMount() {
        const debits = await axios.get("https://moj-api.herokuapp.com/debits")
        this.setState({debits: debits.data})
    }
    render() {
        return <div>DEBIT
            {this.debitsView()}
            <form action="#" onSubmit={this.addDebit}>
                Description<input type="text" name="description" /> 
                Amount <input type="number" name="amount" />
                <button type="submit">Add Debit</button>
            </form>
        </div>
    }
}

export default Debits;