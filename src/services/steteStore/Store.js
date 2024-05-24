import { configureStore } from "@reduxjs/toolkit"
import LogicSlice from "../Feature/LogicSlice"


 const store=configureStore({
    reducer:LogicSlice
})
export default store;