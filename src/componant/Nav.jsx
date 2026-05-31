import React, { useState, useEffect } from 'react'
import './Nav.scss'

const Nav = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const month = months[now.getMonth()]
      const date = now.getDate()
      const hours = now.getHours() % 12 || 12
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const ampm = now.getHours() >= 12 ? 'PM' : 'AM'
      
      setDateTime(`${month} ${date} ` +` ${hours}:${minutes} ${ampm}`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
        <div className='h-6 w-full  bg-black/70 absolute top-0 left-0 flex items-center justify-between px-4 text-white nav-bar'>
        <div>
            <span>Activity</span>
        </div>
        <div>
            {dateTime}
        </div>
        <div className='flex items-center nav-network'>
            <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#e3e3e3"><path d="M440-80v-304L256-200l-56-56 224-224-224-224 56-56 184 184v-304h40l228 228-172 172 172 172L480-80h-40Zm80-496 76-76-76-74v150Zm0 342 76-74-76-76v150ZM157.5-437.5Q140-455 140-480t17.5-42.5Q175-540 200-540t42.5 17.5Q260-505 260-480t-17.5 42.5Q225-420 200-420t-42.5-17.5Zm560 0Q700-455 700-480t17.5-42.5Q735-540 760-540t42.5 17.5Q820-505 820-480t-17.5 42.5Q785-420 760-420t-42.5-17.5Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#e3e3e3"><path d="M480-120 0-600q96-98 220-149t260-51q137 0 261 51t219 149L480-120ZM232-482q53-38 116-59.5T480-563q69 0 132 21.5T728-482l116-116q-78-59-170.5-90.5T480-720q-101 0-193.5 31.5T116-598l116 116Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#e3e3e3"><path d="m616-320-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104Zm-496-40v-240h160l200-200v640L280-360H120Zm280-246-86 86H200v80h114l86 86v-252ZM300-480Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#e3e3e3"><path d="M320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-80h160v80h80q17 0 28.5 11.5T680-760v640q0 17-11.5 28.5T640-80H320Zm40-560h240v-80H360v80Z"/></svg>
            <span>90%</span>

        </div>

        </div>
    </>
  )
}

export default Nav
