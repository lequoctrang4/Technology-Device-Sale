import eLink from '@/model/eLink'
import Link from 'next/link'
import React from 'react'
import { ChevronRight } from 'react-bootstrap-icons'

const Breadcrumb = ({ links }: { links: Array<eLink> }) => {
    return (
        <h5 className="font-normal flex items-center">
            {
                links.map((link: eLink, i: number) => {
                    return link.path ?
                        <p key={i}>
                            <Link href={link.path} className="hover:underline">
                                {link.name}
                            </Link>
                            <ChevronRight className='inline-block' />
                        </p> : <p key={i}>{link.name}</p>
                })
            }
        </h5>
    )
}

export default Breadcrumb