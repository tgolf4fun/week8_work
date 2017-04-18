function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return decodeURIComponent(sParameterName[1]);
        }
    }
}
var myName = GetURLParameter('name');
var myName = myName.replace("+", " ");

 $('#signup').html("Thank you" + " " + myName + " " + "the requested information will be sent to you shortly");
console.log(myName);
