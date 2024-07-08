import React from 'react';
import '../../styles/JoinCom/AddressInput.css';
import useAddress from '../../hooks/useAddress';
import { useFormContext } from '../FormContext';

const AddressInput = () => {
  const { formData, updateFormData } = useFormContext();
  const {
    postcode,
    address,
    detailAddress,
    setDetailAddress,
    openAddressSearch
  } = useAddress(formData.address, (newAddress) => updateFormData('companyAddr', newAddress));
  //useAddress에 주소값을 전달하고, 새로운 주소값을 form에 업데이트하는 함수를 전달

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
            onChange={(e) => setDetailAddress(e.target.value)} //상세주소 입력시마다 렌더링
          />
        </div>
    </div>
  );
};

export default AddressInput;