import { PageHeader } from '@/components/layout/PageHeader'
import { TeamMemberInfo } from '@/features/team/types'
import ImraanMohammedPic from "../../../features/team/team_photos/imraan-mohammed.jpeg"
import MaxThumPic from "../../../features/team/team_photos/max-thum.jpeg"
import NickMoorePic from "../../../features/team/team_photos/nick-moore.jpeg"
import NirmalRajeshPic from "../../../features/team/team_photos/nirmal-rajesh.jpeg"
import MaxIvanovicPic from "../../../features/team/team_photos/max-ivanovic.jpeg"
import TeamMemberGrid from '@/features/team/components/TeamMemberGrid'

const teamMembers: TeamMemberInfo[] = [
  {
    name: "Nirmal Rajesh",
    role: "Project Manager",
    bio: "Keeping the team on track. Full-time student studying Information Technology.",
    pic: NirmalRajeshPic
  },
  {
    name: "Imraan Mohammed",
    role: "Business Analyst",
    bio: "Turning client needs into actionable tasks for the team. Final Year IT Student @RMIT, Business Owner and IT Support Volunteer.",
    pic: ImraanMohammedPic
  },
  {
    name: "Max Thum",
    role: "UX",
    bio: "Designing human centric designs for digital mediums, a final year graduate student and founder of a business.",
    pic: MaxThumPic
  },
  {
    name: "Nick Moore",
    role: "Developer",
    bio: "Web developer and final year IT student at RMIT.",
    pic: NickMoorePic
  },
  {
    name: "Max Ivanovic",
    role: "Developer",
    pic: MaxIvanovicPic,
    bio: "Final year computer science student at RMIT.",
  }
]

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Team" description="Our team" />
      <TeamMemberGrid header={null} teamMembers={teamMembers} />

    </div>
  )
}
