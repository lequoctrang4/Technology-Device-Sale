import eLink from '@/model/eLink'
import Link from 'next/link'
import React from 'react'
import { ChevronRight } from 'react-feather'

const Breadcrumb = ({ links }: { links: Array<eLink> }) => {
    return (
        <h3 className="font-normal flex items-center">
            {links.map((link: eLink) => {
                if (link.path) {
                    return <>
                        <Link href={link.path} className="hover:underline">
                            {link.name}
                        </Link>
                        <ChevronRight />
                    </>
                }
                return <span>{link.name}</span>
            }
            )}
        </h3>
    )
}

export default Breadcrumb