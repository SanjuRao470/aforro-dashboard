import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: true,
  isMobileOpen: false,
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen
    },
    setSidebarOpen: (state, action) => {
      state.isOpen = action.payload
    },
    toggleMobileSidebar: (state) => {
      state.isMobileOpen = !state.isMobileOpen
    },
    setMobileSidebarOpen: (state, action) => {
      state.isMobileOpen = action.payload
    },
  },
})

export const { toggleSidebar, setSidebarOpen, toggleMobileSidebar, setMobileSidebarOpen } = sidebarSlice.actions
export default sidebarSlice.reducer

