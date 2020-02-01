const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e925508231418729e0b80a6125490dfe/' + latitude + ',' + longitude 

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location.  ', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a lof of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + ' % chance of rain'
            )
        }
    })
}

module.exports = forecast