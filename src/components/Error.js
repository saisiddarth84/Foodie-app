import { useRouteError } from "react-router-dom"

const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex text-red-500 flex-col justify-center items-center text-3xl font-semibold h-[100vh]">
      <h1>Opps!!</h1>
      <h2>Something went wrong!!!</h2>
      <h3>{err.status}{err.statusText}</h3>
    </div>
  )
}

export default Error;