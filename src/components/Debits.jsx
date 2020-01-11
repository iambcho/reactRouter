
import React from "react"

class Debits extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            debits: []
        }
    }


    debitsView() {
        const { debits } = this.props;
        debugger
        return debits.map((debit) => {
        return <li key={debit.id}>{debit.amount} {debit.description} {debit.date}</li>
        }) 
    }

    render() {
        const { addDebit } = this.props
        return <div>
            <h1>DEBIT</h1>
            {this.debitsView()}
            <br/>
            <form action="#" onSubmit={addDebit}>
                Description: <input type="text" name="description" />&nbsp;
                Amount: <input type="number" name="amount" />&nbsp;
                Date: <input type="date" name="date" />&nbsp;
                <button type="submit">Add Debit</button>
            </form>
        </div>
    }
}

export default Debits;