
import React from "react"

class Credits extends React.Component {

    CreditsView() {
        const { credits } = this.props;
        return credits.map((credit) => {
            return <li key={credit.id}>{credit.amount} {credit.description}</li>
        }) 
    }

    render() {
        const { addCredit } = this.props
        return <div>CREDITS
            {this.CreditsView()}
            <form action="#" onSubmit={addCredit}>
                Description<input type="text" name="description" /> 
                Amount <input type="number" name="amount" />
                <button type="submit">Add Credit</button>
            </form>
        </div>
    }
}

export default Credits;