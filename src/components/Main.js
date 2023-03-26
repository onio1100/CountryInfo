import CountryTile from "./CountryTile";
import DetailCard from "./DetailCard";
import { useEffect, useState} from "react"

export default function Main() {
    const [data, setData] = useState([]);
    const [showDetail, setShowDetail] = useState(false);
    const [serch, setSerch] = useState("");

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(resp => resp.json())
        .then(obresp => {setData(obresp)})
    },[])

    function handleSearch(e) {
        setSerch(e.target.value);
    }

    function countryTilesGrid(){
        let arr = []
        data.forEach((country, id) => {
            if(serch){
                if(country.name.common.toLowerCase().includes(serch.toLowerCase())){
                    arr.push(<CountryTile key={id}
                        country={country}
                        eventHandler={setShowDetail} />)
                }
            }else{
                arr.push(<CountryTile key={id}
                    country={country}
                    eventHandler={setShowDetail} />)
            }
        });
        return (
            <div className="grid-conteiner">
                {arr}
            </div>
        );
    }
    
    function creatNeighbersList(country){
        let neighbersArr = [];
        if("borders" in country){
            country.borders.forEach((neighber) => {
                data.forEach((country, id) => {
                    if(country.cca3 === neighber){
                        neighbersArr.push(<li className="di__neighber" onClick={() => setShowDetail(country)} key={id} >{country.name.common}</li>)
                    }
                })
            })
            return neighbersArr;
        }else{
            return <li>This country has no neighboring countries.</li>
        }
    }

    return(
        <main className={showDetail ? "main--detail" : "main--grid"}>
            {showDetail ? "" : (
                <div className="main__serch-wraper">
                    <input value={serch}
                        onChange={handleSearch}
                        className="main__serch"
                        placeholder="Serch" />
                </div>
            )}
            {data ? (
                showDetail ? <DetailCard country={showDetail} handleClose={setShowDetail} handleNeighbros={creatNeighbersList} /> : (
                countryTilesGrid() )
            ) : (
                <div>loading</div>
            )}
        </main>
    )
}