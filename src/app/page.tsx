import { Button, Checkbox } from '@radix-ui/themes'
import React from 'react'

function HomePage() {
  return (
    <>
      <div className=" flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-black">Voyager IT</h2>
            <p className="mt-2 text-center text-xl text-teal-400">A reliable telecommunications company.</p>
            <div className="flex justify-center">
              <Button className="mt-4 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
                View Our Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage