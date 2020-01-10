
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
            return <li key={debit.id}>{debit.amount} {debit.description}</li>
        }) 
    }

    render() {
        const { addDebit } = this.props
        return <div>DEBIT
            {this.debitsView()}
            <form action="#" onSubmit={addDebit}>
                Description<input type="text" name="description" /> 
                Amount <input type="number" name="amount" />
                <button type="submit">Add Debit</button>
            </form>
        </div>
    }
}

export default Debits;