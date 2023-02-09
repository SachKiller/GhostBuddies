import React  from "react";

const Card = (props) => {
    const { name, email, id, username } = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={'https://robohash.org/${props.id}?200*200'}  />
            <div>
                <h2>{name}</h2>
                <p>{username} <br></br>
                   <h4>{email}</h4> 
                </p>
            </div>
        </div>
    );
}

export default Card;
