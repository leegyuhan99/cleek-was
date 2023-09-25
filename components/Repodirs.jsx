import { Content } from 'next/font/google'
import React from 'react'

const username = githubUsername

async function fetchRepo(name) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}/contents`
  )
  const contents = await response.json()
  return contents
}
const RepoDirs = async ({ name }) => {
  const repo = await fetchRepo(name)
  const dirs = contents.filter((content) => content.type === 'dir')

  return (
    <div className="mt-2 ">
      <h3 className="text-xl font-bold">Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link
              className="underline"
              href={`https://github.com/${username}/${name}/tree/master/${dir.path}`}
            >
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RepoDirs
