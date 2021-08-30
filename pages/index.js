import Head from "next/head";
import CardLarge from "../components/CardLarge";
import CardMedium from "../components/CardMedium";
import CardSmall from "../components/CardSmall";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home({ exploreData , placesData,discoverData }) {
 
  return (
    <div className="">
      <Head>
        <title>Air BnB Clone</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <CardSmall
                key={item?.img}
                img={item?.img}
                location={item?.location}
                distance={item?.distance}
              />
            ))}
          </div>
        </section>

        <section >
          <h2 className = "text-4xl font-semibold py-8">Live anywhere</h2>
          <div className= "flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {placesData?.map((item) => (
              <CardMedium
                key={item?.img}
                img={item?.img}
                title={item?.title}
               
              />
            ))}
          </div>
        
        </section>

        <CardLarge
        img = "https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440"
        title = "Try Hosting"
        descrition = "Earn Extra income and unlock new opportunities by sharing your space"
        button = "Learn More"
        
        />
        <section className = "mb-4">
          <h2 className = "text-4xl font-semibold py-8">Discover Things to do</h2>
          <div className= "flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {discoverData?.map((item) => (
              <CardMedium
              show
                key={item?.img}
                img={item?.img}
                title={item?.title}
                descrition  = {item?.description}
               
              />
            ))}
          </div>
        
        </section>

       
        
      </main>
      <Footer />
    </div>
  );
}

// server side rendering
export async function getStaticProps() {
  const exploreData = await import(`../Data/explore.json`);
  const placesData = await import(`../Data/places.json`);
  const discoverData = await import(`../Data/discover.json`);
 
  return {
    props: {
      exploreData: exploreData.default,
      placesData: placesData.default,
      discoverData: discoverData.default,

    },
  };
}
