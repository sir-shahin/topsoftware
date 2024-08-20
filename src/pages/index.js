import Technology from '../components/layouts/Technology'
import Services from '../components/layouts/Services'
import Contact  from '../components/layouts/Contact'
import Layout from '../components/layouts/Layout'
import Portfo from '../components/layouts/Portfo'
import Intro from '../components/layouts/Intro'
import It from '../components/layouts/It'

export default function Home() {
  return (
      <Layout>
        <Intro></Intro>
        <Services></Services>
        <Portfo></Portfo>
        <It></It>
        <Technology></Technology>
        <Contact></Contact>
      </Layout>
    )
}
