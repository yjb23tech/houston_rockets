import position_icon from "../public/images/position_icon.png"
import scoring_icon from "../public/images/scoring_icon.png"
import team_icon from "../public/images/team_icon.png"

const Card = (props) => {
    return (
        <div className="nba-champ-card util-box-red">
            <img src={`images/${props.nba_champ_img}`} className="nba-champ-img util-box-blue"/>
            <div className="nba-champ-content util-box-orange">
                <h1>{props.nba_champ_player_name}</h1>
                <div className="info-group util-box-green">
                    <img src={position_icon} />
                    <p>{props.nba_champ_position}</p>
                </div>
                <div className="info-group util-box-green">
                    <img src={scoring_icon} />
                    <p>{props.nba_champ_season_average}</p>
                </div>
                <div className="info-group util-box-green">
                    <img src={team_icon} />
                    <p>{props.nba_champ_team}</p>
                </div>
            </div>
        </div>
    )
}

export default Card; 