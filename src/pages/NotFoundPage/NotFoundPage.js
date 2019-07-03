import React, { Component } from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                <h1>404</h1>
                <h2>Không tìm thấy URL được yêu cầu trên máy chủ này.</h2>
            </div>
        );
    }
}

export default NotFoundPage;