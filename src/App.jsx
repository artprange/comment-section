
import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import { Posts } from './utils/PostsContent'



export  function App() {


  return (
    <div>
    <Header/>

    <div className={styles.wrapper}>
      <aside>
        <Sidebar/>
      </aside>
      <main>

        {Posts.map(post =>{
          return(
          <Post
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}          
          />)
        })}
     
   

      </main>
    </div>

    </div>
  )
}


