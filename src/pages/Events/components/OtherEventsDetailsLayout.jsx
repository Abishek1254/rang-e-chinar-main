import { Link } from "react-router-dom";
import PageLayout from "../../../Components/PageLayout";
import PropTypes from "prop-types";
import TabView from "./Tabview";

export default function OtherEventsDetailsLayout({ data, index, breadcrumbs }) {
  // // Detailed console logging
  // console.log("Full data object:", data);
  // console.log("FormLink value:", data["FormLink"]);
  // console.log("FormLink type:", typeof data["FormLink"]);
  // console.log("FormLink exists:", "FormLink" in data);
  // console.log("FormLink is truthy:", !!data["FormLink"]);
  
  const descriptions = data["Description"].split(";").map(desc => desc.trim()).filter(desc => desc !== "");
  
  // Default breadcrumbs if none provided
  const defaultBreadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Other Events", path: "/events/other-events" },
    { label: data["Event Name"], path: `/events/other-events/${index}` }
  ];
  
  const pageBreadcrumbs = breadcrumbs || defaultBreadcrumbs;

  return (
    <PageLayout 
      title={data["Event Name"]} 
      imgUrl={`/OtherEvents.png`}
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
            {data["Outside Entry Fee"] === "" || data["Outside Entry Fee"] === "NO Fee"
              ? "Free"
              : `₹ ${data["Outside Entry Fee"]}`}
          </p>
        </div>
        
        {/* Rules section */}
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Rules</p>
          {data["Rules"] ? (
            <p className="text-base mb-2">{data["Rules"]}</p>
          ) : (
            <p className="text-base mb-2">Details will be announced soon.</p>
          )}
        </div>

        {/* Judging Criteria section */}
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Judging Criteria</p>
          {data["Judging Criteria"] ? (
            <p className="text-base mb-2">{data["Judging Criteria"]}</p>
          ) : (
            <p className="text-base mb-2">Details will be announced soon.</p>
          )}
        </div>

        {/* Certifications section */}
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Certifications</p>
          {data["Certifications"] ? (
            <p className="text-base mb-2">{data["Certifications"]}</p>
          ) : (
            <p className="text-base mb-2">Details will be announced soon.</p>
          )}
        </div>

        {/* Form Link section - only shown if FormLink exists in data */}
        {data["FormLink"] && (
          <div className="mb-6">
            <a 
              href={data["FormLink"]} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-lg px-6 py-3 rounded-md border-2 border-blue-200 hover:border-blue-300 bg-transparent hover:bg-blue-50/30 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Ready to join the fun? Register now and check out the rules!
            </a>
          </div>
        )}

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

OtherEventsDetailsLayout.propTypes = {  
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  breadcrumbs: PropTypes.array,
}; 