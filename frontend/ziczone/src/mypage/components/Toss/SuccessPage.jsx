import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "../../styles/Toss.css";
import axios from "axios";

export function SuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [responseData, setResponseData] = useState(null);
  const [role, setRole] = useState(localStorage.getItem("userRole") || "null");
  const [token, setToken] = useState(localStorage.getItem("token") || "null");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || 0);
  const [counter, setCounter] = useState(5);


  useEffect(() => {
    console.log("useEffect triggered");

    async function confirm() {
      // 토큰이나 사용자 정보가 없거나 역할이 PERSONAL이 아니면 인증 실패로 처리
      if (!token || role !== "PERSONAL" || !userId) {
        console.log("Missing required authentication details");
        navigate('/fail?code=401&message=Unauthorized');
        return;
      }

      console.log("confirm function called");
      const orderId = searchParams.get("orderId");
      const amount = searchParams.get("amount");
      const paymentKey = searchParams.get("paymentKey");

      console.log("orderId:", orderId);
      console.log("amount:", amount);
      console.log("paymentKey:", paymentKey);

      const requestData = {
        orderId: orderId,
        amount: amount,
        paymentKey: paymentKey,
        userId: userId
      };

      console.log("requestData:", requestData);

      try {
        // 서버에 결제 확인 요청 전송
        const response = await axios.post("api/payments/confirm", requestData, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
          }
        });

        console.log("response status:", response.status);
        console.log("response data:", response.data);

        if (response.status !== 200) {
          throw new Error(response.data.message || "Payment confirmation failed");
        }

        setResponseData(response.data);
      } catch (error) {
        console.error("Payment confirmation failed", error);
        navigate(`/fail?code=${error.response?.status || 500}&message=${error.message}`);
      }
    }

    confirm();

    const timer = setInterval(() => {
      setCounter((prevCounter) => {
        if(prevCounter === 1) {
          clearInterval(timer);
          window.close();
          return 0;
        }
        return prevCounter -1;
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [searchParams, navigate, token, role, userId]);

  return (
    <>
      <div className="box_section" style={{ width: "600px" }}>
        <img width="100px" src="https://static.toss.im/illusts/check-blue-spot-ending-frame.png" alt="Success" />
        <h2>결제를 완료했어요</h2>

        <div className="close_timer">
        <p><b>{counter}</b>초 뒤에 창이 자동으로 닫힙니다.</p>
      </div>
      
        {/* <div className="p-grid typography--p" style={{ marginTop: "50px" }}>
          <div className="p-grid-col text--left">
            <b>결제금액</b>
          </div>
          <div className="p-grid-col text--right" id="amount">
            {responseData ? `${Number(responseData.amount).toLocaleString()}원` : 'Loading...'}
          </div>
        </div>
        <div className="p-grid typography--p" style={{ marginTop: "10px" }}>
          <div className="p-grid-col text--left">
            <b>포인트</b>
          </div>
          <div className="p-grid-col text--right" id="berryPoint">
            {responseData ? `${Number(responseData.berryPoint).toLocaleString()}포인트` : 'Loading...'}
          </div>
        </div>
        <div className="p-grid-col">
          <Link to="https://docs.tosspayments.com/guides/v2/payment-widget/integration">
            <button className="button p-grid-col5">연동 문서</button>
          </Link>
          <Link to="https://discord.gg/A4fRFXQhRu">
            <button className="button p-grid-col5" style={{ backgroundColor: "#e8f3ff", color: "#1b64da" }}>
              실시간 문의
            </button>
          </Link>
        </div>
      </div>
      <div className="box_section" style={{ width: "600px", textAlign: "left" }}>
        <b>Response Data :</b>
        <div id="response" style={{ whiteSpace: "initial" }}>
          {responseData && <pre>{JSON.stringify(responseData, null, 4)}</pre>}
        </div> */}
      </div>
    </>
  );
}