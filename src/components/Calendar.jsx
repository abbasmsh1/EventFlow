import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 1))
  
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
  
  const calendarDays = Array(firstDay).fill(null).concat(Array.from({ length: daysInMonth }, (_, i) => i + 1))

  const eventDays = [5, 12, 15, 20, 25, 28]

  return (
    <div className="h-full overflow-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Event Calendar</h2>
        <p className="text-slate-400">View and manage all your scheduled events.</p>
      </motion.div>

      <motion.div 
        className="glass rounded-xl p-8 max-w-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold">
            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h3>
          <div className="flex gap-2">
            <motion.button 
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft />
            </motion.button>
            <motion.button 
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight />
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {days.map(day => (
            <div key={day} className="text-center text-slate-400 text-sm font-semibold py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((day, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.02 }}
              className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                !day 
                  ? 'text-slate-600' 
                  : eventDays.includes(day)
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white cursor-pointer hover:shadow-lg hover:shadow-blue-500/50'
                    : 'bg-white/5 hover:bg-white/10 cursor-pointer'
              }`}
              whileHover={day ? { scale: 1.1, y: -2 } : {}}
              whileTap={day ? { scale: 0.95 } : {}}
            >
              {day}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <h4 className="font-semibold mb-4">Events This Month</h4>
          <div className="space-y-3">
            {[
              { date: 'March 5', name: 'Kickoff Meeting', time: '10:00 AM' },
              { date: 'March 12', name: 'Workshop Day 1', time: '9:00 AM' },
              { date: 'March 15', name: 'Tech Summit', time: '8:00 AM' },
              { date: 'March 20', name: 'Web Conference', time: '9:30 AM' },
              { date: 'March 25', name: 'Design Workshop', time: '2:00 PM' },
            ].map((event, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                whileHover={{ x: 4 }}
              >
                <div>
                  <p className="font-medium">{event.name}</p>
                  <p className="text-slate-400 text-sm">{event.date} • {event.time}</p>
                </div>
                <motion.div 
                  className="w-2 h-2 bg-blue-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
