
export default function SearchBar({setQuery}) {
     
  return (
    <div className="search-container">
          <i className="fa-solid fa-magnifying-glass" style={{color: "#999"}}></i>
          <input type="text" placeholder="Search for a Country...." onChange={(e)=>setQuery(e.target.value.toLowerCase())}/>
        </div>
  )
}
