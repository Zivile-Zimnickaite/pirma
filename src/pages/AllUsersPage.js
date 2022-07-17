// import { useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import UserCard from '../components/UserCard'

const AllUsersPage = () => {


    const allUsers = useSelector(state => state.user.value.allUsers)
    console.log(allUsers)


    return (
        <div className=" mainContainer margin-top-100 userCardWrapper">
            {allUsers.map(x => <UserCard user={x} key={x.username}></UserCard>)}
        </div>
    )
}

export default AllUsersPage