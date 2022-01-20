import * as axios from "axios";
import React from "react";
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(Response => {
                this.props.setUsers(Response.data.items);
            });
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </div>
                        <div>
                            {
                                u.followed
                                    ?
                                    <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
                                    :
                                    <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>

                </div>)
            }
        </div>

    }
}

export default Users;