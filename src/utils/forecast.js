const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e925508231418729e0b80a6125490dfe/' + latitude + ',' + longitude 

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location.  ', undefined)
        } else {
            callback(undefined, {
                summary: body.daily.data[0].summary,
                temperature: body.currently.temperature,
                precipProbability: body.currently.precipProbability
            })
        }
    })
}

module.exports = forecast