"use client"

import { TeamMemberInfo } from '@/features/team/types'
import Image from 'next/image'
import { User } from 'lucide-react'
import { useState } from 'react'

const TRUNCATE_CHAR_LIMIT = 150

const picClasses = `h-20 w-20 aspect-square rounded-full object-cover`

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
    <div className={`flex gap-4 rounded-xl border-1 border-zinc-800 bg-zinc-900 py-6 pr-6 pl-3`}>
      {teamMember.pic ? (
        <Image
          src={teamMember.pic.src}
          alt={`Photo of ${teamMember.name}`}
          width={100}
          height={100}
          className={`${picClasses}`}
        />
      ) : (
        <div className={`${picClasses} flex flex-col items-center justify-center bg-zinc-950`}>
          <User width={40} height={40} />
        </div>
      )}
      <div className={`flex flex-col gap-2`}>
        <div className={`flex flex-col`}>
          <span className={`text-lg font-bold text-zinc-100`}>{teamMember.name}</span>
          <span className={`text-zinc-300`}>{teamMember.role}</span>
        </div>
        <div className={`pb-3 text-sm text-zinc-200/80`}>
          {isExpanded ? (
            <p>{teamMember.bio}</p>
          ) : (
            <p>
              {truncatedBio}...
              <button
                onClick={() => setIsExpanded(true)}
                className={`mt-1 block cursor-pointer text-zinc-400`}
              >
                show more
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
