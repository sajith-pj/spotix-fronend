const LoginErrorAlert = ({ setErrMsg }) => {
  return (
    <div className="flex justify-between items-center bg-red-100 p-3 rounded mt-4 mb-4">
      <p className="text-xs font-semibold text-red-600">
        Please Check Your Email And Password
      </p>
      <button
        onClick={() => {
          setErrMsg(false);
        }}
      >
        <i className=" fas fa-times cursor-pointer "> </i>
      </button>
    </div>
  );
};

export default LoginErrorAlert;
