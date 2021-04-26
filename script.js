fetch('https://api.covid19api.com/summary')
    .then(Response => Response.json())
    .then(data => {
    console.log(data);

    let cname = document.getElementsByClassName('countryname');
    cname[0].innerHTML = data.Countries[58].Country;

    var num1 = data.Countries[58].TotalConfirmed;
    var num2 = data.Countries[58].TotalRecovered;
    var num3 = data.Countries[58].TotalDeaths;
    var active = num1 - num2 - num3;

    let el = document.getElementsByClassName('container');
    el[0].innerHTML = "Active Cases: <br>" + active;
    el[1].innerHTML = "Total Confirmed: <br>" + data.Countries[58].TotalConfirmed + "<br> Total Recovered: <br>" + data.Countries[58].TotalRecovered
    + "<br> Total Deaths: <br>" + data.Countries[58].TotalDeaths;
    el[2].innerHTML = "New Confirmed: <br>" + data.Countries[58].NewConfirmed + "<br> New Revocered: <br>" + data.Countries[58].NewRecovered +
    "<br> New Deaths: <br>" + data.Countries[58].NewDeaths;

});

function fin() {
    fetch('https://api.covid19api.com/summary')
    .then(Response => Response.json())
    .then(data => {

    let cname = document.getElementsByClassName('countryname');
    cname[0].innerHTML = data.Countries[58].Country;

    var num1 = data.Countries[58].TotalConfirmed;
    var num2 = data.Countries[58].TotalRecovered;
    var num3 = data.Countries[58].TotalDeaths;
    var active = num1 - num2 - num3;

    let el = document.getElementsByClassName('container');
    el[0].innerHTML = "Active Cases: <br>" + active;
    el[1].innerHTML = "Total Confirmed: <br>" + data.Countries[58].TotalConfirmed + "<br> Total Recovered: <br>" + data.Countries[58].TotalRecovered
    + "<br> Total Deaths: <br>" + data.Countries[58].TotalDeaths;
    el[2].innerHTML = "New Confirmed: <br>" + data.Countries[58].NewConfirmed + "<br> New Revocered: <br>" + data.Countries[58].NewRecovered +
    "<br> New Deaths: <br>" + data.Countries[58].NewDeaths;

});
}

function uk() {
    fetch('https://api.covid19api.com/summary')
    .then(Response => Response.json())
    .then(data => {

    let cname = document.getElementsByClassName('countryname');
    cname[0].innerHTML = data.Countries[180].Country;

    var num1 = data.Countries[180].TotalConfirmed;
    var num2 = data.Countries[180].TotalRecovered;
    var num3 = data.Countries[180].TotalDeaths;
    var active = num1 - num2 - num3;

    let el = document.getElementsByClassName('container');
    el[0].innerHTML = "Active Cases: <br>" + active;
    el[1].innerHTML = "Total Confirmed: <br>" + data.Countries[180].TotalConfirmed + "<br> Total Recovered: <br>" + data.Countries[180].TotalRecovered
    + "<br> Total Deaths: <br>" + data.Countries[180].TotalDeaths;
    el[2].innerHTML = "New Confirmed: <br>" + data.Countries[180].NewConfirmed + "<br> New Revocered: <br>" + data.Countries[180].NewRecovered +
    "<br> New Deaths: <br>" + data.Countries[180].NewDeaths;

});
}

function swiss() {
    fetch('https://api.covid19api.com/summary')
    .then(Response => Response.json())
    .then(data => {

    let cname = document.getElementsByClassName('countryname');
    cname[0].innerHTML = data.Countries[166].Country;

    var num1 = data.Countries[166].TotalConfirmed;
    var num2 = data.Countries[166].TotalRecovered;
    var num3 = data.Countries[166].TotalDeaths;
    var active = num1 - num2 - num3;

    let el = document.getElementsByClassName('container');
    el[0].innerHTML = "Active Cases: <br>" + active;
    el[1].innerHTML = "Total Confirmed: <br>" + data.Countries[166].TotalConfirmed + "<br> Total Recovered: <br>" + data.Countries[166].TotalRecovered
    + "<br> Total Deaths: <br>" + data.Countries[166].TotalDeaths;
    el[2].innerHTML = "New Confirmed: <br>" + data.Countries[166].NewConfirmed + "<br> New Revocered: <br>" + data.Countries[166].NewRecovered +
    "<br> New Deaths: <br>" + data.Countries[166].NewDeaths;
});
}

function jp() {
    fetch('https://api.covid19api.com/summary')
    .then(Response => Response.json())
    .then(data => {

    let cname = document.getElementsByClassName('countryname');
    cname[0].innerHTML = data.Countries[84].Country;

    var num1 = data.Countries[84].TotalConfirmed;
    var num2 = data.Countries[84].TotalRecovered;
    var num3 = data.Countries[84].TotalDeaths;
    var active = num1 - num2 - num3;

    let el = document.getElementsByClassName('container');
    el[0].innerHTML = "Active Cases: <br>" + active;
    el[1].innerHTML = "Total Confirmed: <br>" + data.Countries[84].TotalConfirmed + "<br> Total Recovered: <br>" + data.Countries[84].TotalRecovered
    + "<br> Total Deaths: <br>" + data.Countries[84].TotalDeaths;
    el[2].innerHTML = "New Confirmed: <br>" + data.Countries[84].NewConfirmed + "<br> New Revocered: <br>" + data.Countries[84].NewRecovered +
    "<br> New Deaths: <br>" + data.Countries[84].NewDeaths;

});
}

const el = document.getElementById("fin");
el.addEventListener("click", fin, true);

const el1 = document.getElementById("uk");
el1.addEventListener("click", uk, true);

const el2 = document.getElementById("swiss");
el2.addEventListener("click", swiss, true);

const el3 = document.getElementById("jp");
el3.addEventListener("click", jp, true);