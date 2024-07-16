import { useState, useEffect } from 'react';

const useAddress = (initialAddress, updateAddress) => {
    const [postcode, setPostcode] = useState('');
    const [address, setAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');

    useEffect(() => {
        if (initialAddress) {
            const [mainAddress, detail] = initialAddress.split('||');
            setAddress(mainAddress);
            setDetailAddress(detail);
        }
    }, [initialAddress]);

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
                updateAddress(`${addr}||`);
                document.getElementById("sample6_detailAddress").focus();
            }
        }).open();
    };

    return {
        postcode,
        address,
        detailAddress,
        setDetailAddress,
        setAddress,  // 추가: 사용자가 주소를 변경할 수 있도록 setter 추가
        openAddressSearch,
    };
};

export default useAddress;
