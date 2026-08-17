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
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { ease: [0.2, 0.9, 0.3, 1], duration: 0.4 } },
}

export default function Dashboard() {
  return (
    <div className="h-full overflow-auto p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-1">Welcome back, Alex</h2>
        <p className="text-slate-400">Here's what's happening with your events today.</p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div
          variants={item}
          className="panel grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-800 mb-6"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="p-6">
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                <metric.icon size={16} />
                {metric.label}
              </div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-2xl font-bold tabular-nums">{metric.value}</span>
                <span className="text-emerald-400 text-xs font-semibold tabular-nums">{metric.trend}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div variants={item} className="lg:col-span-2 panel p-6">
            <h3 className="text-lg font-semibold mb-5">Upcoming events</h3>
            <div className="divide-y divide-slate-800">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between py-3.5 group cursor-pointer"
                >
                  <div>
                    <p className="font-medium group-hover:text-indigo-300 transition-colors">{event.name}</p>
                    <p className="text-slate-400 text-sm">{event.date}</p>
                  </div>
                  <span className="text-sm text-slate-300 tabular-nums">
                    {event.attendees} <span className="text-slate-500">attendees</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="panel p-6">
            <h3 className="text-lg font-semibold mb-5">Quick stats</h3>
            <div className="space-y-6">
              {[
                { label: 'Capacity', pct: 78 },
                { label: 'Registration', pct: 92 },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-slate-400">{stat.label}</span>
                    <span className="font-semibold tabular-nums">{stat.pct}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      className="bg-indigo-400 h-full rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      style={{ width: `${stat.pct}%`, transformOrigin: 'left' }}
                      transition={{ delay: 0.4, duration: 0.7, ease: [0.2, 0.9, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
