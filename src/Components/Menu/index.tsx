import styles from './Menu.module.css'
import {Link} from 'react-router-dom'
export const Menu = () =>{
  return(
    <nav className={styles.menu}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about" state={'this is state from ABOUNT'}>About</Link></li>
        <li><Link to="/redirect">redirect</Link></li>
        <li><Link to="/posts">posts</Link></li>
        <li><Link to="/posts/10">Post 10</Link></li>
      </ul>
    </nav>
  )
}