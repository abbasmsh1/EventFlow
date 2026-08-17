import { motion } from 'framer-motion'
import { Calendar, BarChart3, Users, Settings, LogOut } from 'lucide-react'

const menuItems = [
  { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
  { id: 'calendar', icon: Calendar, label: 'Calendar' },
  { id: 'attendees', icon: Users, label: 'Attendees' },
]

export default function Sidebar({ active, setActive }) {
  return (
    <motion.aside 
      className="w-64 bg-gradient-to-b from-slate-900 to-slate-950 border-r border-white/10 p-6 flex flex-col"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
    >
      <motion.h1 
        className="text-2xl font-bold gradient-text mb-12"
        whileHover={{ scale: 1.05 }}
      >
        ✨ EventFlow
      </motion.h1>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              active === item.id 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-400 hover:text-white hover:bg-white/10'
            }`}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </motion.button>
        ))}
      </nav>

      <motion.button 
        className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white w-full rounded-lg hover:bg-white/10 transition-colors"
        whileHover={{ x: 4 }}
      >
        <LogOut size={20} />
        <span>Logout</span>
      </motion.button>
    </motion.aside>
  )
}
