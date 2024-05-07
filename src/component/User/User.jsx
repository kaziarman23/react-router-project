import { useParams } from "react-router-dom";

function User() {
    const { userId } = useParams();
    return (
        <div className="bg-grey-600 p-4 text-3xl text-white">User: {userId}</div>
    )
}

export default User;
