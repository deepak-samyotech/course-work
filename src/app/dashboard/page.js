"use client";
import React from "react";
import { Button } from '../../components/ui/button'
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "../../components/ui/select"
import { Input } from "../../components/ui/input"
import { Card } from "../../components/ui/card"
import FileUpload from "../../components/ui/FileUpload";
import Link from "next/link";


const Dashboard = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the file upload process here
      console.log("Selected file:", file);
    }
  };

  console.log('app....ssssssss')
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-purple-800">Hey IB Folks! Unsure about the quality of your answers? We get you.</h1>

      <div className="flex gap-8">
        <Card className="w-2/3 p-6 shadow-lg">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6 text-center">
            <p className="text-gray-500 mb-2">Drag and drop a PDF</p>
            <p className="text-xs text-gray-400">*Limit 25 MB per file</p>

            <FileUpload onFileChange={handleFileChange} className="mt-4" />
          </div>

          <div className="space-y-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Coursework Type" />
              </SelectTrigger>
              <SelectContent>
                {/* Add options here */}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                {/* Add options here */}
              </SelectContent>
            </Select>

            <Input placeholder="Enter your essay title (Required)" />
            <Link href='/zui' >
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Evaluate your Score
              </Button>
            </Link>
          </div>
        </Card>

        <div className="w-1/3 bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="mb-4">
            {/* You'd need to add your own robot image here */}
            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4"></div>
          </div>
          <h2 className="text-xl font-bold mb-4">Evaluate your Coursework with a single click</h2>
          <div className="flex justify-center space-x-2 text-yellow-400 text-3xl">
            ⭐⭐⭐
          </div>
        </div>
      </div>
    </div>
  )

}

export default Dashboard