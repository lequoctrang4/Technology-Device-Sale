import React from 'react'
import { StarFill } from 'react-bootstrap-icons'

const FiveStar = ({ n }: { n: number }) =>
    <div className='flex gap-1 items-center justify-center py-2'>
        {
            Array(5).fill(0).map((_, i) =>
                <StarFill key={i} color={i < n ? 'gold' : 'silver'} />
            )
        }
    </div>

export default FiveStar