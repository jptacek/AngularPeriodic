
var _warehouseCustomerId = '4127561';
var _dealerNumber = '943802';
var _warehouseCode1 = 'CLW';
var _warehouseCode2 = 'MAW';
var _warehouseCode3 = 'WAW';

function getQuerystringFromJavascript(key) {
    //Notice that both possible parameters are pre-defined.
    //Which is probably not required if using proper object notation
    //in query string, or if variable-variables are possible in js.
    var header;
    var returnValue;

    //script gets the src attribute based on ID of page's script element:
    var requestURL = document.getElementById("queryScript").getAttribute("src");

    //next use substring() to get querystring part of src
    var queryString = requestURL.substring(requestURL.indexOf("?") + 1, requestURL.length);

    //Next split the querystring into array
    var params = queryString.split("&");

    for (var i = 0; i < params.length; i++) {
        var name = params[i].substring(0, params[i].indexOf("="));
        var value = params[i].substring(params[i].indexOf("=") + 1, params[i].length);

        if (isNaN(parseInt(value))) {
            params[i] = params[i].replace(value, "'" + value + "'");
        }

        if (name == key) {
            returnValue = value;
        }
    }

    return returnValue;
}

function showSpecialOfferHover(e) {
    //if (!$.browser.msie) {
    //    $('.specialOfferHover').css({ left: e.pageX - 370, top: e.pageY - 100 });
    //    $('.specialOfferHover').offset({ left: e.pageX - 370, top: e.pageY - 100 });
    //} else {
    //    $('.specialOfferHover').css({ left: e.pageX + -190, top: e.pageY - 100 });
    //    $('.specialOfferHover').offset({ left: e.pageX + -190, top: e.pageY - 100 });
    //}
}

function getQuerystringFromUrl(key, default_) {
    if (default_ == null)
        default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.location.href);
    if (qs == null)
        return default_;
    else
        return qs[1];
}

function getManufacturerImage(manufacturerName) {
    var imageUrl;

    imageUrl = "<img src=/Images/DealerImages/" + manufacturerName.replace(/\s+/g, '') + ".jpg alt='" + manufacturerName + " logo' />";
    return imageUrl;
}

function GetStock() {
    var html = "";
    var min = 0;
    var max = 6;
    var r = Math.floor(Math.random() * (max - min + 1)) + min;
    var r = r * 2;

    if (Math.floor((Math.random() * 2) + 1) == 1 && Math.floor((Math.random() * 2) + 1) == 1) {
        html = html + '<div class="featured-inventory">Store*: ' + r + "  ";
        max = 12;
        r = Math.floor(Math.random() * (max - min + 1)) + 1;
        r = r * 2;
        html = html + '<span title="Estimated Delivery: ' + Math.floor((Math.random() * 2) + 1) + ' day(s).">Warehouse: ' + r + '</br></span><span class="stocking">*Stocking Item</span></div></div>';
    } else {
        html = html + '<div class="featured-inventory">Store: ' + r + "  ";
        max = 12;
        r = Math.floor(Math.random() * (max - min + 1)) + 1;
        r = r * 2;
        html = html + '<span title="Estimated Delivery: ' + Math.floor((Math.random() * 2) + 1) + ' day(s).">Warehouse: ' + r + '</br><span class="stocking">&nbsp;</span></span></div></div>';
    }

    return html;
}

function getDatePlusThirtyDays() {
    var td = new Date();
    td.setDate(td.getDate() + 30);
    var tdate = td.getDate();
    var tmonths = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    var tmonth = tmonths[td.getMonth()];
    var tyear = td.getFullYear();
    return (tmonth + ' ' + tdate + ', ' + tyear);
}

function GetTireType(tireType) {
    var abbrevIndex = tireType.indexOf("-") + 1;
    return tireType.substring(abbrevIndex);
}


var makeYearsForDisplay = new Array();

makeYearsForDisplay.push(2013);
makeYearsForDisplay.push(2012);
makeYearsForDisplay.push(2011);
makeYearsForDisplay.push(2010);
makeYearsForDisplay.push(2009);
makeYearsForDisplay.push(2008);
makeYearsForDisplay.push(2007);
makeYearsForDisplay.push(2006);
makeYearsForDisplay.push(2005);
makeYearsForDisplay.push(2004);
makeYearsForDisplay.push(2003);
makeYearsForDisplay.push(2002);
makeYearsForDisplay.push(2001);
makeYearsForDisplay.push(2000);

