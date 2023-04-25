import React from 'react'
import { StarFill } from 'react-bootstrap-icons'
import FiveStar from '@/components/Utilities/FiveStar'
import style from './id.module.scss'

const Review = () => {
    return (
        <div className="md:grid grid-cols-3 my-8">
            <div className="col-span-2">
                <h4>Nhận xét và đánh giá</h4>
                <div className="flex">
                    <div className="w-1/3 text-center my-auto">
                        <b>5.0/5</b>
                        <FiveStar n={5} />
                        <p>20 đánh giá và nhận xét</p>
                    </div>
                    <table className={style['review-table']}>
                        <tbody>
                            <tr>
                                <td>5</td>
                                <td>
                                    <StarFill color="gold" />
                                </td>
                                <td>
                                    <p className="bg-red-400 w-full h-[12px]"></p>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <StarFill color="gold" />
                                </td>
                                <td>
                                    <p className="bg-gray-300 w-full h-[12px]"></p>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <StarFill color="gold" />
                                </td>
                                <td>
                                    <p className="bg-gray-300 w-full h-[12px]"></p>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <StarFill color="gold" />
                                </td>
                                <td>
                                    <p className="bg-gray-300 w-full h-[12px]"></p>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <StarFill color="gold" />
                                </td>
                                <td>
                                    <p className="bg-gray-300 w-full h-[12px]"></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="my-2">
                    <h5>Viết nhận xét về sản phẩm</h5>
                    <form className="flex justify-between gap-1">
                        <input
                            className="searchbar grow"
                            type="text"
                            placeholder="Để lại bình luận của bạn..."
                        />
                        <button className="btn-danger">Gửi</button>
                    </form>
                    <div>
                        {Array(3)
                            .fill(9)
                            .map((_, i) => (
                                <div className={style['comment']} key={i}>
                                    <div className="flex justify-between items-center">
                                        <div className="flex justify-between items-center gap-4">
                                            <img
                                                alt="avatar"
                                                src="https://qph.cf2.quoracdn.net/main-qimg-2cd09921c5cc731d5bfd3444909a7bf3-lq"
                                                width={48}
                                            />
                                            <span className="font-semibold">
                                                Uzumaki Naruto
                                            </span>
                                            <FiveStar n={5} />
                                        </div>
                                        <span className="text-sm">
                                            03/12/2022 09:12AM
                                        </span>
                                    </div>
                                    <p className="p-2">
                                        Et voluptate proident sint id
                                        mollit aliquip amet nulla irure
                                        aliquip. Occaecat labore nulla
                                        magna enim veniam commodo velit
                                        ea veniam est cillum enim ex.
                                        Consequat eiusmod sit culpa esse
                                        sunt in ea. Elit eu sint
                                        consectetur aliqua pariatur
                                        velit Lorem esse.
                                    </p>
                                </div>
                            ))}
                    </div>
                    <div className="flex justify-center pt-4">
                        <button className="btn-info">Xem thêm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review