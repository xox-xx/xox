import next from 'next'
import {join} from 'path'
import express from 'express'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev, dir: './src/app'})
const handle = app.getRequestHandler()

const staticFiles = ['/robots.txt', '/sitemap.xml', '/favicon.ico']

app.prepare().then(() => {
    const server = express()

    server.get('*', (req, res) =>
        staticFiles.includes(req.url) ?
            app.serveStatic(req, res, join(__dirname, 'static', req.url)) :
            handle(req, res))

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})