import { Outlet, NavLink } from "react-router-dom"

import {
  LayoutDashboard,
  Upload,
  BrainCircuit,
  FileText,
  LogOut
} from "lucide-react"

import { motion } from "framer-motion"

function MainLayout() {

  const navItems = [

    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />
    },

    {
      name: "Upload Dataset",
      path: "/upload",
      icon: <Upload size={20} />
    },

    {
      name: "Forecast",
      path: "/forecast",
      icon: <BrainCircuit size={20} />
    },

    {
      name: "Reports",
      path: "/reports",
      icon: <FileText size={20} />
    }
  ]

  return (

    <div className="flex min-h-screen bg-[#f5f7fb]">

      {/* SIDEBAR */}

      <motion.div

        initial={{
          x: -100,
          opacity: 0
        }}

        animate={{
          x: 0,
          opacity: 1
        }}

        className="w-[280px] bg-white border-r border-slate-200 px-6 py-8 flex flex-col justify-between"
      >

        <div>

          {/* LOGO */}

          <div className="mb-12">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white text-xl font-bold">

                ↗

              </div>

              <div>

                <h1 className="text-3xl font-bold text-slate-900">

                  AI Forecast

                </h1>

                <p className="text-slate-500 text-sm mt-1">

                  Demand Forecasting Platform

                </p>

              </div>

            </div>

          </div>


          {/* NAVIGATION */}

          <div className="space-y-3">

            {
              navItems.map((item) => (

                <NavLink

                  key={item.name}

                  to={item.path}

                  className={({ isActive }) => `

                    flex items-center gap-4
                    px-5 py-4
                    rounded-2xl
                    transition-all duration-300
                    font-medium

                    ${

                      isActive

                        ? "bg-emerald-50 text-emerald-600"

                        : "text-slate-600 hover:bg-slate-100"
                    }
                  `}
                >

                  {item.icon}

                  <span>{item.name}</span>

                </NavLink>
              ))
            }

          </div>

        </div>


        {/* LOGOUT */}

        <button className="flex items-center gap-3 bg-red-50 hover:bg-red-100 text-red-500 px-5 py-4 rounded-2xl transition-all duration-300">

          <LogOut size={20} />

          Logout

        </button>

      </motion.div>


      {/* MAIN CONTENT */}

      <main className="flex-1 p-8 overflow-y-auto">

        <Outlet />

      </main>

    </div>
  )
}

export default MainLayout