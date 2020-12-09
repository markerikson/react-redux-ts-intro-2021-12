import {connect} from "react-redux";
import Account from "components/Account";
import {deposit} from "actions/transactions";
import {selectLatestTransactions} from "selectors/transactions";

function mapStateToProps(state, ownProps) {
    return {
        balance : state.balance,
        latestTransactions : selectLatestTransactions(state, 10)
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        makeDeposit : (amount) => dispatch(deposit(amount))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);

// The mapDispatchToProps function can also be replaced with
// an object full of action creators:
const actionCreators = {deposit};

export default connect(mapStateToProps, actions)(Account);