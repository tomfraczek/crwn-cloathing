import React from 'react';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component{
    state = {
        hasErrored: false,
    }

    static getDerivedStateFromError(error) {
        return {hasErrored: true}
    }

    componentDidCatch(error, info){
        console.log(error)
    }

    render(){
        if(this.state.hasErrored){
            return (
                <div>
                    <div className="error-image-overlay">
                        <div className="error-image-container"></div>
                        <p>Sorry, this page is broken</p>
                    </div>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;