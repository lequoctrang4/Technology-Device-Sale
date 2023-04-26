import Apple from '@/asset/image/brands/Apple.webp';
import HP from '@/asset/image/brands/HP.webp';
import Lenovo from '@/asset/image/brands/Lenovo.webp';
import Samsung from '@/asset/image/brands/Samsung.webp';
import Image from 'next/image';
import Link from 'next/link';

function Brands() {
    const images = [
        { name: 'Apple', path: Apple },
        { name: 'HP', path: HP },
        { name: 'Samsung', path: Samsung }
    ];
    return (
        <div className='my-8'>
            <h2>Thương hiệu nổi bật</h2>
            <div className='flex gap-2 mt-3'>
                {
                    images.map((img, index: number) =>
                        <div className='rounded-xl overflow-hidden' key={index}>
                            <Link href={'/product?manufacturer=' + img.name}>
                                <Image src={img.path} alt='' />
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Brands