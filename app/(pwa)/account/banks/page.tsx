import PWAPageTitle from "../../page-title";

export default function Banks() {
  return (
    <div className="pb-20">
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        {/* <h1 className="text-2xl lg:text-3xl">Banks</h1> */}
        <PWAPageTitle title="Your Banks" />
      </header>

      <div className="py-10">List of bank informations</div>
    </div>
  );
}
