import React from "react";

//Defines the member card as a separate component.
function MemberCard(props) {

    return (
        // Picture div, Info div (Name + Title), Potentially icons div for link.
        <div card-container>
            <div className="picture-header">
                <img src={props.img} alt={props.alt}/>
                </div>
            <div className="info">
                <h3>{props.name}</h3>
                <span>{props.title}</span>
            <div className="icons">
                <a href="https://www.linkedin.com/" 
                className="fab fa-linkedin">
                </a>
            </div>
            {/* icons div */}
            </div> 
            {/* info div */}
          </div>
    );
}