import { PageHeader } from '@/components/layout/PageHeader'
import { TeamMemberInfo } from '@/features/team/types'
import PlaceholderPic from "../../../../public/team_photos/placeholder.jpeg"
import TeamMemberGrid from '@/features/team/components/TeamMemberGrid'

const teamMembers: TeamMemberInfo[] = [
  {
    name: "Nirmal Rajesh",
    role: "Project Manager",
    bio: "Nam ipsum mi, lobortis quis turpis a, feugiat semper nisi. Sed consequat arcu leo, nec laoreet neque efficitur in.",
    pic: PlaceholderPic
  },
  {
    name: "Imraan Mohammed",
    role: "Business Analyst",
    bio: "Duis bibendum odio in ante lobortis suscipit. Duis lacinia ante leo. Nunc facilisis interdum enim, et bibendum felis pharetra vitae.",
    pic: PlaceholderPic
  },
  {
    name: "Max Thum",
    role: "UX",
    bio: "Mauris sem nunc, convallis a ipsum convallis, tempus porttitor nunc. Duis massa massa, auctor rutrum pretium vel, rhoncus eget erat. Curabitur id porta dolor. Donec at iaculis quam. Praesent posuere.",
    pic: PlaceholderPic
  },
  {
    name: "Nick Moore",
    role: "Developer",
    bio: "Praesent congue neque sed finibus porttitor. Vestibulum semper tempus justo vel aliquam.",
    pic: PlaceholderPic
  },
  {
    name: "Max Ivanovic",
    role: "Developer",
    pic: PlaceholderPic,
    bio: "Proin sit amet vulputate diam. Proin lacinia sapien vestibulum nulla dictum, quis scelerisque libero posuere. Donec eu lobortis purus.",
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
