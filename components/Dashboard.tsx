import {
  Activity,
  GitBranch,
  GitCommitVertical,
  GitPullRequest,
  Star,
  Plus,
  Disc,
  Eye,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const getActivityIcon = (type: string) => {
  switch (type) {
    case "PushEvent":
      return <GitCommitVertical className="w-4 h-4" />
    case "PullRequestEvent":
      return <GitPullRequest className="w-4 h-4" />
    case "WatchEvent":
      return <Star className="w-4 h-4" />
    case "CreateEvent":
      return <Plus className="w-4 h-4" />
    default:
      return <Activity className="w-4 h-4" />
  }
}

export const getBaseUrl = () => {
  if (typeof window !== "undefined") return "" // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}` // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

const fetchGitHubData = async (username: string) => {
  const baseUrl = getBaseUrl()
  const [events, user, repos, stats, pageviews, playcount] = await Promise.all([
    fetch(`${baseUrl}/api/github/events?username=${username}`).then((res) =>
      res.json()
    ),
    fetch(`${baseUrl}/api/github/user?username=${username}`).then((res) =>
      res.json()
    ),
    fetch(`${baseUrl}/api/github/repos?username=${username}`).then((res) =>
      res.json()
    ),
    fetch(`${baseUrl}/api/github/stats?username=${username}`).then((res) =>
      res.json()
    ),
    fetch(`${baseUrl}/api/analytics`).then((res) => res.json()),
    fetch(`${baseUrl}/api/playcount`).then((res) => res.json()),
  ])

  const statistics = {
    contributions: events.length,
    repositories: repos.length,
    stars: stats.total_stars,
  }

  return { events, user, repos, statistics, stats, pageviews, playcount }
}

const Dashboard = async ({ username = "ajtruex" }) => {
  try {
    const data = await fetchGitHubData(username)

    return (
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-center font-bold text-4xl">
          Dashboard
          <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-r from-indigo-500    to-fuchsia-500 border-0 rounded"></hr>
        </h1>
        <div>
          <div className="max-w-4xl mx-auto p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
              {/* <Card>
              <CardHeader className="flex flex-row items-center justify-center space-x-6 space-y-0 pb-2">
                <CardTitle className="text-base font-medium">
                  Recent Contributions
                </CardTitle>
                <GitCommit className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <div className="text-2xl font-bold">
                  {data.statistics.contributions}
                </div>
              </CardContent>
            </Card> */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-center space-x-4 space-y-0 pb-2">
                  <CardTitle className="text-base font-medium">
                    Repositories
                  </CardTitle>
                  <GitBranch className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                  <div className="text-2xl font-bold">
                    {data.statistics.repositories}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-center space-x-4 space-y-0 pb-2">
                  <CardTitle className="text-base font-medium">Stars</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                  <div className="text-2xl font-bold">
                    {data.stats.total_stars}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-center space-x-4 space-y-0 pb-2">
                  <CardTitle className="text-base font-medium">
                    Website Views
                  </CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                  <div className="text-2xl font-bold">
                    {data.pageviews.pageviews.value.toLocaleString()}
                  </div>
                </CardContent>
              </Card>
              <Card className="">
                <CardHeader className="flex flex-row items-center justify-center space-x-2 space-y-0 pb-2">
                  <CardTitle className="text-base tracking-tighter font-medium">
                    Last.fm Scrobbles
                  </CardTitle>
                  <Disc className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                  <div className="text-2xl font-bold">
                    {Number(data.playcount.user.playcount).toLocaleString()}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.events
                    .filter((activity) => activity.type !== "WatchEvent") // Filter out WatchEvent types
                    .filter((activity) => activity.type !== "PullRequestEvent") // Filter out WatchEvent types
                    .map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="p-2 dark:bg-zinc-800 bg-black text-zinc-100 rounded-full">
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">
                            {activity.payload?.commits?.[0]?.message || ""}
                          </p>
                          <p className="text-sm text-gray-500">
                            {activity.repo}
                          </p>
                        </div>
                        <span className="text-sm text-gray-500">
                          {activity.created_at
                            ? new Date(activity.created_at).toLocaleDateString()
                            : "No date"}
                        </span>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  } catch (err: any) {
    console.error("Error fetching GitHub data:", err)
    return (
      <div className="text-center p-6 text-red-500">
        <p>Error loading GitHub data: {err.message}</p>
      </div>
    )
  }
}

export default Dashboard
