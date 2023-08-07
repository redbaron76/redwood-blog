import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="El social dei bisiachi" description="Home page" />

      <ArticlesCell />
    </>
  )
}

export default HomePage
