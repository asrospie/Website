import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
require('dotenv').config();

const { PORT, NODE_ENV, SPOTIFY_CLIENT, SPOTIFY_TOKEN } = process.env;
const dev = NODE_ENV === 'development';

const app = polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
            session: () => ({
                SPOTIFY_CLIENT, SPOTIFY_TOKEN
            }),
        }),
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
    });