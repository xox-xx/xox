import next from 'next'
import * as functions from 'firebase-functions'

export const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf: { distDir: 'io' } })
const handle = app.getRequestHandler()

const runtimeOpts = {
    timeoutSeconds: 300,
    memory: '2GB'
}

export default functions.runWith(runtimeOpts).https.onRequest((req, res) =>
    app.prepare().then(() => handle(req, res)))