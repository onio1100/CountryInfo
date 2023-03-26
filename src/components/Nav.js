export default function Nav(props) {
    return(
        <nav>
            <h1>CountryInfo<a href="https://github.com/onio1100">.by(onio1100)</a></h1>
            <label className="switch">
                <input type="checkbox" onChange={props.handleThem} checked={props.them}/>
                <span className="slider"></span>
            </label>
        </nav>
    )
}