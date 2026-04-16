// import { Routes, Route, Navigate } from 'react-router-dom'
// import { Layout } from './components/layout/Layout'
// import { Dashboard } from './pages/Dashboard'


// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route path="dashboard" element={<Dashboard />} />
//        </Route>
//     </Routes>
//   )
// }

// export default App




import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        {/* ✅ default route */}
        <Route index element={<Dashboard />} />

        {/* optional explicit route */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" />} />

      </Route>
    </Routes>
  )
}

export default App
