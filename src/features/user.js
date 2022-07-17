import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            allUsers: [],
            currentUser: {
                username: "",
                password: "",
                role: "",
                photo: "https://odenta32.lt/wp-content/uploads/2022/05/blank-profile-picture-973460_640.png"
            }
        }
    },
    reducers: {
        addUser: ({ value }, { payload }) => {
            const user = {
                username: payload.userName,
                password: payload.passOne,
                role: payload.role,
                image: "https://odenta32.lt/wp-content/uploads/2022/05/blank-profile-picture-973460_640.png"
            }
            value.allUsers.push(user)
        },
        setCurrentUser: ({ value }, { payload }) => {
            value.currentUser = payload
        },
        updatePhoto: ({ value }, { payload }) => {
            const { index, current } = payload
            value.allUsers[index] = current
            value.currentUser = current
        },
        updatePassword: ({ value }, { payload }) => {
            const { index, current } = payload
            value.allUsers[index] = current
            value.currentUser = current
        }
    }
})


export const { addUser, setCurrentUser, updatePhoto, updatePassword } = userSlice.actions
export default userSlice.reducer