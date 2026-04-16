import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { fetchUsers } from '@/store/slices/userSlice'

export const useUsersQuery = () => {
  const dispatch = useDispatch()
  const { users, loading, error } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return { users, loading, error }
}