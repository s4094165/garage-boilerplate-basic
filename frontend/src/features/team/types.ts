import { StaticImageData } from 'next/image'

export type TeamMemberInfo = {
  name: string;
  role: string;
  bio: string;
  pic: StaticImageData
}
