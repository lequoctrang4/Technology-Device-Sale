import Apple from '@/asset/image/brands/Apple.webp';
import HP from '@/asset/image/brands/HP.webp';
import Lenovo from '@/asset/image/brands/Lenovo.webp';
import Samsung from '@/asset/image/brands/Samsung.webp';
import Image from 'next/image';

function Brands() {
    const images = [Apple, HP, Lenovo];
    return (
        <div className='my-8'>
            <h2>Thương hiệu nổi bật</h2>
            <div className='flex gap-2'>
                {
                    images.map((img: any, index: number) =>
                        <div className='rounded-xl overflow-hidden' key={index}>
                            <Image src={img} alt='' />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Brands