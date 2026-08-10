import { TeamMemberInfo } from '@/features/team/types'
import TeamMemberCard from '@/features/team/components/TeamMemberCard'

export default function TeamMemberGrid({header, teamMembers}:
{header: string | null, teamMembers: TeamMemberInfo[]}) {
  return (
    <div className={`mb-10`}>
      { header &&
        <h2
          className={`font-bold text-2xl mb-6`}
        >
          {header}
        </h2>
      }
      <div className={`
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
      `}>
        {teamMembers.map((teamMember: TeamMemberInfo, i) => (
          <TeamMemberCard teamMember={teamMember} key={i}/>
        ))}
      </div>
    </div>
  )
}
