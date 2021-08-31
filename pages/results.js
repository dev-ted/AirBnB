import { useRouter } from "next/dist/client/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import ResultsCard from "../components/ResultsCard";

function Results({ results }) {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yyyy");
  const range = `from ${formattedStartDate} to  ${formattedEndDate}`;

  return (
    <div className="">
      <Header placeholder={`${location} | ${range} | ${guests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            400+ stays <span className="text-red-400"> {range} </span> for{" "}
            {guests} guests
          </p>
          <h1 className="text-2xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-500 whitespace-nowrap">
            <p className="button">Free Cancellation</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Instant Book</p>
            <p className="button">More Filters</p>
          </div>

          <div>
            <div className="flex flex-col">
              {results.map((result) => (
                <ResultsCard
                  img={result.img}
                  key={result.img}
                  title={result.title}
                  location={result.location}
                  description={result.description}
                  price={result.price}
                  star={result.star}
                  total={result.total}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Results;

export async function getServerSideProps() {
  const results = await import(`../Data/housing.json`);
  return {
    props: {
      results: results.default,
    },
  };
}
