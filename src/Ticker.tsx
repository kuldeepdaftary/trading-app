function Ticker() {
  return (
    <div className="w-1/2 bg-gray-50">
      {/* Following can be moved to a new component */}
      <div className="relative flex flex-row justify-between overflow-hidden  p-2 items-baseline">
        <div className="flex flex-col">
          <span className="font-bold text-lg">Apple</span>
          <ul className="font-thin flex text-sm">
            <li className="after:content-['\2022']">APPL</li>
            <li className="px-1">STOCK</li>
            <li className="before:content-['\2022']">US</li>
          </ul>
        </div>
        <div className="flex flex-col right-0 text-xl">$420.69</div>
      </div>
      <div className="relative">
        <h1 className="font-bold p-2 text-xl text-left">Company Details</h1>
        <p className="font-light p-2">
          Company details Apple Inc. (Apple) designs, manufactures and markets
          smartphones, personal computers, tablets, wearables and accessories
          and sells a range of related services. The Company’s products include
          iPhone, Mac, iPad, AirPods, Apple TV, Apple Watch, Beats products,
          HomePod, iPod touch and accessories. The Company operates various
          platforms, including the App Store, which allows customers to discover
          and download applications and digital content, such as books, music,
          video, games and podcasts. Apple offers digital content through
          subscription-based services, including Apple Arcade, Apple Music,
          Apple News+, Apple TV+ and Apple Fitness+. Apple also offers a range
          of other services, such as AppleCare, iCloud, Apple Card and Apple
          Pay. Apple sells its products and resells third-party products in a
          range of markets, including directly to consumers, small and mid-sized
          businesses, and education, enterprise and government customers through
          its retail and online stores and its direct sales force.
        </p>
      </div>
    </div>
  );
}

export default Ticker;
