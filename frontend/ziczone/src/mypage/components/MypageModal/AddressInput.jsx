import React, { useEffect } from 'react';
import useAddress from './../../../mypage/hooks/useAddress';

const AddressInput = ({ initialAddress, updateAddress }) => {
    const { postcode, address, detailAddress, setDetailAddress, setAddress, openAddressSearch } = useAddress(initialAddress, updateAddress);

    useEffect(() => {
        updateAddress(`${address}||${detailAddress}`);
    }, [address, detailAddress, updateAddress]);

    return (
        <div className='company_edit_addr'>
            <div className="edit_addr_left">
                <p>기업 주소</p>
            </div>
            <div className="edit_addr_right">
                <div className="edit_addr_input">
                    <input
                        type="text"
                        id="sample6_postcode"
                        placeholder="우편번호"
                        value={postcode}
                        readOnly
                    />
                    <input
                        type="button"
                        onClick={openAddressSearch}
                        value="주소검색"
                    />
                    <input
                        type="text"
                        id="sample6_address"
                        placeholder="주소"
                        value={address}
                        style={{ width: "280px" }}
                        onChange={(e) => setAddress(e.target.value)}  // 사용자가 주소를 변경할 수 있도록 설정
                    />
                    <input
                        type="text"
                        id="sample6_detailAddress"
                        placeholder="상세주소"
                        value={detailAddress}
                        style={{ width: "280px" }}
                        onChange={(e) => setDetailAddress(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddressInput;
