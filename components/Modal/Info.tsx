import React, { Children } from 'react'
import { X } from 'react-feather'

interface modalProps {
    exit: Function,
    header?: React.ReactNode,
    footer?: React.ReactNode,
    children?: React.ReactNode,
    icon?: React.ReactNode
}

const InfoModal = (props: modalProps) => {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto" onClick={()=>props.exit(false)}>
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        onClick={(e)=>e.stopPropagation()} 
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                    >
                        <div className='py-2 px-4 border-gray-100 border-b flex justify-between'>
                            <div>{props.header}</div>
                            <button onClick={() => props.exit(false)}>
                                <X />
                            </button>
                        </div>
                        <div className="bg-white px-4 pt-2 pb-4 sm:p-6 sm:pb-4">
                            {props.children}
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            {props.footer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default InfoModal

