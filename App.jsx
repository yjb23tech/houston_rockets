import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <h1>NBA</h1>
            <Card 
                nba_champ_img = "dn_nba_champ.jpeg"
                nba_champ_player_name = "Dirk Nowitzki"
                nba_champ_position = "Small Forward"
                nba_champ_season_average = "29.9 Points"
                nba_champ_team = "Dallas Mavericks"
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

