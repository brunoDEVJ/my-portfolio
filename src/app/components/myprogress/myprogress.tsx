import Image from 'next/image'
import './myprogress.scss'

interface MyProgressProps {
  href: string
  img: string
}

export function MyProgress({ href, img }: MyProgressProps) {

  return (
    <>
      <a className='anc' href={href}>
        <Image
          className='nlw'
          src={img}
          width={100}
          height={100}
          alt="Eu Logo"
          priority
        />
      </a>
    </>
  )
}