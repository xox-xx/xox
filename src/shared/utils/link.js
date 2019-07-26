export default s => {
    const [title, arg] = s.split(',')
    return {
        title,
        url: (/^\d+$/.test(arg) ? title.split(' ')[arg] : arg || title.replace(new RegExp(' ', 'g'), '-')).toLowerCase()
    }
}

