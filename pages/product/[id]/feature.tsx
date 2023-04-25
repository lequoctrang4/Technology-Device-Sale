import eFeature from '@/model/eFeature';
import React, { useState } from 'react'

const Features = ({ data }: { data: any }) => {
    return (
        <div className='h-[75vh] overflow-hidden overflow-y-scroll'>
            <h3 className='text-center'>Tính năng</h3>
            {
                Object.keys(data).map((keyword, i) => {
                    return <div key={i} className='pb-6 pt-2 border-t border-gray-200'>
                        <h5 className='font-semibold'>{keyword}</h5>
                        <table className='w-full table-fixed'>
                            <tbody>
                                {
                                    data[keyword].map((d: eFeature, j: number) =>
                                        <tr key={j}>
                                            <td className='py-2'>{d.name}</td>
                                            <td className='py-2 pl-2'>{d.value}</td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                })
            }
        </div>
    )
}

export default Features