
import { Search } from 'lucide-react'
import { Card, CardContent } from '../ui/Card'
import { Input } from '../ui/Input'
import { SelectDropdown } from '../ui/SelectDropdown'

export const UsersFilters = ({
  search,
  setSearch,
  sortOrder,
  setSortOrder,
  cityFilter,
  setCityFilter,
  cities,
}) => {
  return (
    <Card>
      <CardContent className="p-4 flex flex-col md:flex-row gap-4">

        <div className="relative w-full md:flex-[2]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by name or email..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <SelectDropdown
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full md:w-40"
        >
          <option value="asc">A–Z</option>
          <option value="desc">Z–A</option>
        </SelectDropdown>

        <SelectDropdown
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="w-full md:w-44"
        >
          <option value="">All Cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </SelectDropdown>

      </CardContent>
    </Card>
  )
}