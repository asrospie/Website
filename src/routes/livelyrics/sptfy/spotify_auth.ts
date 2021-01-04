import SpotifyWebApi from 'spotify-web-api-node';
require('dotenv').config();

const scopes = ['streaming', 'user-read-email', 'user-read-private',
    'user-read-playback-state', 'user-read-playback-position', 'user-library-read', 
    'user-read-recently-played'   
]; 
let redirectUri: string;
if (process.env.NODE_ENV === 'development') {
    redirectUri = 'http://localhost:3000/livelyrics';
} else {
    redirectUri = 'https://alec.surge.sh/livelyrics';
}
const state = 'Michigan';
const clientId = process.env.SPOTIFY_CLIENT;
const secret = process.env.SPOTIFY_TOKEN;

export async function get(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    const sapi = new SpotifyWebApi({
        clientId: clientId,
        // secret: secret,
        redirectUri: redirectUri,
    });
    const url = sapi.createAuthorizeURL(scopes, state);
    res.end(JSON.stringify({ url: url }));
}