/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

import GithubRepo from '@/schema'
import { formatNumber } from '@/libs'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/section'
import { Sponsor, Fork, Starred } from '@/components/icons'


export const config = {
  runtime: 'edge',
}

export const [boldFontFile, githubPic, mousePic, starPic] = await Promise.all([
  fetch(new URL('../../assets/fonts/OpenSans-Bold.ttf', import.meta.url))
    .then(res => res.arrayBuffer()),
  
  fetch(new URL('../../assets/images/github.png', import.meta.url))
    .then(res => res.arrayBuffer()),
  
  fetch(new URL('../../assets/images/mouse.png', import.meta.url))
    .then(res => res.arrayBuffer()),
  
  fetch(new URL('../../assets/images/star.png', import.meta.url))
    .then(res => res.arrayBuffer())
]);

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl

  const owner = searchParams.get('owner')
  const repo = searchParams.get('repo')

  if (!owner || !repo) {
    return new Response('Owner and Repo must be provided', { status: 400 })
  }

  const repoData = await GithubRepo.getRepoInfo(owner, repo)

  const BASE_WIDTH = 500
  const CHAR_WIDTH = 20
  const elementWidth = (repoData.name.length + repoData.forks.toString().length + repoData.stars.toString().length ) * CHAR_WIDTH
  const totalWidth = BASE_WIDTH + elementWidth


  return new ImageResponse(
    (
      <main
        style={{
          width: '100%',
          height: '6rem',
          padding: '0 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          border: 'solid #4b4b4b',
          borderWidth: 1,
          backgroundImage: 'radial-gradient(circle at 85% -10%, #263a2d 3%, #2b1e15 20%, #111111 100%)',
        }}
      >
        <Section>
          <img 
            width='28rem' 
            height='28rem' 
            src={repoData.avatar} 
            style={{'borderRadius': '0.5rem'}}
            alt='avatar'
          />
          <Text variant='title'>{repoData.name}</Text>
          <Text variant='label'>{repoData.visibility}</Text>
        </Section>

        <Section styles={{marginRight: '3rem'}}>
          <Button>
            <Sponsor />
            <Text variant='text'>Sponser</Text>
          </Button>

          <Button>
            <Fork />
            <Text variant='text'>Fork</Text>
            <Text variant='counter'>{formatNumber(repoData.forks)}</Text>
          </Button>


          <Button>
            <Starred />
            <Text variant='text'>Starred</Text>
            <Text variant='counter'>{formatNumber(repoData.stars)}</Text>
          </Button>

          <img 
            width='80px'
            height='80px'
            src={`data:image/png;base64,${Buffer.from(githubPic).toString('base64')}`}
            alt="illustration"
            style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-55px',
            }}
          />
          <img 
            width='32px'
            height='32px'
            src={`data:image/png;base64,${Buffer.from(mousePic).toString('base64')}`}
            alt="illustration"
            style={{
              position: 'absolute',
              bottom: '-20px',
              right: '95px',
            }}
          />
          <img 
            width='50px'
            height='24px'
            src={`data:image/png;base64,${Buffer.from(starPic).toString('base64')}`}
            alt="illustration"
            style={{
              position: 'absolute',
              bottom: '28px',
              right: '125px',
            }}
          />
        </Section>
      </main>
    ),
    {
      width: totalWidth,
      height: 96,
      fonts: [
        {
          name: 'OpenSans',
          data: boldFontFile,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  )
}