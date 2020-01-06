import React, {Component} from 'react';

class ErrorBaundaru extends Component {

    state = {
        hasError:false,
        errorMessage:'',
    };
    componentDidCatch(error, errorInfo) {
        this.setState({hasError:true,errorMessage:error})
    }

    render() {
        if (this.state.hasError){
            return <div>NOT FOUND</div>
        }else {
            return this.props.children
        }
    }
}

export default ErrorBaundaru;