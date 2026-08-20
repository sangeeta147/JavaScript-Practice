var api = "https://api.cricapi.com/v1/currentMatches?apikey=35f59886-afd4-4a8c-8965-07e3685a0cde&offset=0";

setInterval(() => {

    fetch(api)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log("Error Found:", err);
        });

}, 3000);