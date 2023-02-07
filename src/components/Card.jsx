import React from "react"

function Card ( props ) {

    return(
        <div className="card">
            <div className='leagueName'>
                    {props.data.tip.leagueName}
            </div>
            <div className="teams">
                <div className="HomeTeam">
                    {props.data.tip.homeTeam}
                </div>
                <div className="against">-</div>
                <div className="AwayTeam">
                    {props.data.tip.awayTeam}
                </div>
            </div>
            <div className="tipGiven">
                {props.data.tip.tip}
            </div>
            <div className="matchTime">
                18:00
            </div>
        </div>
    )
}


export default Card