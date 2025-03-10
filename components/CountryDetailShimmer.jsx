import "./CountryDetailShimmer.css"
export default function CountryDetailShimmer() {
  return (
    <div className="country-details-container">
       <a className="back-btn shimmer-back-btn"></a>
       <div className="country-details">
        <div className="shimmer-image"></div>
        <div className="details-text-container">
            <h1 className="country-name shimmer-country-name"></h1>
            <div className="details-text shimmer-details-text">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>  
                <p></p>  
            </div>
        </div>
       </div>
    </div>
  )
}
