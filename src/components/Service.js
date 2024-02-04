import React from 'react'

function Service(props) {
    return (
        <div className="service">
            

            <div>

                <h3>{props.serviceName}</h3>
                <p>{props.serviceDesc}</p>
            </div>
            
        </div>
    )
}

export default Service