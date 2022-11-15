/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";

const ScrollComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  console.log(data);

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?page=${page}&results=2&seed=abc`)
      .then((res) => {
        setTimeout(() => {
          setData((prev) => [...prev, ...res.data.results]);
          setLoading(false);
        }, 2000);
      });
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setTimeout(() => {
        setLoading(true);
      }, 1000);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto px-8 md:px-0">
      {data.map((info, index) => (
        <div key={info.login.uuid} className="flex justify-center">
          {loading ? (
            <div class="bg-white    mx-auto rounded-2xl shadow-lg mt-4 w-[320px] h-[480]">
              <div class="bg-gray-200 h-48 p-3 overflow-hidden animate-pulse"></div>
              <div class="h- p-3">
                <div class="grid grid-cols-3 gap-4 mt-2">
                  <div class="h-8 bg-gray-200 rounded animate-pulse"></div>
                  <div class="h-8 bg-gray-200 rounded animate-pulse"></div>
                  <div class="h-8 bg-gray-200 rounded animate-pulse"></div>
                  <div class="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
                  <div class=" h-8 bg-gray-200 rounded animate-pulse"></div>
                  <div class="..."></div>
                  <div class="col-span-2 ..."></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center mt-4 w-[320px] h-[480]">
              <div className="rounded-lg shadow-xl hover:bg-slate-300 transition-all duration-150 bg-white max-w-sm">
                <div className="flex justify-center  bg-slate-600">
                  <img
                    className="rounded-xl py-2 "
                    src={info.picture.large}
                    alt=""
                  />
                </div>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Name: {info.name.title} {info.name.first} {info.name.last}
                  </h5>
                  <h5 className="text-gray-900  font-medium mb-2">
                    E-mail: {info.email}
                  </h5>
                  <h5 className="text-gray-900  font-medium mb-2">
                    Phone: {info.phone}
                  </h5>
                  <h5 className="text-gray-900  font-medium mb-2">
                    Address: {info.location.state}, {info.location.city},
                    {info.location.country}
                  </h5>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-center">
        {/* {loading && <h3 className="text-3xl  ">loading</h3>} */}
      </div>
    </div>
  );
};

export default ScrollComponent;

{
  /* <div>
          <h3>
            <img src={info.picture.large} alt="" />
           
          </h3>
          <h3>{info.gender}</h3>
        </div> */
}

/* 
 <div class="bg-white rounded w-96 mx-auto rounded-2xl shadow-lg">
    <div class="bg-gray-200 h-48 p-3 overflow-hidden animate-pulse">
    </div>
    <div class="h- p-3">
        <div class="grid grid-cols-3 gap-4 mt-2">
            <div class="h-8 bg-gray-200 rounded animate-pulse">
            </div>
            <div class="h-8 bg-gray-200 rounded animate-pulse">
            </div>
            <div class="h-8 bg-gray-200 rounded animate-pulse">
            </div>
            <div class="h-8 col-span-2 bg-gray-200 rounded animate-pulse">
            </div>
            <div class=" h-8 bg-gray-200 rounded animate-pulse">
            </div>
            <div class="...">
            </div>
            <div class="col-span-2 ...">
            </div>
        </div>
    </div>
</div>

 */
