import React from 'react'

function layout({children}) {
  return (
    <div>
        <h1 className='text-lg font-bold mb-12'>
            لیست یلاگ ها
        </h1>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-secondary-500 space-y-4">
            category list
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-9">
            {children}
        </div>
    </div>
  )
}

export default layout