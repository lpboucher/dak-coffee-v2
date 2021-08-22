async function updateSubscription(id, endpoint = 'delete', url = 'https://dakcoffeeroasters.com/api/subscriptions') {
// Default options are marked with *
const response = await fetch(url + '/' + endpoint + '/' + id, {
        method: 'POST',
        body: JSON.stringify({}) // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JavaScript objects
}

function actionFeedback(data) {
    if (data.isSuccessful === true) {
        alert("Success!");
    } else {
        alert("It looks like there was an error, please write to info@dakcoffeeroasters.com to fix.")
    }
}
