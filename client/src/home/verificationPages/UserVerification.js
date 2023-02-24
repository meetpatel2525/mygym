import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserVerification = () => {
  
  const [check, setCheck] = useState(true);
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `/api/v1/user/verify/${param.token}`;
        const { data } = await axios.get(url);
        console.log(data);

        if (data.message == "Invalid Link") {
          localStorage.setItem("userstatus", JSON.stringify({userstatus:false}));
          setCheck(false);
          console.log(check, "if called");
        } else if (data.message == "Email verified successfully") {
          localStorage.setItem("userstatus", JSON.stringify({userstatus:true, email:data.data}));
          setCheck(true);
          console.log(check, "else called");
          navigate("/user-registeration")
        }
      } catch (error) {
        console.log("error else called ");
        console.log(error);
        setCheck(false);
      }
    };

    verifyEmailUrl();
  }, [param]);


  console.log(check, "true or flase verification page ");

  return (
    <>
      <div>

          {console.log(check, "my props")}

        {check == false && (
          <h1 style={{ padding: "50px" }}>404 Not Found Wrong Url</h1>
        )}
      </div>
    </>
  );
};

export default UserVerification;
