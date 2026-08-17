import { useState } from 'react'
import { motion } from 'framer-motion'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import Calendar from './components/Calendar'
import Attendees from './components/Attendees'

export default function App() {
  const [active, setActive] = useState('dashboard')

  return (
    <div className="flex h-screen bg-slate-950">
      <Sidebar active={active} setActive={setActive} />
      
      <main className="flex-1 overflow-hidden">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.2, 0.9, 0.3, 1] }}
          className="h-full"
        >
          {active === 'dashboard' && <Dashboard />}
          {active === 'calendar' && <Calendar />}
          {active === 'attendees' && <Attendees />}
        </motion.div>
      </main>
    </div>
  )
}
