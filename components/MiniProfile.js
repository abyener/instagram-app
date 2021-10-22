function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-11 ml-10">
            <img className="w-16 h-16 rounded-full border p-[2px] " src="https://i1.sndcdn.com/avatars-000191864169-xzno4r-t240x240.jpg" alt=""/>

            <div className="flex-1 mx-4">
                <h2 className="font-bold">abyener54</h2>
                <h3 className="text-sm text-gray-400xx">Welcome to Instagram</h3>
            </div>

            <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniProfile
