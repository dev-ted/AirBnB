import { React, useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
  UserIcon,
} from "@heroicons/react/solid";
import logo from "../images/logo.webp";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({placeholder}) {
  const [search, setSearch] = useState("");
  const [startDate, setStart] = useState(new Date());
  const [endDate, setEnd] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const router =  useRouter();

  const handleChange = (ranges) => {
    setStart(ranges.selection.startDate);
    setEnd(ranges.selection.endDate);
  };
  const searchHandler = () => {
      router.push({
          pathname: '/results',
          query: {
              location: search,
              startDate: startDate.toISOString(),
              endDate: endDate.toISOString(),
              guests

          },
          

      });
      setSearch("");
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 ">
      <div onClick = {() =>router.push('/')} className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="search"
          className="pl-5 bg-transparent  outline-none flex-grow text-sm text-gray-600
           placeholder-gray-400"
          placeholder={placeholder || "search places"}
        />
        <SearchIcon
          className=" hidden md:inline-flex h-8 bg-red-400
         text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500 cursor-pointer ">
        <GlobeAltIcon className="h-7 cursor-pointer hover:shadow-md hover:bg-white rounded-full  active:scale-90 transition duration-150" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full hover:shadow-md  active:scale-90 transition duration-150">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {search && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleChange}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <UserIcon className="h-5" />
            <input
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
           
          </div>
          <div className="flex">
              <button onClick = {() => setSearch("")} className = "flex-grow text-gray-400">Cancel </button>
              <button onClick = {searchHandler} className = "flex-grow text-red-500">Search</button>
            </div>
        </div>
      )}
    </header>
  );
}

export default Header;
