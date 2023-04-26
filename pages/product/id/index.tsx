import {
    BoxSeam,
    CartPlus,
    Icon7Circle,
    ShieldCheck
} from 'react-bootstrap-icons';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getProductAttributes, getProductsById } from '@/pages/api/productApi';
import CompactCart from '@/components/ItemCard/compact';
import Breadcrumb from '@/components/Breadcrumb';
import InfoModal from '@/components/Modal/Info';
import { useGContext } from '@/components/GlobalContext';
import { defaultProduct } from '@/model/eProduct';
import eFeature from '@/model/eFeature';
import { formatPrice } from '@/utils/price';
import Review from './review';
import Features from './feature';
import style from './id.module.scss';

const ProductById = () => {
    const router = useRouter();
    const [product, setProduct] = useState(defaultProduct);
    const [features, setFeatures] = useState([]);
    const [showFeatures, setShowFeatures] = useState(false);
    const { addItemToCart } = useGContext();
    const { id } = router.query;
    const bread = [
        { name: 'Điện thoại', path: '/product/mobile' },
        { name: product?.manufacturer, path: `/product?manufacturer=${product?.manufacturer}` },
        { name: product.name?.slice(0, 20) },
    ];
    let url = product?.image?.replaceAll(" ", "");
    if (!url) url = 'https://gamek.mediacdn.vn/133514250583805952/2022/4/21/photo-1-16505168269091273389824.jpg';

    useEffect(() => {
        getProductsById(id).then(data => setProduct(data[0]))
        getProductAttributes(id).then((data: eFeature[]) => {
            if (Array.isArray(data)) {
                const res = data.reduce((groups: any, item) => {
                    const group = (groups[item.group_name] || []);
                    group.push(item);
                    groups[item.group_name] = group;
                    return groups;
                }, {});
                setFeatures(res);
            }
        });
    }, [id])

    const buyNow = () => {
        addItemToCart(product);
        router.push('/cart')
    }

    return (
        <div className="main">
            <div className="py-8">
                <Breadcrumb links={bread} />
                {
                    product.id && <>
                        <h1 className='mt-4'>
                            {product?.name}
                            <span className="font-light">|</span>
                            Chính hãng VN/A
                        </h1>
                        <div className="md:grid grid-cols-3 gap-4 mt-6">
                            <div className="col-span-2">
                                <img alt='' src={url} />
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
                            <div className="col-auto grid grid-rows-6 gap-4 pt-6 md:pt-0">
                                <div className="row-span-3">
                                    <h3>{formatPrice(product.price)}</h3>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        <button className="btn-dark-outline">
                                            <p>Xanh lam</p>
                                            <p className="text-xs text-stone-400">
                                                {formatPrice(product.price)}
                                            </p>
                                        </button>
                                        <button className="btn-dark-outline">
                                            <p>Vàng đồng</p>
                                            <p className="text-xs text-stone-400">
                                                {formatPrice(product.price)}
                                            </p>
                                        </button>
                                        <button className="btn-dark-outline">
                                            <p>Đen</p>
                                            <p className="text-xs text-stone-400">
                                                {formatPrice(product.price)}
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
                                    <button
                                        className="btn-danger grow"
                                        onClick={buyNow}
                                    >
                                        MUA NGAY
                                    </button>
                                    <button
                                        className="btn-danger-outline text-center hover:brightness-90"
                                        onClick={() => addItemToCart(product)}
                                    >
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
                                        return <CompactCart key={i} />;
                                    })}
                            </div>
                        </div>
                        <div className="md:grid grid-cols-3 gap-4 my-8">
                            <div className="col-span-2">
                                <h4>Mô tả sản phẩm</h4>
                                <div className="text-justify pr-4 mt-4">
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
                            <div className="pt-4 col-auto md:pt-0">
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
                                <button className="btn-info w-full" onClick={() => setShowFeatures(true)}>
                                    Xem thêm
                                </button>
                            </div>
                        </div>
                        <Review />
                        {
                            showFeatures && <InfoModal exit={setShowFeatures} top={20}>
                                <Features data={features} />
                            </InfoModal>
                        }
                    </>
                }
            </div>
        </div>
    );
};

export default ProductById;
