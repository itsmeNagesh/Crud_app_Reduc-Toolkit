
import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    studentData: [], 
    value: 0
};

export const logicSlice = createSlice({
    name: 'logic',
    initialState,
    reducers: {
                        increment: (state, action) => {
                                  state.value += 1; 
                        },
                        decrement: (state, action) => {
                                 state.value -= 1; 
                        },
                        addStudent: (state, action) => {
                                // console.log("Now call reducers");
                                const data = {
                                    name: action.payload.name,
                                    age: action.payload.age ,
                                    email:action.payload.email
                                    
                                    
                            };

                            state.studentData.push(data); 
                        },

                        // UpdateStudent:(state,action)=>{
                        // state.studentData = state.studentData.filter((item) => {
                        //         if(item.name === action.payload.name)
                        //         {
                        //             item.name=action.payload.name;
                        //             item.age=action.payload.age;
                        //             item.email=action.payload.email;
                        //         }

                        //     });

                        // },
                        UpdateStudent: (state, action) => {
                            // Find the index of the student in the studentData array
                            const index = state.studentData.findIndex(item => item.name === action.payload.name);
                            
                            // If the student exists, update its properties
                            if (index !== -1) {
                                state.studentData[index].name = action.payload.name;
                                state.studentData[index].age = action.payload.age;
                                state.studentData[index].email = action.payload.email;
                            }
                        },
                        
                        RemoveStudent: (state, action) => {
                                    
                                    state.studentData = state.studentData.filter((item) => {
                                        return item.name !== action.payload.name;
                                    });
                        }
        
    }
});

export const { increment, decrement, addStudent,RemoveStudent,UpdateStudent } = logicSlice.actions;
export default logicSlice.reducer;
