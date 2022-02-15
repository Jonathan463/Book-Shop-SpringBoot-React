import React from 'react';

class Welcome extends React.Component{
    render(){
        return(
            <div className="p-5 mb-4 bg-secondary text-white rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold d-flex align-items-center justify-content-center text-center">Welcome To Book Shop</h1>
                    <blockquote className="blockquote mb-0">
                    <p className="fs-4 d-flex align-items-center justify-content-center text-center">
                        Good friends, good books, and a sleepy conscience: this is the ideal life.
                    </p>
                    <footer className="blockquote-footer d-flex align-items-center justify-content-center text-center text-black-50">
                        Mark Twain
                    </footer>
                    </blockquote>
                </div>
            </div>
        )
    }
}

export default Welcome;