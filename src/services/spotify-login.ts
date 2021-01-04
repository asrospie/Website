import SpotifyWebApi from 'spotify-web-api-node';

const scopes: Array<string> = ['streaming', 'user-read-private', 'user-read-email'];
const redirectUri: string = 'https://alec.surge.sh';
const state: string = 'Michigan';

export function sapiInit(clientId: string, secret: string) {
    return new SpotifyWebApi({
        clientId: clientId,
        clientSecret: secret,
        redirectUri: 'https://alec.surge.sh',
    });
}

export async function authorize(clientId) {
    const sapi = new SpotifyWebApi({
        redirectUri: redirectUri,
        clientId: clientId
    });

    const url = sapi.createAuthorizeUrl(scopes, state);
    console.log(url);
}