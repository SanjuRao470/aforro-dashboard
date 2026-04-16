
import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'
import sidebarReducer from './slices/sidebarSlice'
import userReducer from './slices/userSlice'


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    sidebar: sidebarReducer,
      users: userReducer,
    
  },
})


