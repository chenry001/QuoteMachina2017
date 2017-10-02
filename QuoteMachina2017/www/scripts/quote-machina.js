function quotemachina() {
    var mostRecent = -1;
    var getQuote = function (jsonIn) {

        var randomSelectNo = function (min, max, illegal) {
            var value = Math.floor(Math.random() * (max - min)) + min;
            if (value !== illegal) { return value; }
            else return randomSelectNo(min, max, illegal);
        } // "0 to length - 1"" (i.e no - 1 after min)

        var randomId = randomSelectNo(0, quotes.length, mostRecent)

        mostRecent = randomId; // initialized???

        var filteredQuote = '';
        filteredQuote = jsonIn.filter(function (val) {
            return (val.id == randomId);
        }); 

        console.log(filteredQuote[0]);

        $('#quote-data').show();
        //$('#app-title').text("Quote Machina 23");
        $('#quote').html(filteredQuote[0].text);
        $('#author').text(filteredQuote[0].person);
        $('#source').text(filteredQuote[0].source);
        $('#year').text(filteredQuote[0].year);
        $('#related').text(filteredQuote[0].recommended);

        return;
    } // end getQuote()
    getQuote(quotes);
    return;
} // end quoteMachina()
