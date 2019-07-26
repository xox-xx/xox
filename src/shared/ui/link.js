import React from 'react'
import Link from 'next/link'

const format = (s = '') => {
    const [title, arg] = s.split(',')
    return {title, url: (/^-?\d+$/.test(arg) ? arg < 0 ? '' : title.split(' ')[arg] : arg || title.replace(new RegExp(' ', 'g'), '-')).toLowerCase()}
}

export default ({name, ...rest}) =>
    <Link href={format(name).url}>
        <a href={format(name).url} {...rest}>{format(name).title}</a>
    </Link>