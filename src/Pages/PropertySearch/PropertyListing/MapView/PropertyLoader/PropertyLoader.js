import "./PropertyLoader.scss";

const PropertyLoader = () => {
  return (
    <div className="country border-2 bg-gray-300 rounded-lg px-4 py-12 ">
      <div className="country-header loader-heading">
        <span className="loader-country-element"></span>
      </div>
      <div className="country-section">
        <h3 className="country-name">
          {" "}
          <div className="loading loading04 text-heading2 font-bold">
            <span>P</span>
            <span>R</span>
            <span>O</span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
            <span>T</span>
            <span>Y</span>
          </div>
        </h3>
        <div className="country-data loader-data font-bold">
          <div className="country-population ">
            Address:
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="country-region">
            Rent:
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="country-capital">
            Key Points:
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyLoader;
