import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface IBackLinkProps {
  href: string
}

const BackLink: IComponent<IBackLinkProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a>
        ⬅️&nbsp;&nbsp;
        <span className="underline hover:no-underline">{children}</span>
      </a>
    </Link>
  )
}
export default BackLink
