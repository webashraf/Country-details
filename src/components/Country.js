import React from 'react';

const Country = (props) => {
    const {name, population, flags} = props.cDetails;
    const btn = props.button;
    // console.log(props.cDetails);
    return (

        <div style={{border: '1px solid red', width: '600px', margin: '20px auto'}}>

            <h3>This is {name.common}</h3>
            <h5>{population}</h5>

            <img style={{height: '150px', display: 'block', margin: 'auto'}} src={flags.svg} alt=""/>

            <button onClick={() => btn(props.cDetails)}>Add People</button>

        </div>
    );
};

export default Country;