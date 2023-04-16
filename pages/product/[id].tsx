import {
    BoxSeam,
    CartPlus,
    Icon7Circle,
    ShieldCheck,
} from 'react-bootstrap-icons';
import style from './id.module.scss';
import Outstanding from '../home/outstanding';
import DefaultCart from '@/components/ItemCard/default';

const DetailProduct = () => {
    return (
        <div className="main">
            <div className="py-8">
                <h1>iPhone 13 128GB | Chính hãng VN/A</h1>
                <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="col-span-2">
                        <div className="w-full h-[300px] bg-slate-300 rounded-md mb-8"></div>
                        <div className="grid grid-cols-2 gap-2 text-center">
                            <p
                                className={
                                    style['info-item'] + ' btn-info-outline'
                                }
                            >
                                <Icon7Circle size={24} />
                                <span>1 đổi 1 trong vòng 7 ngày</span>
                            </p>
                            <p
                                className={
                                    style['info-item'] + ' btn-info-outline'
                                }
                            >
                                <ShieldCheck size={24} />
                                Bảo hành 12 tháng tại đại lý chính hãng
                            </p>
                            <p
                                className={
                                    style['info-item'] + ' btn-info-outline'
                                }
                            >
                                <BoxSeam size={24} />
                                Phụ kiện đi kèm: abc
                            </p>
                        </div>
                    </div>
                    <div className="col-auto grid grid-rows-6 gap-4">
                        <div className="row-span-3">
                            <h3>24.000.000 vnd</h3>
                            <div className="flex flex-wrap gap-3 mt-4">
                                <button className="btn-dark-outline">
                                    <p>Xanh lam</p>
                                    <p className="text-xs text-stone-400">
                                        24.000.000
                                    </p>
                                </button>
                                <button className="btn-dark-outline">
                                    <p>Vàng đồng</p>
                                    <p className="text-xs text-stone-400">
                                        22.990.000
                                    </p>
                                </button>
                                <button className="btn-dark-outline">
                                    <p>Đen</p>
                                    <p className="text-xs text-stone-400">
                                        22.990.000
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div className="row-span-2">
                            <p>Nhập mã GIAIPHONGMIENNAM - Giảm 304k khi mua.</p>
                            <p>Thu cũ đổi mới</p>
                            <p>Hot sale 30.04</p>
                        </div>
                        <div className="row-span-1 flex gap-2">
                            <button className="btn-danger grow">
                                MUA NGAY
                            </button>
                            <button className="btn-danger-outline text-center hover:brightness-90">
                                <CartPlus className="mx-auto" size={24} />
                                <span style={{ fontSize: '0.5rem' }}>
                                    Thêm vào giỏ
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="my-8">
                    <h3 className="mb-4">Sản phẩm liên quan</h3>
                    <div className="grid grid-cols-6 gap-2 md:gap-4 lg:gap-8">
                        {Array(3)
                            .fill(0)
                            .map((_, i) => {
                                return <DefaultCart key={i} />;
                            })}
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 my-8">
                    <div className="col-span-2">
                        <h4>Mô tả sản phẩm</h4>
                        <div className='text-justify pr-4 mt-4'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Assumenda impedit saepe ut
                                ducimus. Porro quod corrupti adipisci incidunt
                                facere asperiores veniam distinctio alias
                                laborum delectus, exercitationem iste ratione,
                                magnam iusto?
                            </p>
                            <p>
                                Magna veniam deserunt elit aute dolor
                                consectetur magna laboris labore. Sit ullamco
                                dolore eiusmod quis sit velit. Ullamco
                                consectetur qui tempor minim. Dolore dolore duis
                                incididunt nostrud mollit non. Elit aliqua
                                adipisicing excepteur Lorem consectetur est.
                            </p>
                            <p>
                                Exercitation dolore pariatur sunt commodo quis
                                magna proident commodo eu eu. Ex cupidatat non
                                nisi ullamco dolor. Consequat nostrud anim ut
                                sunt amet non ipsum dolore ea reprehenderit
                                enim. Sit consectetur tempor non duis nisi qui
                                occaecat enim voluptate nostrud officia aute. Ut
                                mollit elit consectetur excepteur non. Ipsum
                                nulla qui commodo incididunt incididunt esse
                                dolore esse minim do id. Nulla enim sit esse do
                                aliquip incididunt excepteur tempor nisi est.
                            </p>
                        </div>
                    </div>
                    <div className="col-auto">
                        <h4 className="text-center">Cấu hình chi tiết</h4>
                        <table className={style['config-table']}>
                            <tbody>
                                <tr>
                                    <td className={style['config-td']}>
                                        Kích thước màn hình
                                    </td>
                                    <td className={style['config-td']}>
                                        6.1 inches
                                    </td>
                                </tr>
                                <tr>
                                    <td className={style['config-td']}>
                                        Bộ nhớ trong
                                    </td>
                                    <td className={style['config-td']}>
                                        512GB
                                    </td>
                                </tr>
                                <tr>
                                    <td className={style['config-td']}>RAM</td>
                                    <td className={style['config-td']}>4GB</td>
                                </tr>
                                <tr>
                                    <td className={style['config-td']}>
                                        Công nghệ màn hình
                                    </td>
                                    <td className={style['config-td']}>OLED</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn-info w-full">Xem thêm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
