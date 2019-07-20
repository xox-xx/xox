export const dev = process.env.NODE_ENV !== 'production'
export const port = parseInt(process.env.PORT, 10) || 3000

export const err = e => e.code.split('/')[1].replace(new RegExp('-', 'g'), ' ')
