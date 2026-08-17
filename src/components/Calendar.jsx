import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 1))

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const calendarDays = Array(firstDay).fill(null).concat(Array.from({ length: daysInMonth }, (_, i) => i + 1))

  const eventDays = [5, 12, 15, 20, 25, 28]

  const monthEvents = [
    { date: 'March 5', name: 'Kickoff Meeting', time: '10:00 AM' },
    { date: 'March 12', name: 'Workshop Day 1', time: '9:00 AM' },
    { date: 'March 15', name: 'Tech Summit', time: '8:00 AM' },
    { date: 'March 20', name: 'Web Conference', time: '9:30 AM' },
    { date: 'March 25', name: 'Design Workshop', time: '2:00 PM' },
  ]

  return (
    <div className="h-full overflow-auto p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-1">Event calendar</h2>
        <p className="text-slate-400">View and manage all your scheduled events.</p>
      </div>

      <div className="panel p-8 max-w-2xl">
        <div className="flex items-center justify-between mb-7">
          <h3 className="text-xl font-semibold">
            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h3>
          <div className="flex gap-1">
            <button
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
              aria-label="Previous month"
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
              aria-label="Next month"
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1.5 mb-2">
          {days.map(day => (
            <div key={day} className="text-center text-slate-500 text-xs font-semibold uppercase tracking-wide py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1.5">
          {calendarDays.map((day, i) => (
            <div
              key={i}
              className={`aspect-square flex items-center justify-center rounded-lg text-sm tabular-nums transition-colors ${
                !day
                  ? ''
                  : eventDays.includes(day)
                    ? 'bg-indigo-500 text-white font-semibold cursor-pointer hover:bg-indigo-400'
                    : 'text-slate-300 hover:bg-slate-800 cursor-pointer'
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-7 border-t border-slate-800">
          <h4 className="font-semibold mb-4">Events this month</h4>
          <div className="divide-y divide-slate-800">
            {monthEvents.map((event, i) => (
              <div key={i} className="flex items-center gap-3.5 py-3 group cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-none" aria-hidden />
                <div className="flex-1">
                  <p className="font-medium group-hover:text-indigo-300 transition-colors">{event.name}</p>
                  <p className="text-slate-400 text-sm">{event.date} &middot; {event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
