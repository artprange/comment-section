import{ PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';


export function Sidebar(){
    return(
        
            <aside className={styles.sidebar}> 
            <img className={styles.cover}
             src="https://images.unsplash.com/photo-1536961229726-d383212033cb?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
             />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/104018176?v=4"/>
                <strong>Kahuna</strong>
                <span>Web Dev</span>
            </div>

            <footer className={styles.footer}>
             
                <a href="#">
                <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
            </aside>
        
    )
}