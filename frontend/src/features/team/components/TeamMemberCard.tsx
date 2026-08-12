"use client"

import { TeamMemberInfo } from '@/features/team/types'
import Image from 'next/image'
import { useState } from 'react'

const TRUNCATE_CHAR_LIMIT = 150

export default function TeamMemberCard({ teamMember }: { teamMember: TeamMemberInfo }) {
  const bioNeedsTruncation = teamMember.bio.length > TRUNCATE_CHAR_LIMIT
  const [isExpanded, setIsExpanded] = useState(!bioNeedsTruncation)
  let truncatedBio = ""
  if (bioNeedsTruncation) {
    truncatedBio = teamMember.bio.substring(0, TRUNCATE_CHAR_LIMIT)
  } else {
    truncatedBio = teamMember.bio
  }

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
          <div className={`pb-3 text-zinc-200/80 text-sm`}>
            {
              isExpanded ?
                <p>
                  {teamMember.bio}
                </p>
                    :
                    <p>
                      {truncatedBio}...
                      <button
                        onClick={() => setIsExpanded(true)}
                        className={`text-zinc-400 cursor-pointer block mt-1`}
                      >
                        show more
                      </button>
                    </p>
            }
          </div>
      </div>
    </div>
  )
}
