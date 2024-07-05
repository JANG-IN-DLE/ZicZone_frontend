import { useState, useEffect, useCallback } from 'react';

const useAddress = (initialAddress, updateAddress) => {
  const [postcode, setPostcode] = useState('');//우편번호
  const [address, setAddress] = useState('');//주요주소
  const [detailAddress, setDetailAddress] = useState('');//상세주소

  // 초기주소값이 변경될 때 주소설정
  useEffect(() => {
    if (initialAddress) {
      const [mainAddress, detail] = initialAddress.split('||');
      setAddress(mainAddress);
      setDetailAddress(detail);
    }
  }, [initialAddress]);

  // 전체 주소 업데이트
  const updateFullAddress = useCallback(() => {
    const fullAddress = `${address}||${detailAddress}`.trim();
    if (fullAddress !== initialAddress) { 
      updateAddress(fullAddress);//초기주소 값과 다르면 form의 address값 업데이트
    }
  }, [address, detailAddress, initialAddress, updateAddress]);

  //주소가 변경될때마다 호출
  useEffect(() => {
    updateFullAddress();
  }, [updateFullAddress]);

  //주소검색
  const openAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        let addr = '';
        let extraAddr = '';

        if (data.userSelectedType === 'R') {
          addr = data.roadAddress;
        } else {
          addr = data.jibunAddress;
        }

        if (data.userSelectedType === 'R') {
          if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          if (data.buildingName !== '' && data.apartment === 'Y') {
            extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
          }
          if (extraAddr !== '') {
            extraAddr = ' (' + extraAddr + ')';
          }
        }

        setPostcode(data.zonecode);
        setAddress(addr);
        setDetailAddress('');
        document.getElementById("sample6_detailAddress").focus();
      }
    }).open();
  };

  return {
    postcode,
    address,
    detailAddress,
    setDetailAddress,
    openAddressSearch,
  };
};

export default useAddress;