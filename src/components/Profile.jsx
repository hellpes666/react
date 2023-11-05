import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.Profile}>
            <img src='https://i.pinimg.com/originals/f8/4e/7f/f84e7f7cfeeae73511cb3b2d27e39e1f.jpg' />
          <div>
            ava + descritption
          </div>

        <div>
            my posts
            <div>
              new post
            </div>

            <div className='posts'>
              <div className='item'>
                post 1
              </div>

              <div className='item'>
                post 2
              </div>
            </div>
          </div>
        </div>
    )
}


export default Profile;