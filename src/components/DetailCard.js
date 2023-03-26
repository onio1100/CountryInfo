export default function DetailCard(props){
    let country = props.country;

    return(
        <div className="detail-info">
            <button className="di__cross" onClick={() => {props.handleClose(false)}}>X</button>
            <div className="di__img-wraper">
                <img src={country.flags.png} alt={country.flags.alt} />
            </div>
            <ul className="di__list">
                <li>Common name: {country.name.common}</li>
                <li>Official name: {country.name.official}</li>
                <li>Population: {country.population}</li>
                <li>Area in square kilometers: {country.area}</li>
                <li>Capital: {country.capital[0]}</li>
                <li>{country.name.common} neighbors: <ul className="di__neighbors_list">{props.handleNeighbros(country)}</ul></li>
                <li>{country.name.common} {country.unMember ? "is member of United Nations" : "is not member of United Nations"}</li>
            </ul>
        </div>
    )
}