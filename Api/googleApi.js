let {google} = require('googleapis');

let youtube = google.youtube('v3');

let apiKey = 'AIzaSyAwDnjea4otWrfLH-vm9mdryQGtd4JKdXI';

async function getChannelInfo(idChannel) {
    const res = await youtube.channels.list({
        auth: apiKey,
        part: 'snippet,contentDetails,statistics',
        id: idChannel,
    });
    return (res.data);
}

async function getVideoInfo(idVideo) {
    const res = await youtube.videos.list({
        auth: apiKey,
        part: 'snippet,contentDetails,statistics',
        id: idVideo
    });
    return (res.data);
}

async function getVideoComment(idVideo) {
    const res = await youtube.commentThreads.list({
        auth: apiKey,
        part: 'snippet',
        videoId: idVideo
    });
    return (res.data);
}

exports.getChannelInfo = getChannelInfo;
exports.getVideoInfo = getVideoInfo;
exports.getVideoComment = getVideoComment;