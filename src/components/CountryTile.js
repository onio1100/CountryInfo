export default function CountryTile(props) {
    return(
        <div className="tile" onClick={() => {props.eventHandler(props.country)}}>
            <img src={props.country.flags.png} alt={props.country.flags.alt} className="tile__img"/>
            <p className="tile__name">{props.country.name.common}</p>
        </div>
    )
}