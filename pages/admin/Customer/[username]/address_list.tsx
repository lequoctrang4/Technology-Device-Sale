import Breadcrumb from '@/components/Breadcrumb';

export default function AddressList() {
    const bread = [
        { name: 'Quản lý khách hàng', path: '/admin/Customer' },
        { name: `Thông tin khách hàng phanhaiha14`, path: `/admin/Customer/phanhaiha14` },
        { name: `Danh sách địa chỉ` }
    ];

    return (
        <div className='flex flex-col gap-4 p-8 col-span-4'>
            <div>
                <Breadcrumb links={bread} />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <p>
                        Phan Hải Hà <span className="text-gray-400">| (+84)0339337907</span>
                    </p>
                    <div>
                        <p>
                            Khu A KTX ĐHQG-HCM
                        </p>
                        <p>
                            Phường Linh Trung, Thành phố Thủ Đức, TP. Hồ Chí Minh
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <p>
                        Phan Hải Hà <span className="text-gray-400">| (+84)0339337907</span>
                    </p>
                    <div>
                        <p>
                            Khu A KTX ĐHQG-HCM
                        </p>
                        <p>
                            Phường Linh Trung, Thành phố Thủ Đức, TP. Hồ Chí Minh
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <p>
                        Phan Hải Hà <span className="text-gray-400">| (+84)0339337907</span>
                    </p>
                    <div>
                        <p>
                            Khu A KTX ĐHQG-HCM
                        </p>
                        <p>
                            Phường Linh Trung, Thành phố Thủ Đức, TP. Hồ Chí Minh
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}