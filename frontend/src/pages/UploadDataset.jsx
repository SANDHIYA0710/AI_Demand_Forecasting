import { useState } from "react"

import { motion } from "framer-motion"

import {
  UploadCloud,
  FileSpreadsheet,
  CheckCircle2
} from "lucide-react"

import API from "../api/api"

function UploadDataset() {

  const [file, setFile] = useState(null)

  const [message, setMessage] = useState("")

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState(false)


  const handleFileChange = (e) => {

    setFile(e.target.files[0])

    setSuccess(false)

    setMessage("")
  }


  const handleUpload = async () => {

    if (!file) {

      setMessage(
        "Please select a file"
      )

      return
    }

    try {

      setLoading(true)

      setMessage("")

      const token = localStorage.getItem(
        "token"
      )

      const formData = new FormData()

      formData.append(
        "file",
        file
      )

      const response = await API.post(

        "/dataset/upload",

        formData,

        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        }
      )

      setSuccess(true)

      setMessage(
        response.data.message ||
        "Dataset uploaded successfully"
      )

    } catch (error) {

      setSuccess(false)

      setMessage(
        error.response?.data?.detail ||
        "Upload failed"
      )

    } finally {

      setLoading(false)
    }
  }


  return (

    <div className="min-h-screen bg-[#f5f7fb] p-8">

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold text-slate-900">
          Upload Dataset
        </h1>

        <p className="text-slate-500 mt-4 text-xl">
          Upload CSV or Excel files for AI-powered demand forecasting
        </p>

      </div>


      {/* UPLOAD CARD */}

      <motion.div

        initial={{
          opacity: 0,
          y: 30
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.5
        }}

        className="max-w-5xl bg-white border border-slate-200 rounded-[40px] shadow-sm p-10"
      >

        {/* DROP AREA */}

        <label
          htmlFor="dataset-upload"
          className="
            border-2
            border-dashed
            border-slate-200
            rounded-[35px]
            bg-slate-50
            p-16
            flex
            flex-col
            items-center
            justify-center
            text-center
            cursor-pointer
            hover:border-emerald-300
            hover:bg-emerald-50/30
            transition-all
            duration-300
          "
        >

          <div className="w-28 h-28 rounded-full bg-emerald-100 flex items-center justify-center mb-8">

            <UploadCloud
              size={58}
              className="text-emerald-500"
            />

          </div>

          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Drag & Drop Dataset
          </h2>

          <p className="text-slate-500 text-xl max-w-2xl leading-relaxed">
            Upload CSV or Excel files for analytics and forecasting
          </p>

          {
            file && (

              <div className="mt-10 flex items-center gap-4 bg-white border border-emerald-200 rounded-2xl px-6 py-4 shadow-sm">

                <FileSpreadsheet className="text-emerald-500" />

                <span className="font-medium text-slate-700 text-lg break-all">
                  {file.name}
                </span>

              </div>
            )
          }

          <input
            id="dataset-upload"
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileChange}
            className="hidden"
          />

        </label>


        {/* MESSAGE */}

        {
          message && (

            <div
              className={`
                mt-8
                rounded-2xl
                px-6
                py-5
                flex
                items-center
                gap-4
                text-lg
                font-medium

                ${
                  success

                    ? "bg-emerald-50 text-emerald-600 border border-emerald-200"

                    : "bg-red-50 text-red-500 border border-red-200"
                }
              `}
            >

              {
                success && (
                  <CheckCircle2 size={24} />
                )
              }

              {message}

            </div>
          )
        }


        {/* BUTTON */}

        <button
          onClick={handleUpload}
          disabled={loading}
          className="
            w-full
            mt-10
            bg-gradient-to-b
            from-emerald-400
            to-emerald-500
            hover:from-emerald-500
            hover:to-emerald-600
            text-white
            text-2xl
            font-semibold
            py-6
            rounded-[25px]
            transition-all
            duration-300
            shadow-lg
            disabled:opacity-70
          "
        >

          {
            loading

              ? "Uploading Dataset..."

              : "Upload Dataset"
          }

        </button>

      </motion.div>

    </div>
  )
}

export default UploadDataset
