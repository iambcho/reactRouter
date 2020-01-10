


import React from "react"
import axios from "axios"

class Debits extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            debits: []
        }
    }


    debitsView() {
        const { debits } = this.state;
        return debits.map((debit) => {
            return <li key={debit.id}>{debit.amount} {debit.description} {debit.date}</li>
        }) 
    }

    async componentDidMount() {
        const debits = await axios.get("https://moj-api.herokuapp.com/debits")
        this.setState({debits: debits.data})
    }
    render() {
        return <div>DEBIT
            {this.debitsView()}
        </div>
    }
}

export default Debits;