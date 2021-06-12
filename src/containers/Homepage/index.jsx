import React, {useEffect} from 'react'
import {createSelector} from 'reselect'
import { makeSelectUsers } from './selectors'
import {useSelector} from 'react-redux'
import axios from 'axios'

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users
}))


export default function Homepage(props) {

    // const {users} = useSelector(stateSelector)
    // console.log("Users: ", users)

    const fetchUsers = async () => {
        const response = await axios
        .get('https://regres.in/api/users')
        .catch((err) => console.log("ERR: ", err))

        console.log("Users: ", response.data.data)
    }

    useEffect(() => {
        fetchUsers();
      }, []);
    

    return <div>HELLOWORLD</div>
}