var autoManufacturer = (function () {
    function autoManufacturer() {
        this.manufacturerName = '';
    }
    return autoManufacturer;
})();
var autoManufacturers = (function () {
    function autoManufacturers() {
        this.d = new Array();
    }
    return autoManufacturers;
})();

var itemData;
var autoManufacturerData = new autoManufacturers();

itemData = new autoManufacturer();
itemData.manufacturerName = 'Honda';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Acura';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Alfa Romeo';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'AM General';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'American Motors';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Audi';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Avanti';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Bentley';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Bertone';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'BMW';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Buick';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Cadillac';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Chevrolet';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Chrysler';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Coda';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Daewoo';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Daihatsu';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'DeLorean';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Dodge';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Eagle';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Ferrari';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Fiat';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Ford';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Freightliner';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Geo';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'GMC';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Hummer';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Infiniti';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Isuzu';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Jaguar';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Jeep';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Kia';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Lamborghini';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Land Rover';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Lexus';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Lincoln';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Lotus';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Maserati';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Maybach';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Mazda';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'McLaren';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Mercedes-Benz';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Mercury';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Merkur';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Mini';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Mitsubishi';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Nissan';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Oldsmobile';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Panoz';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Peugeot';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Pininfarina';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Plymouth';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Pontiac';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Porsche';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'RAM';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Renault';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Rolls Royce';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Saab';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Saturn';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Scion';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Smart';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'SRT';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Sterling';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Subaru';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Suzuki';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Tesla';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Toyota';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Volkswagen';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Volvo';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'VPG';
autoManufacturerData.d.push(itemData);

itemData = new autoManufacturer();
itemData.manufacturerName = 'Yugo';
autoManufacturerData.d.push(itemData);

