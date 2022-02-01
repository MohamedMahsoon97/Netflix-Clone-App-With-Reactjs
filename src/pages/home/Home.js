import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer'
import GetStarted from '../../components/getStarted/GetStarted'
import Kids from '../../components/kidsSection/Kids'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import WatchSection from '../../components/watchSection/WatchSection'
import './Home.scss'

const Home = () => {
      return (
            <div className='home'>
                  <Navbar />
                  <Featured type="movie"/>
                  <List />
                  <List />
                  <Kids />
                  <WatchSection />
                  <GetStarted />
                  <Footer />
            </div>
      )
}

export default Home
