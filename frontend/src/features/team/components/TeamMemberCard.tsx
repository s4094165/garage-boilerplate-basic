import { TeamMemberInfo } from '@/features/team/types'
import Image from 'next/image'

export default function TeamMemberCard({ teamMember }: { teamMember: TeamMemberInfo }) {
  return (
    <div className={`flex gap-4 py-6 pl-3 pr-6 bg-zinc-900 rounded-xl border-1 border-zinc-800`}>
      <Image
        src={teamMember.pic.src}
        alt={`Photo of ${teamMember.name}`}
        width={100}
        height={100}
        className={`h-20 w-20 aspect-square rounded-full object-cover`}
      />
      <div className={`flex flex-col gap-2`}>
        <div className={`flex flex-col`}>
          <span className={`font-bold text-lg text-zinc-100`}>{teamMember.name}</span>
          <span className={`text-zinc-300`}>{teamMember.role}</span>
        </div>
        <p className={`pb-3 text-zinc-200/80 text-sm`}>{teamMember.bio}</p>
      </div>
    </div>
  )
}
