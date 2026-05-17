import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import Login from "./pages/Login"

import Register from "./pages/Register"

import Dashboard from "./pages/Dashboard"

import UploadDataset from "./pages/UploadDataset"

import Forecast from "./pages/Forecast"

import Reports from "./pages/Reports"

import MainLayout from "./layouts/MainLayout"

import ProtectedRoute from "./components/ProtectedRoute"


function App() {

  return (

    <BrowserRouter>

      {/* MAIN APP BACKGROUND */}

      <div className="bg-[#f5f7fb] min-h-screen">

        <Routes>

          {/* PUBLIC ROUTES */}

          <Route
            path="/"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />


          {/* PROTECTED ROUTES */}

          <Route

            element={

              <ProtectedRoute>

                <MainLayout />

              </ProtectedRoute>
            }
          >

            {/* DASHBOARD */}

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            {/* UPLOAD */}

            <Route
              path="/upload"
              element={<UploadDataset />}
            />

            {/* FORECAST */}

            <Route
              path="/forecast"
              element={<Forecast />}
            />

            {/* REPORTS */}

            <Route
              path="/reports"
              element={<Reports />}
            />

          </Route>


          {/* REDIRECT */}

          <Route
            path="*"
            element={
              <Navigate to="/" replace />
            }
          />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App