import React from 'react';

function Service(props) {
    const serviceStyle = {
        backgroundImage: `url(${props.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="service" style={serviceStyle}>
            <div>
                <h3>{props.serviceName}</h3>
                <p>{props.serviceDesc}</p>
            </div>
        </div>
    );
}

export default Service;