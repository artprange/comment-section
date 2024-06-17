import { Post } from './Post'
import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'


export  function App() {


  return (
    <div>
    <Header/>

    <div className={styles.wrapper}>
      <aside>
        <Sidebar/>
      </aside>
      <main>

        <Post
         author="Kahuna"
         content="asdbakijs bdakis dbaskodjbaksd jbas dbjasl dbas das"
        />
        <Post
         author="Athena"
         content="puyjtpyolijmtpoyjum optyjmoptj mp"/>

      </main>
    </div>

    </div>
  )
}


