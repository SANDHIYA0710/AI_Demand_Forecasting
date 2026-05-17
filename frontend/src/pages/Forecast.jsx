import { useEffect, useState } from "react"

import API from "../api/api"

import { motion } from "framer-motion"

import {
  BrainCircuit,
  TrendingUp,
  Activity,
  BarChart3,
  Filter
} from "lucide-react"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts"


function Forecast() {

  const [forecastData, setForecastData] = useState([])

  const [forecastError, setForecastError] = useState(0)

  const [model, setModel] = useState("")

  const [category, setCategory] = useState("")

  const [product, setProduct] = useState("")

  const [months, setMonths] = useState(6)

  const [loading, setLoading] = useState(false)

  const [predictionStatus, setPredictionStatus] =
    useState("Inactive")

  const [errorMessage, setErrorMessage] =
    useState("")


  useEffect(() => {

    fetchForecast()

  }, [])


  const fetchForecast = async () => {

    try {

      setLoading(true)

      setErrorMessage("")

      const token =
        localStorage.getItem("token")

      let url =
        `/forecast/predict?future_months=${months}`

      if (category) {

        url += `&category=${category}`
      }

      if (product) {

        url += `&product=${product}`
      }

      const response = await API.get(

        url,

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      console.log(
        "FORECAST RESPONSE:",
        response.data
      )

      setForecastData(
        response.data.forecast || []
      )

      setForecastError(
        response.data.forecast_error_mape || 0
      )

      setModel(
        response.data.model ||
        "Prophet Forecasting"
      )

      if (
        response.data.forecast &&
        response.data.forecast.length > 0
      ) {

        setPredictionStatus("Active")
      }

      else {

        setPredictionStatus("Inactive")
      }

    }

    catch (error) {

      console.log(error)

      setPredictionStatus("Inactive")

      setForecastData([])

      if (
        error.response &&
        error.response.data &&
        error.response.data.detail
      ) {

        setErrorMessage(
          error.response.data.detail
        )
      }

      else {

        setErrorMessage(
          "Forecast generation failed"
        )
      }
    }

    finally {

      setLoading(false)
    }
  }


  const cards = [

    {
      title: "AI Model",

      value: model || "No Model",

      icon: <BrainCircuit size={24} />,

      gradient:
        "from-blue-500 to-cyan-500"
    },

    {
      title: "Forecast Error",

      value: `${forecastError}%`,

      icon: <Activity size={24} />,

      gradient:
        "from-red-500 to-orange-500"
    },

    {
      title: "Forecast Months",

      value: forecastData.length,

      icon: <TrendingUp size={24} />,

      gradient:
        "from-purple-500 to-pink-500"
    },

    {
      title: "Prediction Status",

      value: predictionStatus,

      icon: <BarChart3 size={24} />,

      gradient:
        predictionStatus === "Active"
          ? "from-green-500 to-emerald-500"
          : "from-yellow-500 to-orange-500"
    }
  ]


  return (

    <div className="min-h-screen text-white">


      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold">

          AI Forecast Intelligence

        </h1>

        <p className="text-slate-400 mt-3 text-lg">

          Advanced Prophet-based business demand forecasting system

        </p>

      </div>


      {/* FILTER SECTION */}

      <motion.div

        initial={{
          opacity: 0,
          y: 20
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 shadow-2xl mb-10"
      >

        <div className="flex items-center gap-3 mb-6">

          <Filter size={24} />

          <h2 className="text-2xl font-bold">

            Forecast Filters

          </h2>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">


          {/* CATEGORY */}

          <input
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="w-full bg-[#1e2b45] border border-[#2d3b55] rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none"
          />


          {/* PRODUCT */}

          <input
            type="text"
            placeholder="Enter Product"
            value={product}
            onChange={(e) =>
              setProduct(e.target.value)
            }
            className="w-full bg-[#1e2b45] border border-[#2d3b55] rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none"
          />


          {/* MONTHS */}

          <select
            value={months}
            onChange={(e) =>
              setMonths(Number(e.target.value))
            }
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none"
          >

            <option value={3}>
              3 Months
            </option>

            <option value={6}>
              6 Months
            </option>

            <option value={12}>
              12 Months
            </option>

          </select>


          {/* BUTTON */}

          <button
            onClick={fetchForecast}
            className="bg-blue-600 hover:bg-blue-700 transition rounded-xl font-semibold"
          >

            {
              loading
                ? "Loading..."
                : "Generate Forecast"
            }

          </button>

        </div>

      </motion.div>


      {/* KPI CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        {

          cards.map((card, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 30
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.4,
                delay: index * 0.1
              }}

              whileHover={{
                scale: 1.03
              }}

              className={`

                bg-gradient-to-br
                ${card.gradient}

                rounded-3xl
                p-6

                shadow-2xl
                border
                border-white/10
              `}
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm opacity-80">

                    {card.title}

                  </p>

                  <h2 className="text-3xl font-bold mt-3">

                    {card.value}

                  </h2>

                </div>

                <div className="bg-white/20 p-4 rounded-2xl">

                  {card.icon}

                </div>

              </div>

            </motion.div>
          ))
        }

      </div>


      {/* FORECAST CHART */}

      <motion.div

        initial={{
          opacity: 0,
          y: 40
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.5
        }}

        className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl mb-10"
      >

        <div className="mb-8">

          <h2 className="text-3xl font-bold">

            Future Revenue Prediction

          </h2>

          <p className="text-slate-400 mt-2">

            AI-generated forecast trend analysis using Prophet forecasting

          </p>

        </div>


        {
          errorMessage && (

            <div className="text-red-400 mb-5">

              {errorMessage}

            </div>
          )
        }


        {
          forecastData.length > 0 ? (

            <ResponsiveContainer
              width="100%"
              height={400}
            >

              <LineChart data={forecastData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#334155"
                />

                <XAxis
                  dataKey="month"
                  stroke="#94a3b8"
                />

                <YAxis stroke="#94a3b8" />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="predicted_revenue"
                  stroke="#10b981"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          ) : (

            <div className="h-[400px] flex items-center justify-center text-slate-400 text-xl">

              No Forecast Prediction Available

            </div>
          )
        }

      </motion.div>


      {/* AI INSIGHTS */}

      <motion.div

        initial={{
          opacity: 0,
          y: 40
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.6
        }}

        className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl mb-10"
      >

        <h2 className="text-3xl font-bold mb-8">

          AI Forecast Insights

        </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6">

            <h3 className="text-xl font-semibold mb-3">

              Trend Analysis

            </h3>

            <p className="text-slate-400 leading-relaxed">

              Prophet model identified long-term sales growth and seasonal demand patterns.

            </p>

          </div>


          <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6">

            <h3 className="text-xl font-semibold mb-3">

              Forecast Quality

            </h3>

            <p className="text-slate-400 leading-relaxed">

              Current forecast error is {forecastError}% MAPE based on unseen validation data.

            </p>

          </div>


          <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6">

            <h3 className="text-xl font-semibold mb-3">

              Business Recommendation

            </h3>

            <p className="text-slate-400 leading-relaxed">

              Use forecasting insights to optimize inventory planning and future sales strategy.

            </p>

          </div>

        </div>

      </motion.div>


      {/* TABLE */}

      <motion.div

        initial={{
          opacity: 0,
          y: 40
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.7
        }}

        className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl"
      >

        <h2 className="text-3xl font-bold mb-8">

          Future Predictions

        </h2>


        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-700">

                <th className="text-left py-5 text-slate-300">

                  Forecast Month

                </th>

                <th className="text-left py-5 text-slate-300">

                  Predicted Revenue

                </th>

                <th className="text-left py-5 text-slate-300">

                  Status

                </th>

              </tr>

            </thead>

            <tbody>

              {

                forecastData.map((item) => (

                  <tr
                    key={item.month}
                    className="border-b border-slate-800"
                  >

                    <td className="py-5 font-medium">

                      {item.month}

                    </td>

                    <td className="py-5 text-green-400 font-bold">

                      ₹ {item.predicted_revenue}

                    </td>

                    <td className="py-5">

                      <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">

                        Predicted

                      </span>

                    </td>

                  </tr>
                ))
              }

            </tbody>

          </table>

        </div>

      </motion.div>

    </div>
  )
}

export default Forecast