import { motion } from 'framer-motion'
import { TrendingUp, Users, Calendar, DollarSign } from 'lucide-react'

const metrics = [
  { icon: Calendar, label: 'Events', value: '24', trend: '+12%' },
  { icon: Users, label: 'Attendees', value: '1,240', trend: '+8%' },
  { icon: DollarSign, label: 'Revenue', value: '$45.2K', trend: '+23%' },
  { icon: TrendingUp, label: 'Growth', value: '3.2x', trend: '+5%' },
]

const events = [
  { id: 1, name: 'Tech Summit 2024', date: 'Mar 15, 2024', attendees: 320 },
  { id: 2, name: 'Web Conference', date: 'Mar 20, 2024', attendees: 280 },
  { id: 3, name: 'Design Workshop', date: 'Mar 25, 2024', attendees: 95 },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Dashboard() {
  return (
    <div className="h-full overflow-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Welcome back, Alex</h2>
        <p className="text-slate-400">Here's what's happening with your events today.</p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {metrics.map((metric, i) => (
          <motion.div 
            key={i}
            variants={item}
            className="glass rounded-xl p-6 hover:bg-white/20 transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center justify-between mb-4">
              <metric.icon className="text-blue-400" size={24} />
              <span className="text-green-400 text-sm">{metric.trend}</span>
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">{metric.label}</h3>
            <p className="text-2xl font-bold">{metric.value}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <motion.div variants={item} className="lg:col-span-2 glass rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Upcoming Events</h3>
          <div className="space-y-4">
            {events.map((event, i) => (
              <motion.div
                key={event.id}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                whileHover={{ x: 4 }}
              >
                <div>
                  <p className="font-semibold">{event.name}</p>
                  <p className="text-slate-400 text-sm">{event.date}</p>
                </div>
                <motion.div 
                  className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  {event.attendees} attendees
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="glass rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-400">Capacity</span>
                <span className="font-bold">78%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div 
                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '78%' }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-400">Registration</span>
                <span className="font-bold">92%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div 
                  className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '92%' }}
                  transition={{ delay: 0.6, duration: 1 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
