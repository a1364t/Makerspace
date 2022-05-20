import React, {useState, useEffect} from "react";
import {db} from './firebase';
import { collection, getDocs } from "firebase/firestore";


const Profile = () => {
    const [users, setUsers] = useState([]);

    

    useEffect(() => {
        const getUsers = async () => {
        const usersCollectionRef = collection(db, 'users');
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((user) => ({...user.data(), id: user.id})));
        console.log(users);
    };getUsers();
    }, [users]);

    return(
        <div>
            <UsersList info={users} />
        </div>
    )

}

const UsersList = (props) => {
    if(props.info.length === 0){
        return <div>Loading...</div>
    }
    const users = props.info;
    return(
        <div>
            {users.map((user) => {
                console.log(user.threeDPrinting);
                return(
                    <div key={user.id}>
                    <ul>
                        <li><h3> User Info</h3></li>
                    </ul>
                        <strong>First Name: {user.first_name.toString()} <br></br>
                        Last Name: {user.last_name}</strong>                                               
                        <p>Email: {user.email}</p>
                        <p>Coding: {`${user.coding}`}</p>
                        <p>Electronics: {`${user.electronics}`}</p>
                        <p>Robotocs: { `${user.robotics}` }</p>
                        <p>Sewing: {`${user.sewing}` }</p>
                        <p>Soldering: { `${user.soldering}` }</p>
                        <p>3D Printing: { `${user.threeDPrinting}` }</p>
                        <p>Wood Working: { `${user.woodWorking}` }</p>                                                              
                    </div>
                )
            })}
        </div>
    )
}


export default Profile;