import { Plus } from 'lucide-react'

function TreeNode({ label, color, onClick }: { label: string; color: string; onClick?: () => void }) {
  return (
    <div className="flex items-center gap-0 cursor-pointer" onClick={onClick}>
      <svg width="12" height="1" className="block shrink-0">
        <line x1="0" y1="0" x2="12" y2="0" className="stroke-foreground" strokeWidth="1" />
      </svg>
      <div className={`flex w-[140px] items-center gap-2 border border-foreground px-3 py-2 ${color}`}>
        <span className="flex-1 text-center text-base font-semibold leading-none text-white">{label}</span>
        <span className="flex size-4 items-center justify-center bg-[#3B7BDB] text-white shrink-0">
          <Plus className="size-2.5" />
        </span>
      </div>
    </div>
  )
}

export function RoleTree({ onSelect }: { onSelect?: (name: string) => void }) {
  return (
    <div className="relative pt-2 pb-2">
      <svg className="absolute left-0 top-0 w-px stroke-foreground" style={{ height: '100%' }}>
        <line x1="0" y1="0" x2="0" y2="100%" strokeWidth="1" />
      </svg>
      <div className="relative ml-6">
        <div className="relative z-10 -ml-6">
          <TreeNode label="ROOT" color="bg-[#FD7F4E]" onClick={() => onSelect?.('ROOT')} />
        </div>
        <svg className="absolute left-0 top-0 w-px stroke-foreground" style={{ height: '100%' }}>
          <line x1="0" y1="0" x2="0" y2="100%" strokeWidth="1" />
        </svg>
        <div className="pt-3">
          <TreeNode label="SYSADMIN" color="bg-teal-400" onClick={() => onSelect?.('SYSADMIN')} />
        </div>
      </div>
    </div>
  )
}
