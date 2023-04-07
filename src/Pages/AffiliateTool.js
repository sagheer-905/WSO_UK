import React from 'react'
import { Link } from 'react-router-dom'
import AffiliateFooter from '../Component/AffiliateProgram/AffiliateFooter/AffiliateFooter'
import img from "../images/homepage/wso-logo.png"
function AffiliateTool() {
  return (
    <div>
      <div >
  {/*------ Affiliate Header Start-----*/}
  <header className="text-center py-4">
    <Link to='/AffiliateProgram'>
      <img src={img} alt="..." className="img-fluid" />
    </Link>
  </header>
  {/*------ Affiliate Header End-----*/}
  {/*------ page content Start ------*/}
  <div className="container affiFooter_pageContent pt-2 pb-5">
  <ul className="nav nav-tabs gap-2" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <Link to="/AffiliateComissions">
          <button className="nav-link" id="reports-tab" data-bs-toggle="tab" data-bs-target="#reports-tab-pane" type="button" role="tab" aria-controls="reports-tab-pane" aria-selected="false">Reports</button>
        </Link>
      </li>
      <li className="nav-item" role="presentation">
        <Link to='/AffiliateTool'>
          <button className="nav-link" id="tools-tab" data-bs-toggle="tab" data-bs-target="#tools-tab-pane" type="button" role="tab" aria-controls="tools-tab-pane" aria-selected="true">Tools</button>
        </Link>
      </li>
      <li className="nav-item" role="presentation">
        <Link to="/AffiliateReporting">
          <button className="nav-link active" id="commission-tab" data-bs-toggle="tab" data-bs-target="#commission-tab-pane" type="button" role="tab" aria-controls="commission-tab-pane" aria-selected="false">Commission Details</button>
        </Link>
      </li>
    </ul>
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active py-4" id="tools-tab-pane" role="tabpanel" aria-labelledby="tools-tab" tabIndex={0}>
        <h3 className="fw-semibold mb-3">Affiliate Toolbar</h3>
        <p>Use our Affiliate Toolbar to easily add links and for a quick view of your earnings.</p>
        <h4 className="fw-semibold mb-3">Link to any Page</h4>
        <p>Navigate to any of our product details page and capture the links directly from page you are
          viewing. You can even build shortlinks from the sitestripe toolbar.</p>
        <h4 className="fw-semibold mb-3">Share on Twitter and Facebook</h4>
        <p>Post a quick update to Facebook or Twitter with a link to the product page you are viewing.</p>
        <h4 className="fw-semibold mb-3">Product Links</h4>
        <p>Link to a specific product on our page and show information about that product. Build customized
          image links to our products.</p>
        <p>Enhance your product links with product previews or use easy links, high-converting promotional
          and announcement banners that we serve directly to your site.</p>
      </div>
      <div id="toolcontent-print" />
      <div className="text-end">
        <button className="btn border-0" id="download-toolContent">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="80px" id="Layer_1" style={{enableBackground: 'new 0 0 128 128'}} version="1.1" viewBox="0 0 128 128" width="128px" xmlSpace="preserve">
            <g>
              <path d="M90.249,107.596H40.916c-3.584,0-6.5-2.916-6.5-6.5V30.861c0-3.584,2.916-6.5,6.5-6.5h28.726   c3.152,0,7.367,1.746,9.596,3.975l13.537,13.537c2.229,2.229,3.975,6.444,3.975,9.596v49.627   C96.749,104.68,93.833,107.596,90.249,107.596z M40.916,27.361c-1.93,0-3.5,1.57-3.5,3.5v70.235c0,1.93,1.57,3.5,3.5,3.5h49.333   c1.93,0,3.5-1.57,3.5-3.5V51.469c0-2.333-1.446-5.826-3.096-7.475L77.116,30.457c-1.649-1.649-5.142-3.096-7.475-3.096H40.916z" style={{fill: '#313335'}} />
            </g>
            <g>
              <path d="M90.249,47.969H79.642c-3.584,0-6.5-2.916-6.5-6.5V30.861c0-3.013,1.617-4.082,3.003-4.082   c1.02,0,2.06,0.524,3.093,1.557l13.537,13.537c1.886,1.886,1.657,3.398,1.354,4.132C93.823,46.738,92.916,47.969,90.249,47.969z    M76.284,29.827c-0.062,0.16-0.143,0.476-0.143,1.034v10.608c0,1.93,1.57,3.5,3.5,3.5h10.607c0.558,0,0.874-0.081,1.034-0.143   c-0.069-0.157-0.235-0.438-0.63-0.832L77.116,30.457C76.722,30.063,76.441,29.896,76.284,29.827z" style={{fill: '#313335'}} />
            </g>
            <g>
              <path d="M95.249,36.905c-0.43,0-0.839-0.184-1.123-0.506l-10.367-11.72c-0.392-0.442-0.487-1.072-0.244-1.61   c0.242-0.538,0.777-0.884,1.367-0.884h3.714v-9.78c0-0.829,0.672-1.5,1.5-1.5h10.304c0.828,0,1.5,0.671,1.5,1.5v9.78h3.717   c0.59,0,1.125,0.346,1.367,0.884c0.243,0.538,0.147,1.168-0.244,1.61l-10.367,11.72C96.088,36.721,95.679,36.905,95.249,36.905z    M88.211,25.186l7.038,7.956l7.038-7.956h-1.888c-0.828,0-1.5-0.671-1.5-1.5v-9.78h-7.304v9.78c0,0.829-0.672,1.5-1.5,1.5H88.211z" style={{fill: '#EE3E36'}} />
            </g>
            <g>
              <path d="M53.815,92.034H51.24v3.929c0,0.562-0.132,0.988-0.397,1.278c-0.265,0.29-0.6,0.436-1.003,0.436   c-0.423,0-0.764-0.144-1.022-0.431c-0.259-0.288-0.389-0.708-0.389-1.264V85.284c0-0.619,0.143-1.061,0.426-1.326   c0.284-0.265,0.735-0.397,1.354-0.397h3.606c1.066,0,1.888,0.082,2.462,0.246c0.567,0.158,1.059,0.42,1.472,0.786   c0.414,0.366,0.728,0.814,0.942,1.344c0.215,0.53,0.322,1.127,0.322,1.79c0,1.414-0.436,2.485-1.307,3.214   C56.836,91.669,55.539,92.034,53.815,92.034z M53.134,85.672H51.24v4.241h1.894c0.663,0,1.217-0.069,1.662-0.208   c0.444-0.139,0.784-0.366,1.018-0.682c0.233-0.315,0.35-0.729,0.35-1.24c0-0.612-0.18-1.111-0.539-1.496   C55.22,85.877,54.39,85.672,53.134,85.672z" style={{fill: '#313335'}} />
              <path d="M63.104,83.561h3.664c0.952,0,1.771,0.088,2.452,0.265s1.3,0.508,1.855,0.994   c1.445,1.237,2.168,3.118,2.168,5.642c0,0.833-0.073,1.594-0.218,2.282c-0.146,0.688-0.369,1.308-0.673,1.86   c-0.303,0.552-0.69,1.046-1.164,1.481c-0.372,0.335-0.779,0.603-1.222,0.805c-0.441,0.202-0.916,0.344-1.425,0.426   c-0.508,0.082-1.08,0.123-1.718,0.123H63.16c-0.511,0-0.896-0.077-1.155-0.232s-0.428-0.373-0.506-0.653   c-0.079-0.281-0.118-0.645-0.118-1.093V85.284c0-0.606,0.135-1.045,0.406-1.316C62.059,83.696,62.497,83.561,63.104,83.561z    M64.192,85.785v9.42h2.13c0.467,0,0.833-0.013,1.099-0.038c0.265-0.025,0.539-0.088,0.823-0.189s0.53-0.243,0.738-0.426   c0.94-0.795,1.411-2.165,1.411-4.108c0-1.37-0.207-2.396-0.62-3.077c-0.414-0.682-0.924-1.115-1.529-1.302   c-0.605-0.186-1.338-0.279-2.196-0.279H64.192z" style={{fill: '#313335'}} />
              <path d="M84.007,85.729h-5.538v3.55h4.63c0.429,0,0.749,0.096,0.961,0.289   c0.211,0.193,0.317,0.45,0.317,0.771c0,0.322-0.107,0.578-0.322,0.767s-0.533,0.284-0.956,0.284h-4.63v4.573   c0,0.581-0.131,1.012-0.393,1.292s-0.599,0.421-1.009,0.421c-0.416,0-0.756-0.142-1.018-0.426   c-0.262-0.284-0.393-0.713-0.393-1.288V85.284c0-0.404,0.06-0.734,0.18-0.99c0.12-0.255,0.308-0.441,0.563-0.558   c0.256-0.117,0.582-0.175,0.979-0.175h6.627c0.448,0,0.781,0.099,0.999,0.298c0.218,0.199,0.327,0.459,0.327,0.781   c0,0.328-0.109,0.592-0.327,0.791S84.455,85.729,84.007,85.729z" style={{fill: '#313335'}} />
            </g>
            <g>
              <path d="M46.426,78.998c-1.465,0-2.644-0.746-3.152-1.996c-0.847-2.078,0.374-4.936,3.35-7.842   c2.33-2.276,5.584-4.149,9.677-5.573c2.177-4.04,4.18-8.366,5.585-12.064c-3.111-4.839-3.685-10.813-2.597-14.151   c0.704-2.159,1.923-2.971,2.82-3.272c1.252-0.421,2.53-0.106,3.421,0.852c1.343,1.444,1.835,4.352,1.506,8.89   c-0.131,1.809-0.732,4.238-1.79,7.231c0.046,0.058,0.093,0.115,0.14,0.172c0.706,0.863,1.459,1.812,2.248,2.807   c1.684,2.123,3.576,4.508,5.5,6.646c0.569-0.018,1.117-0.026,1.646-0.026c6.798,0,11.363,1.422,12.854,4.004   c0.636,1.101,0.649,2.34,0.037,3.4c-0.826,1.431-2.613,2.285-4.781,2.285h-0.001c-0.525,0-1.068-0.051-1.613-0.152   c-2.732-0.504-5.731-2.56-9.404-6.455c-0.939,0.051-1.922,0.125-2.93,0.223c-2.165,0.208-6.343,0.753-10.573,2.086   c-1.82,3.287-5.737,9.926-8.658,11.835C48.606,78.618,47.472,78.998,46.426,78.998z M53.888,67.814   c-2.095,1.012-3.824,2.18-5.169,3.493c-2.643,2.582-2.815,4.2-2.667,4.563c0.043,0.105,0.228,0.127,0.374,0.127   c0.448,0,1.047-0.223,1.642-0.611C49.374,74.533,51.53,71.702,53.888,67.814z M76.053,63.691c2.264,2.099,4.164,3.272,5.766,3.568   c0.366,0.067,0.726,0.102,1.068,0.102c0.001,0,0.001,0,0.001,0c1.188,0,1.965-0.407,2.184-0.785c0.04-0.071,0.097-0.167-0.038-0.4   C84.53,65.305,82.074,63.87,76.053,63.691z M64.009,54.316c-1.047,2.574-2.322,5.356-3.708,8.093   c3.437-0.851,6.553-1.245,8.352-1.418c0.234-0.022,0.467-0.044,0.698-0.064c-1.431-1.686-2.807-3.42-4.068-5.01   C64.847,55.367,64.421,54.831,64.009,54.316z M63.209,36.916c-0.022,0-0.071,0.004-0.146,0.029   c-0.338,0.113-0.683,0.621-0.923,1.359c-0.72,2.208-0.434,5.923,1.065,9.346c0.477-1.622,0.762-2.985,0.837-4.023   c0.366-5.049-0.451-6.352-0.711-6.63C63.258,36.916,63.231,36.916,63.209,36.916z" style={{fill: '#EE3E36'}} />
            </g>
            <rect height={128} id="_x3C_Slice_x3E__11_" style={{fill: 'none'}} width={128} x="0.5" y="0.5" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  {/*------ page content Start ------*/}
<AffiliateFooter/>
</div>

    </div>
  )
}

export default AffiliateTool