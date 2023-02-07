import React from "react"

function CardHistory ( props ) {

     const time = new Date(
         props.data.tip.createdAt.seconds * 1000 + props.data.tip.createdAt.nanoseconds / 1000000
     ).toDateString()

    return(
        <div className="card">
            <div className='leagueName'>
                    {props.data.tip.leagueName}
            </div>
            <div className="teamsHistoryTip">
                <div className="HomeTeam">
                    {props.data.tip.homeTeam}
                </div>
                <div className="against">-</div>
                <div className="AwayTeam">
                    {props.data.tip.awayTeam}
                </div>
            </div>
            <div className="tipGivenHistory">
                <>
                    {
                        props.data.tip.state === 'won' ? 
                        <span class='green'>{props.data.tip.tip}</span> :
                        <span class='red'>{props.data.tip.tip}</span>
                    }
                </>
            </div>
            <div>
                <>
                    {
                        props.data.tip.state === 'won' ? 
                        <span className="ball greenBall"></span> :
                        <span className="ball redBall"></span>
                    }
                </>
            </div>
            <div className="matchTime">
                {time}
            </div>
        </div>
    )
}


export default CardHistory