function popupQuote(tires) {
    $('#additionalServices').hide();
    $('#page-cover').hide();
    var w = window.open('', '_blank', 'height=900, width=700, toolbar = 1, location = 0, menubar = 1, scrollbars=1');
    var html = '';

    var d = new Date();
    var date = d.getDate();
    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    var month = months[d.getMonth()];
    var year = d.getFullYear();
    var dateString = month + ' ' + date + ', ' + year;

    var i = 0;
    for (i = 0; i < tires.length; i++) {
        var currentTire = tires[i];
        var tirePrice = currentTire.priceField * 4;
        var finalPrice = tirePrice + 179;

        //each loop builds one tire page
        html = html + '<div class="printedQuote">';
        html = html + '<div class="printedQuoteTop">';
        html = html + '<div class="printedLogo"><img src="../../Images/Assets/honda-logo.png"></div>';
        html = html + '<div class="printedDealerInfo"><div style="font-size: 16px; font-weight: bold;">DEALERSHIP NAME</div><div style="margin-top: 5px;">123 Main Street</div><div>Somewhere, CA | 999-555-1212</div></div>';

        html = html + '<div class="printedDate"><button type="button">Print</button><button type="button">Email</button><br/>' + dateString + '</div>';
        html = html + '</div>';

        html = html + '<div class="printedPricePledge">' + '<span class="bolded">Price Pledge</span> - We\'ll beat any advertised price on the tires we sell...Guaranteed!*' + '</div><br/><br/>';

        html = html + '<div class="printedLeft"><div class="printedManufacturerImage">' + getManufacturerImage(currentTire.manufacturerDescriptionField) + '</div>';
        html = html + '<div class="printedTireName">' + currentTire.productNameField + '</div><br/><br/>';

        html = html + '<div class="printedImage">' + '<img src = \"' + currentTire.imageUrlField + '"/>' + '</div>';
        html = html + '<div class="printedPricing">' + 'PRICING (Set of 4 tires)<br/><br/>';
        html = html + '<div class="printedPricingLeft">Retail Price</div><div class="printedPricingRight">$' + tirePrice.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</div>';
        html = html + '<div class="printedPricingLeft">Mount & Balance</div><div class="printedPricingRight">' + '$80.00' + '</div>';
        html = html + '<div class="printedPricingLeft">Nitrogen Service</div><div class="printedPricingRight">' + '$20.00' + '</div>';
        html = html + '<div class="printedPricingLeft">Alignment</div><div class="printedPricingRight">' + '$79.00' + '</div>';
        html = html + '<hr/>';
        html = html + '<div class="printedPricingLeft">Final Price</div><div class="printedPricingRight">$' + finalPrice.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</div>';

        html = html + '</div><br/><br/>';

        html = html + '<div class="printedBenefits"><span class="printedHeader">Benefits</span><ul>' + parseTextForListItems(currentTire.techBenefitsField) + '</ul></div><br/><br/>';
        html = html + '<div class="printedBenefits"><span class="printedHeader">Features</span><ul>' + parseTextForListItems(currentTire.techFeaturesField) + '</ul></div>';
        html = html + '</div>';

        html = html + '<div class="printedRight">';
        html = html + '<div class="printedBenefits"><span class="printedHeader">Specifications</span><br/>';
        html = html + '<div class="printedPricingLeft">Part Number:</div><div class="printedPricingRight">' + (currentTire.partNumberField || "") + '</div>';
        html = html + '<div class="printedPricingLeft">Size:</div><div class="printedPricingRight">' + (currentTire.tireSizeField || "") + '</div>';
        html = html + '<div class="printedPricingLeft">Load Rating:</div><div class="printedPricingRight">' + (currentTire.loadRatingField || "") + '</div>';
        html = html + '<div class="printedPricingLeft">Speed Rating:</div><div class="printedPricingRight">' + (currentTire.speedRatingField || "") + '</div>';
        html = html + '<div class="printedPricingLeft">Sidewall Color:</div><div class="printedPricingRight">' + (currentTire.sidewallTypeField || "") + '</div>';
        html = html + '<div class="printedPricingLeft">Ply Rating:</div><div class="printedPricingRight">' + (currentTire.plyRatingField || "") + '</div>';
        html = html + '<div class="printedPricingLeft">Load Capacity:</div><div class="printedPricingRight">' + (currentTire.loadCapacityRatingField || "") + '</div>';
        html = html + '<div class="printedPricingLeft">Max Tire Pressure:</div><div class="printedPricingRight">' + (currentTire.inflationPressureRatingField || "") + '</div>';
        html = html + '<div class="printedPricingLeft">UTQG:</div><div class="printedPricingRight">' + (currentTire.uTQGField || "") + '</div>';
        html = html + '<div class="printedPricingLeft">Mileage Warranty:</div><div class="printedPricingRight">' + (currentTire.mileageWarrantyField || "") + '</div><br/><br/><br/><br/>';

        if (currentTire.manufacturerDescriptionField == "COOPER") {
            html = html + '<div class="printedCouponOffer">';
            html = html + '<div class="printedCouponImage"><img src="../../Images/Assets/Cooper-Rebate.jpg"></div><br/>';
            html = html + '<div class="couponDisclaimer">This offer is contingent on the purchase of a new set of four (4) qualifying Cooper Tires (in a single transaction) from May 1 through June 30, 2013. Mail-in requests must be postmarked no later than July 31, 2013 and received no later than August 9, 2013. Late submissions will not be accepted. Allow 6 to 8 weeks after Sponsor receives the mail-in request for delivery of the Visa prepaid card.<br/><br/>Offer amount is based on the qualifying tires purchased and the availability of qualifying new tires at the time of purchase. $60 reward is available for the following qualifying tires purchased: Cooper CS4 Touring, Discoverer H/T, Discoverer HTP**, Discoverer LSX**, and Discoverer LSX Plus** Tires. $70 reward is available for the following qualifying tires purchased: Cooper Zeon RS3-A. $80 reward is available for the following qualifying tires purchased: Discoverer CTS, Cooper Zeon RS3-S. Substitutions are not eligible.<br/><br/><span class="italic">** Available at select retailers.</span></div>';

            html = html + '</div>';
        }

        html = html + '</div>';

        html = html + '</div>';

        html = html + '<div class="printedQuoteBottom">Prices valid until ' + getDatePlusThirtyDays() + '<br/>' + '<span class="priceEligibility">* Requires presentation of competitor\'s current price ad/offer on the exact tire within 30 days of purchase. See participating dealership for details.</span></div>';

        html = html + '</div>';
    }
    w.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">');
    w.document.write('<link rel="stylesheet" href="../../Content/popupQuote.css" type="text/css" />');

    w.document.write(html);
}

function parseTextForListItems(stringToParse) {
    stringToParse = stringToParse.replace(/\*/gi, "<li>");

    return stringToParse;
}
