import { Link } from "react-router-dom";
import PageLayout from "../../../Components/PageLayout";
import PropTypes from "prop-types";
import TabView from "./Tabview";

export default function DancingEventsDetailsLayout({ data, index, breadcrumbs }) {
  const descriptions = data["Description"].split(";").map(desc => desc.trim()).filter(desc => desc !== "");
  
  // Default breadcrumbs if none provided
  const defaultBreadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Dancing Events", path: "/events/dancing-events" },
    { label: data["Event Name"], path: `/events/dancing-events/${index}` }
  ];
  
  const pageBreadcrumbs = breadcrumbs || defaultBreadcrumbs;

  return (
    <PageLayout 
      title={data["Event Name"]} 
      imgUrl={`/common/Dancingevents.png`}
      breadcrumbs={pageBreadcrumbs}
    >
      <div className="px-4 md:px-12 py-4 md:py-12 font-playfair bg-background ShadowLarge">
        <div className="mb-4">
          <p className="font-semibold font-figtree textShadow-md text-4xl md:text-5xl text-gray-800 mb-3 overflow-visible">
            {data["Event Name"]}
          </p>
          {
            descriptions.map((desc, index) => (
              <p key={index} className="text-base mb-2">{desc}</p>
            ))
          }
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Timing</p>
          <p className="text-base mb-2">
            {data["Start Time"]} - {data["End Time"]} , Day {data["Day"]}
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Venue</p>
          <p className="text-base mb-2">
            {data["Venue"]}
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Entry Fee</p>
          <p className="text-base mb-2">
            <span className="font-bold mr-2">Entry Fee:</span>
            {data["Outside Entry Fee"] === ""
              ? "Free"
              : `₹ ${data["Outside Entry Fee"]}`}
          </p>
        </div>
        
        {/* Rules and Judging Criteria in Tab View */}
        <TabView data={data} />

        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Certifications</p>
          <p className="text-base mb-2">
            {data["Certifications"]}
          </p>
        </div>

        <div className="flex gap-4">
          {/* <button className="px-6 md:px-8 py-2 ShadowBlur text-sm md:text-base rounded-md font-semibold text-gray-800 bg-primary border border-primary focus:outline-none text-center mb-4">
            <Link
              to={"https://rangechinar-registration-from.vercel.app/"}
            >
              Register
            </Link>
          </button> */}
          <button className="px-6 md:px-8 py-2 ShadowBlur text-sm md:text-base rounded-md font-semibold text-gray-800 bg-primary border border-primary focus:outline-none text-center mb-4">
            <Link
              to={"https://docs.google.com/document/d/153QMgBIilcQvmxG78jfg8YkGTFA_-NG0/edit?usp=sharing&ouid=110432715013503289843&rtpof=true&sd=true"}
            >
              Rule Book
            </Link>
          </button>
        </div>
        
        <div className="mb-4">
          <p className="text-base mb-2">For Any Queries Contact</p>
          <ul className="list-disc list-inside pl-5 font-semibold">
              <li>
                {data["Lead Name"]} ({data["Lead Contact Number"]})
              </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}

DancingEventsDetailsLayout.propTypes = {  
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  breadcrumbs: PropTypes.array,
};