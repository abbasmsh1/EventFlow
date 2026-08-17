import { Calendar, BarChart3, Users, LogOut, CalendarRange } from 'lucide-react'

const menuItems = [
  { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
  { id: 'calendar', icon: Calendar, label: 'Calendar' },
  { id: 'attendees', icon: Users, label: 'Attendees' },
]

export default function Sidebar({ active, setActive }) {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-5 flex flex-col">
      <div className="flex items-center gap-2.5 px-2 mb-10">
        <span className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
          <CalendarRange size={18} className="text-white" />
        </span>
        <span className="text-lg font-bold tracking-tight text-white">EventFlow</span>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            aria-current={active === item.id ? 'page' : undefined}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              active === item.id
                ? 'bg-indigo-500/15 text-indigo-300'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
            }`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <button className="flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium text-slate-400 hover:text-slate-100 w-full rounded-lg hover:bg-slate-800 transition-colors">
        <LogOut size={18} />
        <span>Log out</span>
      </button>
    </aside>
  )
}
