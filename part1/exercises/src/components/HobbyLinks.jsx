export default function HobbyLinks() {
    let hobbyLinks = ["https://dnd.wizards.com/", "https://www.rocketleague.com/en"];
    return (
        <div>
            <h3>Hobby Links</h3>
            <a href={hobbyLinks[0]}>D&D</a>
            <br></br>
            <a href={hobbyLinks[1]}>Rocket League</a>
        </div>
    );
}