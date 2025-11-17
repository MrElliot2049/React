import React, { useEffect, useState } from "react";

function Github()
{
    const [data,setdata] = useState({})
    useEffect(() => {
        fetch('https://api.github.com/users/MrElliot2049')
        .then(res => res.json())
        .then(data => setdata(data))
    },[])
    return (
        <div className="text-center m-4 bg-gray-600 p-4 text-white">Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git pic" width={300}/>
        </div>
    )
}

export default Github