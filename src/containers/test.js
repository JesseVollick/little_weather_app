import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Import actions here!!

class test extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>test Lives Here</div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    //What Ever is Returned from here will show up as props in bookList
    return {
        state: state
    };
}

//anything returned from this function will end up as props on the Container
function mapDispatchToProps(dispatch) {
//Whenever selectBook is called, the result should be passed to all of our reducers.
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

//Promote BookList prom component to container- it needs to know
//about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(test);