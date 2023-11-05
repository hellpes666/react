import classes from './Nav_bar.module.css'

const Nav_bar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><a className={classes.item} href='#'>Profile</a></li>
                <li><a className={classes.item} href='#'>Messages</a></li>
                <li><a className={classes.item} href='#'>News</a></li>
                <li><a className={classes.item} href='#'>Music</a></li>
                <li><a className={classes.item} href='#'>Settings</a></li>
                
            </ul>
        </nav>
    )
}
export default Nav_bar