import RequestException from './exception'

export default class GithubRepo {
    readonly owner: string
    readonly name: string
    readonly avatar: string
    readonly visibility: 'Private' | 'Public'
    readonly stars: number
    readonly forks: number

    private constructor(
        owner: string,
        name: string,
        avatar: string,
        visibility: 'Private' | 'Public',
        stars: number,
        forks: number
    ) {
        this.owner = owner
        this.name = name
        this.avatar = avatar
        this.visibility = visibility
        this.stars = stars
        this.forks = forks
    }

    static async getRepoInfo(owner: string, name: string): Promise<GithubRepo> {
        const response = await fetch(`https://api.github.com/repos/${owner}/${name}`)
        const data = await response.json()

        if (!response.ok) {
            throw new RequestException(
                response.status,
                data.message || 'Unknown error occurred'
            )
        }

        return new GithubRepo(
            owner,
            name,
            data.owner.avatar_url,
            data.private ? 'Private' : 'Public',
            data.stargazers_count,
            data.forks_count
        )
    }
}