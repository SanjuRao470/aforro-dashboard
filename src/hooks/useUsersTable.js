

import { useMemo } from 'react'

export const useUsersTable = ({
  users = [],
  search,
  cityFilter,
  sortOrder,
  page,
  pageSize,
}) => {

  const cities = useMemo(() => {
    return [...new Set(users.map((u) => u.address?.city).filter(Boolean))]
  }, [users])

  const filteredData = useMemo(() => {
    let result = [...users]

    if (search) {
      const query = search.toLowerCase()
      result = result.filter(
        (u) =>
          u.name.toLowerCase().includes(query) ||
          u.email.toLowerCase().includes(query)
      )
    }

    if (cityFilter) {
      result = result.filter((u) => u.address?.city === cityFilter)
    }

    result.sort((a, b) =>
      sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )

    return result
  }, [users, search, cityFilter, sortOrder])

  const totalPages = Math.ceil(filteredData.length / pageSize)

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize
    return filteredData.slice(start, start + pageSize)
  }, [filteredData, page, pageSize])

  return { cities, filteredData, paginatedData, totalPages }
}