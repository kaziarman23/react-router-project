import { useEffect, useState } from "react";

function Github() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/kaziarman23`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    });

    if (data === null) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="bg-gray-600 p-4 text-white text-center">
                <h1>{data.name}</h1>
                <h2>Github Followers: {data.followers}</h2>
            </div>
            <div className="flex justify-evenly items-center bg-gray-700 p-5">
                <div className="w-40">
                    <img
                        className="rounded-xl flex "
                        alt="github_profile"
                        src={data.avatar_url}
                    />
                </div>
                <div className="w-40">
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum, numquam doloribus? Ducimus vero nobis libero est
                        nemo sapiente!
                    </h2>
                </div>
            </div>
        </>
    );
}

export default Github;
