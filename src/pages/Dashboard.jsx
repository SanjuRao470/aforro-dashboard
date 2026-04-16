
import { useState, useEffect } from 'react'
import { useUsersQuery } from '../hooks/useUsersQuery'
import { useUsersTable } from '../hooks/useUsersTable'
import { PAGE_SIZE } from '../constants/table'
import { UsersFilters } from '../components/users/UsersFilters'
import { UsersTable } from '../components/users/UsersTable'
import { Pagination } from '../components/users/Pagination'

export const Dashboard = () => {
  const { users, loading, error } = useUsersQuery()

  const [search, setSearch] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [cityFilter, setCityFilter] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [search, cityFilter, sortOrder])

  const { cities, filteredData, paginatedData, totalPages } =
    useUsersTable({
      users,
      search,
      cityFilter,
      sortOrder,
      page,
      pageSize: PAGE_SIZE,
    })

  return (
    <div className="space-y-4">

      <UsersFilters
        search={search}
        setSearch={setSearch}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
        cities={cities}
      />

      {loading && <div className="text-center py-10">Loading...</div>}
      {error && <div className="text-center py-10 text-red-500">{error}</div>}

      {!loading && !error && (
        <>
          <UsersTable data={paginatedData} />

          {filteredData.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              No users found
            </div>
          )}

          <Pagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  )
}

