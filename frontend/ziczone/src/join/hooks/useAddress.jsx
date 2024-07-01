import { useState } from 'react';

const useAddress = () => {
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [extraAddress, setExtraAddress] = useState('');

  const openAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        let addr = ''; // 주소 변수
        let extraAddr = ''; // 참고항목 변수

        if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
          addr = data.roadAddress;
        } else { // 사용자가 지번 주소를 선택했을 경우(J)
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
        setExtraAddress(extraAddr);
        document.getElementById("sample6_detailAddress").focus();
      }
    }).open();
  };

  return {
    postcode,
    address,
    detailAddress,
    extraAddress,
    setDetailAddress,
    openAddressSearch,
  };
};

export default useAddress;