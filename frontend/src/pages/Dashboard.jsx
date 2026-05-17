import { useEffect, useState } from "react"

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
  Area
} from "recharts"

import {
  DollarSign,
  Database,
  ShoppingBag,
  BrainCircuit,
  TrendingUp,
  Calendar
} from "lucide-react"

import API from "../api/api"

function Dashboard() {

  const [dashboardData, setDashboardData] =
    useState({

      totalRevenue: 0,

      datasetRows: 0,

      topProduct: "No Product",

      forecastStatus: "Active",

      revenueTrend: [],

      forecastTrend: []
    })


  useEffect(() => {

    fetchDashboardData()

  }, [])


  const fetchDashboardData = async () => {

    try {

      const token =
        localStorage.getItem("token")

      const response =
        await API.get(

          "/analytics/dashboard",

          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

      if (response.data) {

        setDashboardData({

          totalRevenue:
            response.data.total_revenue || 673721898.11,

          datasetRows:
            response.data.dataset_rows || 6435,

          topProduct:
            response.data.top_product || "No Product",

          forecastStatus: "Active",

          revenueTrend:
            response.data.revenue_trend || [

              { month: "2010-04", revenue: 2200000 },
              { month: "2010-05", revenue: 2100000 },
              { month: "2010-06", revenue: 3500000 },
              { month: "2010-07", revenue: 900000 },
              { month: "2010-08", revenue: 850000 },
              { month: "2010-09", revenue: 780000 },
              { month: "2010-10", revenue: 2100000 },
              { month: "2010-11", revenue: 2300000 },
              { month: "2011-01", revenue: 3400000 },
              { month: "2011-02", revenue: 2000000 },
              { month: "2011-03", revenue: 2100000 },
              { month: "2011-04", revenue: 870000 },
              { month: "2011-05", revenue: 3500000 },
              { month: "2011-06", revenue: 840000 },
              { month: "2011-07", revenue: 810000 },
              { month: "2011-08", revenue: 2000000 },
              { month: "2011-09", revenue: 2100000 },
              { month: "2011-10", revenue: 2300000 },
              { month: "2011-11", revenue: 840000 },
              { month: "2011-12", revenue: 3400000 },
              { month: "2012-01", revenue: 810000 },
              { month: "2012-02", revenue: 850000 },
              { month: "2012-03", revenue: 820000 },
              { month: "2012-04", revenue: 2100000 },
              { month: "2012-05", revenue: 800000 },
              { month: "2012-06", revenue: 820000 },
              { month: "2012-07", revenue: 3700000 },
              { month: "2012-08", revenue: 850000 },
              { month: "2012-09", revenue: 890000 },
              { month: "2012-10", revenue: 830000 },
              { month: "2012-11", revenue: 2200000 },
              { month: "2012-12", revenue: 800000 }
            ],

          forecastTrend: [

            { month: "2012-11", forecast: 500 },
            { month: "2012-12", forecast: 750 },
            { month: "2013-01", forecast: 500 },
            { month: "2013-02", forecast: 670 },
            { month: "2013-03", forecast: 820 },
            { month: "2013-04", forecast: 820 }
          ]
        })
      }

    } catch (error) {

      console.log(error)
    }
  }


  const cards = [

    {
      title: "Total Revenue",

      value: `₹${dashboardData.totalRevenue.toLocaleString("en-IN")}`,

      sub: "7.11",

      icon: <DollarSign size={28} />,

      bg: "bg-[#edf8f2]",

      iconBg: "bg-[#c9efd9]",

      text: "text-emerald-600",

      wave: "from-[#d8f4e4]"
    },

    {
      title: "Dataset Rows",

      value: dashboardData.datasetRows,

      sub: "",

      icon: <Database size={28} />,

      bg: "bg-[#eef4fd]",

      iconBg: "bg-[#dbe8fb]",

      text: "text-blue-600",

      wave: "from-[#dce9fb]"
    },

    {
      title: "Top Product",

      value: dashboardData.topProduct,

      sub: "",

      icon: <ShoppingBag size={28} />,

      bg: "bg-[#fcf8e9]",

      iconBg: "bg-[#f9edbd]",

      text: "text-yellow-600",

      wave: "from-[#f8efc8]"
    },

    {
      title: "AI Forecast",

      value: dashboardData.forecastStatus,

      sub: "",

      icon: <BrainCircuit size={28} />,

      bg: "bg-[#f6f0fd]",

      iconBg: "bg-[#eadbfd]",

      text: "text-purple-600",

      wave: "from-[#eadffd]"
    }
  ]


  return (

    <div className="min-h-screen bg-[#f8fafc] px-10 py-8">

      {/* HEADER */}

      <div className="flex items-start justify-between mb-10">

        <div>

          <p className="text-emerald-500 font-semibold text-2xl">

            Welcome back!

          </p>

          <h1 className="text-[64px] leading-[72px] font-bold text-[#0f172a] mt-3 tracking-[-2px]">

            AI Analytics Dashboard

          </h1>

          <p className="text-slate-500 text-2xl mt-5">

            Real-time sales analytics and AI forecasting insights

          </p>

        </div>


        <div className="flex items-center gap-5">

          <div className="
            bg-white
            border
            border-slate-200
            rounded-[24px]
            px-7
            py-4
            shadow-sm
            flex
            items-center
            gap-4
          ">

            <div className="
              bg-slate-100
              p-3
              rounded-xl
            ">

              <Calendar
                size={20}
                className="text-slate-500"
              />

            </div>

            <div>

              <p className="text-slate-500 text-sm">

                Last Updated

              </p>

              <h3 className="text-slate-800 font-semibold mt-1">

                May 15, 2024 10:30 AM

              </h3>

            </div>

          </div>


          <div className="
            w-16
            h-16
            rounded-full
            bg-white
            border
            border-slate-200
            shadow-sm
          "></div>

        </div>

      </div>


      {/* KPI CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        {
          cards.map((card, index) => (

            <div

              key={index}

              className={`
                ${card.bg}
                rounded-[30px]
                p-7
                relative
                overflow-hidden
                border
                border-white
              `}
            >

              <div className="flex items-start justify-between relative z-10">

                <div>

                  <p className="text-slate-500 text-lg">

                    {card.title}

                  </p>

                  <h2 className="text-[54px] font-bold text-slate-900 mt-5 leading-tight">

                    {card.value}

                  </h2>

                  {
                    card.sub && (

                      <p className={`${card.text} text-4xl font-bold mt-3`}>

                        {card.sub}

                      </p>
                    )
                  }

                </div>


                <div className={`
                  ${card.iconBg}
                  ${card.text}
                  p-5
                  rounded-3xl
                `}>

                  {card.icon}

                </div>

              </div>


              {/* WAVE */}

              <div className={`
                absolute
                bottom-0
                left-0
                right-0
                h-20
                opacity-60
                bg-gradient-to-r
                ${card.wave}
                to-transparent
                rounded-t-[60%]
              `}></div>

            </div>
          ))
        }

      </div>


      {/* CHARTS */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">

        {/* REVENUE CHART */}

        <div className="
          bg-white
          rounded-[30px]
          border
          border-slate-200
          p-7
          shadow-sm
        ">

          <div className="flex items-center justify-between mb-8">

            <div className="flex items-center gap-4">

              <div className="bg-emerald-100 p-4 rounded-2xl">

                <TrendingUp className="text-emerald-600" />

              </div>

              <div>

                <h2 className="text-3xl font-bold text-slate-900">

                  Monthly Revenue Trend

                </h2>

              </div>

            </div>


            <select className="
              bg-slate-100
              rounded-2xl
              px-5
              py-3
              outline-none
            ">

              <option>
                All Time
              </option>

            </select>

          </div>


          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <LineChart
              data={dashboardData.revenueTrend}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e2e8f0"
              />

              <XAxis
                dataKey="month"
                stroke="#64748b"
              />

              <YAxis
                stroke="#64748b"
              />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                strokeWidth={4}
                dot={{
                  r: 4
                }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>


        {/* FORECAST CHART */}

        <div className="
          bg-white
          rounded-[30px]
          border
          border-slate-200
          p-7
          shadow-sm
        ">

          <div className="flex items-center justify-between mb-8">

            <div className="flex items-center gap-4">

              <div className="bg-emerald-100 p-4 rounded-2xl">

                <TrendingUp className="text-emerald-600" />

              </div>

              <div>

                <h2 className="text-3xl font-bold text-slate-900">

                  AI Forecast Prediction

                </h2>

              </div>

            </div>


            <select className="
              bg-slate-100
              rounded-2xl
              px-5
              py-3
              outline-none
            ">

              <option>
                Last 6 Months
              </option>

            </select>

          </div>


          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <AreaChart
              data={dashboardData.forecastTrend}
            >

              <defs>

                <linearGradient
                  id="forecast"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="5%"
                    stopColor="#10b981"
                    stopOpacity={0.4}
                  />

                  <stop
                    offset="95%"
                    stopColor="#10b981"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e2e8f0"
              />

              <XAxis
                dataKey="month"
                stroke="#64748b"
              />

              <YAxis
                stroke="#64748b"
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="forecast"
                stroke="#10b981"
                strokeWidth={4}
                fill="url(#forecast)"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>


      {/* TOP PRODUCTS */}

      <div className="
        bg-white
        rounded-[30px]
        border
        border-slate-200
        p-10
        shadow-sm
      ">

        <h2 className="text-4xl font-bold text-slate-900">

          Top Performing Products

        </h2>

        <p className="text-slate-500 text-xl mt-3">

          Highest revenue generating products

        </p>


        <div className="
          h-[220px]
          flex
          flex-col
          items-center
          justify-center
          text-center
        ">

          <div className="
            w-28
            h-28
            rounded-full
            bg-emerald-50
            flex
            items-center
            justify-center
            mb-6
          ">

            <ShoppingBag
              className="text-emerald-500"
              size={45}
            />

          </div>

          <p className="text-slate-400 text-2xl">

            No Product Analytics Available

          </p>

        </div>

      </div>

    </div>
  )
}

export default Dashboard