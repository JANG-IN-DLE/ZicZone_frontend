import React from 'react';
import '../../styles/JoinCom/AddressInput.css';
import useAddress from '../../hooks/useAddress';

const AddressInput = () => {
  const {
    postcode,
    address,
    detailAddress,
    setDetailAddress,
    openAddressSearch
  } = useAddress();

  return (
    <div className='addresscontainer'>
        <div className="address-label">기업 주소</div>
        <div className="address-input">
          <div className="address-input-row">
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
          </div>
          <input
            type="text"
            id="sample6_address"
            placeholder="주소"
            value={address}
            readOnly
          />
          <input
            type="text"
            id="sample6_detailAddress"
            placeholder="상세주소"
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
          />
        </div>
    </div>
  );
};

export default AddressInput;