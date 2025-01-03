export async function getNpOrRpSong() {
  return fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ajtruex&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=2`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    }
  )
}

export async function getTopArtists() {
  return fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=ajtruex&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=10&period=1month`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    }
  )
}
export async function getTopArtistsYear() {
  return fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=ajtruex&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=10&period=12month`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    }
  )
}
export async function getTopTracks() {
  return fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=ajtruex&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=10&period=1month`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    }
  )
}
export async function getTopTracksYear() {
  return fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=ajtruex&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=10&period=12month`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    }
  )
}

export async function getPlaycount() {
  return fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=ajtruex&api_key=${process.env.LASTFM_API_KEY}&format=json`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    }
  )
}
