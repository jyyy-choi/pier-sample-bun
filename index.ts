import { Hono } from 'hono'

const app = new Hono()
const port = Number(process.env.PORT ?? 3000)

app.get('/', (c) =>
  c.html(`<!doctype html><meta charset="utf-8"><title>pier sample · bun</title>
<main style="font-family:system-ui;margin:3rem auto;max-width:34rem;line-height:1.7">
<h1>pier sample · Bun + Hono</h1>
<p>Bun ${Bun.version} · 포트 ${port}</p>
<p><a href="/healthz">/healthz</a></p></main>`),
)
app.get('/healthz', (c) => c.json({ ok: true, bun: Bun.version }))

export default { port, hostname: '0.0.0.0', fetch: app.fetch }
