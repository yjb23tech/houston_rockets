import position_icon from "../public/images/position_icon.png"
import scoring_icon from "../public/images/scoring_icon.png"
import team_icon from "../public/images/team_icon.png"

const Card = (props) => {
    return (
        <div>
            <img src={`images/${props.nba_champ_img}`} className="nba-champ-img"/>
            <div>
                <h1>{props.nba_champ_player_name}</h1>
                <div>
                    <img src={position_icon} />
                    <p>{props.nba_champ_position}</p>
                </div>
                <div>
                    <img src={scoring_icon} />
                    <p>{props.nba_champ_season_average}</p>
                </div>
                <div>
                    <img src={team_icon} />
                    <p>{props.nba_champ_team}</p>
                </div>
            </div>
        </div>
    )
}

export default Card; 