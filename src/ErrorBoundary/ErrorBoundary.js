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
        console.log(this.state.errorMessage);
        if (this.state.hasError){
            return <div>{String(this.state.errorMessage)}</div>
        }else {
            return this.props.children
        }
    }
}

export default ErrorBaundaru;