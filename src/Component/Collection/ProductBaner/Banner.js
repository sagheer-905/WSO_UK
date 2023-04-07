import React from 'react'

function BannerPro() {
  return (
    <>
            {/* <!--------- Collection Filters Section Start ----------> */}
        <div class="collection-filters container-fluid mb-4 px-lg-5">
            <div class="row justify-content-between align-items-center gy-3 gy-lg-0">
                {/* <!-- filters section Start --> */}
                <div class="col-6 col-lg-3 col-xl-2 order-1">
                    <button class="btn filter-btn" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#filtersDrawer" aria-controls="filter-drawer"><i class="bi bi-sliders me-2"></i>
                        Filter</button>

                    <div class="offcanvas offcanvas-start" tabindex="-1" id="filtersDrawer"
                        aria-labelledby="offcanvasfilterLabel">
                        <div class="offcanvas-header border-bottom mx-4 px-0">
                            <h5 id="offcanvasfilterLabel" class="text-uppercase">Filter</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body px-4">
                            <div class="accordion accordion-flush" id="FiltersAccordion">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="availability-filterbtn">
                                        <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#availability-filter" aria-expanded="false" aria-controls="availability-filter">
                                            Availability
                                        </button>
                                    </h2>
                                    <div id="availability-filter" class="accordion-collapse collapse"
                                        aria-labelledby="availability-filterbtn" data-bs-parent="#FiltersAccordion">
                                        <div class="accordion-body">
                                            <ul class="list-unstyled m-0">
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="availabilityfilter" value="In Stock"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">In Stock</span></span>
                                                        <span><span class="tag_counter">(23)</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="availabilityfilter" value="Out of Stock"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Out of Stock </span></span>
                                                        <span><span class="tag_counter">(17)</span></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="price-filterbtn">
                                        <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#price-filter" aria-expanded="false" aria-controls="price-filter">
                                            Price
                                        </button>
                                    </h2>
                                    <div id="price-filter" class="accordion-collapse collapse"
                                        aria-labelledby="price-filterbtn" data-bs-parent="#FiltersAccordion">
                                        <div class="accordion-body">
                                            <div class="selector">
                                                <div class="price-slider">
                                                    <span id="min-price" data-currency="£" class="slider-price">0</span><span id="max-price" data-currency="£" data-max="150" class="slider-price">150</span>
                                                    <div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                                        <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                                                        <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                                                    </div> 
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="prodType-filterbtn">
                                        <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#prodType-filter" aria-expanded="false" aria-controls="prodType-filter">
                                            Product Type
                                        </button>
                                    </h2>
                                    <div id="prodType-filter" class="accordion-collapse collapse"
                                        aria-labelledby="prodType-filterbtn" data-bs-parent="#FiltersAccordion">
                                        <div class="accordion-body">
                                            <ul class="list-unstyled m-0">
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="availabilityfilter" value="Clothing"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Clothing</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="availabilityfilter" value="Collections"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Collections</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="availabilityfilter" value="Dresses"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Dresses</span></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="brand-filterbtn">
                                        <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#brand-filter" aria-expanded="false" aria-controls="brand-filter">
                                            Brand
                                        </button>
                                    </h2>
                                    <div id="brand-filter" class="accordion-collapse collapse"
                                        aria-labelledby="brand-filterbtn" data-bs-parent="#FiltersAccordion">
                                        <div class="accordion-body">
                                            <ul class="list-unstyled m-0">
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="availabilityfilter" value="Wholesale Clothing"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Wholesale Clothing</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="availabilityfilter" value="M Looks Fashion"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">M Looks Fashion</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="availabilityfilter" value="Europa Fashions"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Europa Fashions</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="availabilityfilter" value="Crazy Girl"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Crazy Girl</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="availabilityfilter" value="KR Wholesale"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">KR Wholesale</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="availabilityfilter" value="BE Apparel"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">BE Apparel</span></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="byColor-filterbtn">
                                        <button class="accordion-button collapsed text-uppercase" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#byColor-filter"
                                            aria-expanded="false" aria-controls="byColor-filter">
                                            By Color
                                        </button>
                                    </h2>
                                    <div id="byColor-filter" class="accordion-collapse collapse"
                                        aria-labelledby="byColor-filterbtn" data-bs-parent="#FiltersAccordion">
                                        <div class="accordion-body">
                                            <div class="colorfilters_container">
                                                <span class="color_red colorfilter_span">
                                                    <span class="color_title">Red</span>
                                                </span>
                                                <span class="color_yellow colorfilter_span">
                                                    <span class="color_title">Yellow</span>
                                                </span>
                                                <span class="color_black colorfilter_span">
                                                    <span class="color_title">Black</span>
                                                </span>
                                                <span class="color_baby-pink colorfilter_span">
                                                    <span class="color_title">Baby Pink</span>
                                                </span>
                                                <span class="color_gucci-green colorfilter_span">
                                                    <span class="color_title">Gucci Green</span>
                                                </span>
                                                <span class="color_grey colorfilter_span">
                                                    <span class="color_title">Grey</span>
                                                </span>
                                                <span class="color_green colorfilter_span">
                                                    <span class="color_title">Green</span>
                                                </span>
                                                <span class="color_rust colorfilter_span">
                                                    <span class="color_title">Rust</span>
                                                </span>
                                                <span class="color_mustard-yellow colorfilter_span">
                                                    <span class="color_title">Mustard Yellow</span>
                                                </span>
                                                <span class="color_petrol colorfilter_span">
                                                    <span class="color_title">Petrol</span>
                                                </span>
                                                <span class="color_orange colorfilter_span">
                                                    <span class="color_title">Orange</span>
                                                </span>
                                                <span class="color_khaki colorfilter_span">
                                                    <span class="color_title">Khaki</span>
                                                </span>
                                                <span class="color_royal-blue colorfilter_span">
                                                    <span class="color_title">Royal Blue</span>
                                                </span>
                                                <span class="color_red colorfilter_span">
                                                    <span class="color_title">Red</span>
                                                </span>
                                                <span class="color_yellow colorfilter_span">
                                                    <span class="color_title">Yellow</span>
                                                </span>
                                                <span class="color_black colorfilter_span">
                                                    <span class="color_title">Black</span>
                                                </span>
                                                <span class="color_baby-pink colorfilter_span">
                                                    <span class="color_title">Baby Pink</span>
                                                </span>
                                                <span class="color_gucci-green colorfilter_span">
                                                    <span class="color_title">Gucci Green</span>
                                                </span>
                                                <span class="color_grey colorfilter_span">
                                                    <span class="color_title">Grey</span>
                                                </span>
                                                <span class="color_green colorfilter_span">
                                                    <span class="color_title">Green</span>
                                                </span>
                                                <span class="color_rust colorfilter_span">
                                                    <span class="color_title">Rust</span>
                                                </span>
                                                <span class="color_mustard-yellow colorfilter_span">
                                                    <span class="color_title">Mustard Yellow</span>
                                                </span>
                                                <span class="color_petrol colorfilter_span">
                                                    <span class="color_title">Petrol</span>
                                                </span>
                                                <span class="color_orange colorfilter_span">
                                                    <span class="color_title">Orange</span>
                                                </span>
                                                <span class="color_khaki colorfilter_span">
                                                    <span class="color_title">Khaki</span>
                                                </span>
                                                <span class="color_royal-blue colorfilter_span">
                                                    <span class="color_title">Royal Blue</span>
                                                </span>
                                                <span class="color_green colorfilter_span">
                                                    <span class="color_title">Green</span>
                                                </span>
                                                <span class="color_rust colorfilter_span">
                                                    <span class="color_title">Rust</span>
                                                </span>
                                                <span class="color_mustard-yellow colorfilter_span">
                                                    <span class="color_title">Mustard Yellow</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="byMaterial-filterbtn">
                                        <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#byMaterial-filter" aria-expanded="false" aria-controls="byMaterial-filter">
                                            By Material
                                        </button>
                                    </h2>
                                    <div id="byMaterial-filter" class="accordion-collapse collapse"
                                        aria-labelledby="byMaterial-filterbtn" data-bs-parent="#FiltersAccordion">
                                        <div class="accordion-body">
                                            <ul class="list-unstyled m-0">
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="materialfilter" value="Mix Fabric"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Mix Fabric</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="materialfilter" value="Polyester"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Polyester</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="materialfilter" value="Cotton"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Cotton</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="materialfilter" value="Viscose"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Viscose</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="materialfilter" value="Acrylic"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Acrylic</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="materialfilter" value="Chiffon"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Chiffon</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="materialfilter" value="Wool"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Wool</span></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="bySize-filterbtn">
                                        <button class="accordion-button collapsed text-uppercase" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#bySize-filter"
                                            aria-expanded="false" aria-controls="bySize-filter">
                                            By Size
                                        </button>
                                    </h2>
                                    <div id="bySize-filter" class="accordion-collapse collapse"
                                        aria-labelledby="bySize-filterbtn" data-bs-parent="#FiltersAccordion">
                                        <div class="accordion-body">
                                            <ul class="list-unstyled m-0">
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="sizefilter" value="One Size"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">One Size</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="sizefilter" value="Plus Size"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Plus Size</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="sizefilter" value="Regular Size"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Regular Size</span></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="bySeason-filterbtn">
                                        <button class="accordion-button collapsed text-uppercase" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#bySeason-filter"
                                            aria-expanded="false" aria-controls="bySeason-filter">
                                            By Season
                                        </button>
                                    </h2>
                                    <div id="bySeason-filter" class="accordion-collapse collapse"
                                        aria-labelledby="bySeason-filterbtn" data-bs-parent="#FiltersAccordion">
                                        <div class="accordion-body">
                                            <ul class="list-unstyled m-0">
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="seasonfilter" value="All Season"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">All Season</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="seasonfilter" value="Summer"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Summer</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="seasonfilter" value="Winter"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Winter</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="seasonfilter" value="Spring Summer"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Spring Summer</span></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="tag_checkbox_Wrapper">
                                                        <input type="checkbox" class="tag_input" name="seasonfilter" value="Autumn Winter"/>
                                                        <span class="tag_checkbox"></span>
                                                        <span><span class="tag_text">Autumn Winter</span></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- filters section End --> */}

                {/* <!-- products number section Start --> */}
                <div class="col-lg-4 text-center order-3 order-lg-2">
                    <p>40 Products</p>
                </div>
                {/* <!-- products number section End--> */}

                {/* <!-- product sorting section Start --> */}
                <div class="col-6 col-lg-3 col-xl-2 order-2 order-lg-3">
                    <select class="form-select collection-sorting" aria-label="Default select example">
                        <option selected>Sort</option>
                        <option value="1">Featured</option>
                        <option value="2">Best Selling</option>
                        <option value="3">Alphabetically, A-Z</option>
                        <option value="4">Alphabetically, Z-A</option>
                        <option value="4">Price, low to high</option>
                        <option value="4">Price, high to low</option>
                        <option value="4">Date, new to old</option>
                        <option value="4">Date, old to new</option>
                    </select>
                </div>
                {/* <!-- product sorting section End --> */}
            </div>
        </div>
        {/* <!--------- Collection Filters Section End  ----------> */}
    </>
  )
}

export default BannerPro
