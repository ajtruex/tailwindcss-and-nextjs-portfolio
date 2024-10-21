// app/components/GitHubDashboard.js
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Activity,
  GitBranch,
  GitCommitVertical,
  GitCommit,
  GitPullRequest,
  Star,
  Plus,
} from "lucide-react"
import { stat } from "fs"

const getActivityIcon = (type) => {
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

const GitHubDashboard = ({ username = "ajtruex" }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState({
    events: [],
    user: "ajtruex",
    repos: [],
    statistics: {
      contributions: 0,
      repositories: 0,
      stars: 0,
    },
    stats: [],
  })

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true)
        setError(null)

        // Fetch data in parallel
        const [eventsResponse, userResponse, reposResponse, statsResponse] =
          await Promise.all([
            fetch(`/api/github/events?username=${username}`),
            fetch(`/api/github/user?username=${username}`),
            fetch(`/api/github/repos?username=${username}`),
            fetch(`/api/github/stats?username=${username}`),
          ])

        // Check if any request failed
        if (!eventsResponse.ok || !userResponse.ok || !reposResponse.ok) {
          throw new Error("Failed to fetch GitHub data")
        }

        // Parse responses
        const [events, user, repos, stats] = await Promise.all([
          eventsResponse.json(),
          userResponse.json(),
          reposResponse.json(),
          statsResponse.json(),
        ])
        // console.log(statsData)
        // Calculate stats
        const statistics = {
          contributions: events.length, // This is simplified
          repositories: repos.length,

          stars: stats.total_stars,
        }

        setData({ events, user, repos, statistics, stats })
      } catch (err) {
        console.error("Error fetching GitHub data:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [username])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center p-6 text-red-500">
        <p>Error loading GitHub data: {error}</p>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-center font-bold text-4xl">
        GitHub Dashboard
        <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-r from-indigo-500    to-fuchsia-500 border-0 rounded"></hr>
      </h1>
      <div>
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="">
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
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-center space-x-6 space-y-0 pb-2">
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
              <CardHeader className="flex flex-row items-center justify-center space-x-6 space-y-0 pb-2">
                <CardTitle className="text-base font-medium">Stars</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <div className="text-2xl font-bold">
                  {data.stats.total_stars}
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
                  .map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-2 dark:bg-zinc-800 bg-black text-zinc-100 rounded-full">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          {activity.payload?.commits?.[0]?.message || ""}
                        </p>
                        <p className="text-sm text-gray-500">{activity.repo}</p>
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
}

export default GitHubDashboard
