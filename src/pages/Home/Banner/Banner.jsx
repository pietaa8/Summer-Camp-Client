const Banner = () => {
    return (
      <div>
        <div className="carousel w-full h-[600px] mt-5 mb-5">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://img.freepik.com/free-photo/football-concept-with-slate_23-2147832083.jpg?size=626&ext=jpg&ga=GA1.2.928138083.1680619194&semt=ais"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-3xl text-white font-bold">Welcome to Our Sports Website</h2>
              <h3 className="text-lg   text-white font-semibold">The Latest Updates, News, and Analysis</h3>
              <p className="text-base  text-white">Stay informed about your favorite sports with our comprehensive coverage. From live scores and match highlights to in-depth analysis and player interviews, we bring you everything you need to know about the world of sports.</p>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1590502178797-a7ed0833a02f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNwb3J0cyUyMGFjYWRlbXklMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-2xl  text-white font-bold">Welcome to Our Sports Website</h2>
              <h3 className="text-lg  text-white font-semibold">The Latest Updates, News, and Analysis</h3>
              <p className="text-base  text-white">Stay informed about your favorite sports with our comprehensive coverage. From live scores and match highlights to in-depth analysis and player interviews, we bring you everything you need to know about the world of sports.</p>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?size=626&ext=jpg&ga=GA1.1.928138083.1680619194&semt=ais"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-2xl  text-white font-bold">Welcome to Our Sports Website</h2>
              <h3 className="text-lg  text-white font-semibold">The Latest Updates, News, and Analysis</h3>
              <p className="text-base  text-white">Stay informed about your favorite sports with our comprehensive coverage. From live scores and match highlights to in-depth analysis and player interviews, we bring you everything you need to know about the world of sports.</p>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1566932769119-7a1fb6d7ce23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzJTIwYWNhZGVteSUyMHBpY3R1cmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-2xl  text-white font-bold">Welcome to Our Sports Website</h2>
              <h3 className="text-lg  text-white font-semibold">The Latest Updates, News, and Analysis</h3>
              <p className="text-base  text-white">Stay informed about your favorite sports with our comprehensive coverage. From live scores and match highlights to in-depth analysis and player interviews, we bring you everything you need to know about the world of sports.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  