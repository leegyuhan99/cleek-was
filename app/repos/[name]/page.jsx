import Repo from '@/components/Repo'
import Link from 'next/link'

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="flex flex-col justify-start items-start max-w-lg">
      <Link
        href="/repos"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Back to Repositories
      </Link>

      <Repo name={name} />
    </div>
  )
}
export default RepoPage
