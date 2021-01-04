import SpotifyWebApi from 'spotify-web-api-node';
const f = require('node-fetch');
require('dotenv').config();

const clientId = process.env.SPOTIFY_CLIENT;
const secret = process.env.SPOTIFY_TOKEN;
let redirectUri: string;
if (process.env.NODE_ENV === 'development') {
    redirectUri = 'http://localhost:3000/livelyrics';
} else {
    redirectUri = 'https://alec.surge.sh/livelyrics';
}

export async function get(req, res, next) {
    const code = req.headers['code'];
    if (!code) return ( res.statusCode=401, res.end('no code token'));

    res.setHeader('Content-Type', 'application/json');
    const sapi = new SpotifyWebApi({
        clientId: clientId,
        clientSecret: secret,
        redirectUri: redirectUri,
    });
    console.log(code);
    const grant = await sapi.authorizationCodeGrant(code);
    sapi.setAccessToken(grant.body['access_token']);
    sapi.setRefreshToken(grant.body['refresh_token']);
    
    const track = await sapi.getMyCurrentPlayingTrack();
    res.end(JSON.stringify(track));
}