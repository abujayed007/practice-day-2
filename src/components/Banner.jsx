

const Banner = () => {
    return (
        <div className="hero h-[400px] " style={{ backgroundImage: 'url(https://mcdn.wallpapersafari.com/medium/42/29/zeHLy4.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Nothing is impossible</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-[#57B649] text-white font-semibold">Get Details</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;