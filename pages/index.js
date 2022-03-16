import { createClient } from 'contentful'
import MarmiteAppCard from '../components/MarmiteAppCard'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'marmiteApp' })

  return {
    props: { marmiteApps: res.items },
    revalidate: 1
  }
}


export default function Recipes({marmiteApps}) {
  console.log('marmiteApps', marmiteApps)
  return (
    <div className="recipe-list">
      {marmiteApps.map(marmiteApp => (

        <MarmiteAppCard key={marmiteApp.sys.id} marmiteApp={marmiteApp}/>
      ))}

      <style jsx>{`
      .recipe-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px 60px;
      }`}</style>
    </div>
  )
}