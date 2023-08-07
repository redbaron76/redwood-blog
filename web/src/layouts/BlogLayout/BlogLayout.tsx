import { css } from 'styled-system/css'
import { hstack } from 'styled-system/patterns'

import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header>
        <h1
          className={css({
            fontSize: '3em',
            fontWeight: 'bolder',
            px: 4,
            py: 2,
          })}
        >
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <nav className={hstack({ gap: 4, p: 4, bg: 'red.400' })}>
          <Link to={routes.home()}>Home</Link>
          <Link to={routes.about()}>About</Link>
          <Link to={routes.contact()}>Contact</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
