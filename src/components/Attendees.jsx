import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Mail } from 'lucide-react'

const attendees = [
  { id: 1, name: 'Sarah Chen', email: 'sarah.chen@example.com', event: 'Tech Summit 2024', status: 'confirmed' },
  { id: 2, name: 'Marcus Webb', email: 'marcus.webb@example.com', event: 'Tech Summit 2024', status: 'confirmed' },
  { id: 3, name: 'Elena Petrova', email: 'elena.p@example.com', event: 'Web Conference', status: 'pending' },
  { id: 4, name: 'James Okafor', email: 'j.okafor@example.com', event: 'Web Conference', status: 'confirmed' },
  { id: 5, name: 'Yuki Tanaka', email: 'yuki.t@example.com', event: 'Design Workshop', status: 'pending' },
  { id: 6, name: 'Ana Silva', email: 'ana.silva@example.com', event: 'Design Workshop', status: 'confirmed' },
  { id: 7, name: 'Tom Becker', email: 'tom.b@example.com', event: 'Tech Summit 2024', status: 'cancelled' },
  { id: 8, name: 'Priya Sharma', email: 'priya.s@example.com', event: 'Web Conference', status: 'confirmed' },
]

const statusStyles = {
  confirmed: 'bg-emerald-500/15 text-emerald-300',
  pending: 'bg-amber-500/15 text-amber-300',
  cancelled: 'bg-rose-500/15 text-rose-300',
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Attendees() {
  const [query, setQuery] = useState('')

  const filtered = attendees.filter(a =>
    `${a.name} ${a.email} ${a.event}`.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="h-full overflow-auto p-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-1">Attendees</h2>
        <p className="text-slate-400">Manage registrations across all your events.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-8 max-w-md"
      >
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search attendees..."
          className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-12 pr-4 py-3 placeholder-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 transition-colors"
        />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="panel divide-y divide-slate-800"
      >
        {filtered.map((attendee) => (
          <motion.div
            key={attendee.id}
            variants={item}
            className="flex items-center justify-between p-4 hover:bg-slate-800/60 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-semibold text-sm">
                {attendee.name.split(' ').map(w => w[0]).join('')}
              </div>
              <div>
                <p className="font-semibold">{attendee.name}</p>
                <p className="text-slate-400 text-sm flex items-center gap-1">
                  <Mail size={12} /> {attendee.email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-sm hidden md:block">{attendee.event}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${statusStyles[attendee.status]}`}>
                {attendee.status}
              </span>
            </div>
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <p className="p-8 text-center text-slate-400">No attendees match "{query}"</p>
        )}
      </motion.div>
    </div>
  )
}
