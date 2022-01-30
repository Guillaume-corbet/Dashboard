function createParamJson(name, type) {
    let param = {
        name: name,
        type: type
    };
    return (param);
}

function createWidgetJson(name, description, params) {
    let widget = {
        name: name,
        description: description,
        params: params
    };
    return (widget);
}

function createServiceJson(name, widgets) {
    let service = {
        name, name,
        widgets, widgets
    };
    return (service);
}

let widgetsYoutubeJson = [
    createWidgetJson("Subscribers", "get the number of subscriber for a channel", [createParamJson("idChannel", "string")]),
    createWidgetJson("Views", "get the number of view for a video", [createParamJson("idVideo", "string")]),
    createWidgetJson("Comments", "get the top comment of a video", [createParamJson("idVideo", "string")])
];

let widgetsMoviesJson = [
    createWidgetJson("GetMoviesbyGenre", "get the movies by genre", [createParamJson("idGenre", "integer")]),
    createWidgetJson("GetMovieByReleaseDate", "get the movies by the year of the release", [createParamJson("year", "integer")])
];

let widgetsWeatherJson = [
    createWidgetJson("getCurrentWeather", "get the current weather by city", [createParamJson("name_city", "integer")])
]

let serviceJson = [
    createServiceJson("Youtube", widgetsYoutubeJson),
    createServiceJson("Movies", widgetsMoviesJson),
    createServiceJson("Weather", widgetsWeatherJson)
];

let serverJson = {
    current_time: Math.round(Date.now() / 1000),
    services: serviceJson
};

let about = {
    customer: "127.0.0.1",
    server: serverJson
};

let data = JSON.stringify(about, null, 2);

let errorJson = JSON.stringify({message: "bad request"},null, 2);

exports.data = data;
exports.errorJson = errorJson;