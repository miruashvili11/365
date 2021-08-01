import Logout from '../Components/Main/Logout'
import './Profile.css'

const Profile = () => {

    const user = JSON.parse(localStorage.getItem('user'))  

    return (
        <div className={'Profile'}>
            <h4 className={'Profile__Text'}>Welcome : 
                {user.firstName}
            </h4>
            < Logout/>
        </div>
    )
}
export default Profile
