import Header from "../../Components/Header";

export default function Register() {
  return (
    <>
      {/* Header Section */}
      <div>
        <Header />
      </div>

      {/* Postponement Announcement */}
     
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-[url('/public/common/bg.jpg')] bg-cover bg-center text-white px-6 py-12 text-center"
            >  
             <h1 style={{ fontSize:"38px" , color:"rgb(236, 236, 236)" , padding: '10px', borderRadius: '10px' ,  backgroundColor: 'rgba(45, 59, 14,0.7)' , margin:"20px"}}>REGISTRATIONS WILL START SOON</h1>
       <div style={{ backgroundColor: 'rgba(4, 3, 3, 0.7)' , padding: '30px', borderRadius: '10px' }} className="w-full max-w-3xl mx-auto">
       <h1  className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 max-w-4xl leading-relaxed">
          In light of the heartbreaking incident that has taken place recently,
          we have all been left completely devastated. Our hearts are heavy and
          our prayers are with all those affected by this tragedy.
        </h1>

        <p className="text-base md:text-lg lg:text-xl mb-6 max-w-3xl text-white/90">
          In these difficult times, we believe it is only right to prioritise the
          well-being and safety of our community. Therefore, it has been decided
          that the fest shall be postponed.
        </p>

        <p className="text-base md:text-lg lg:text-xl font-medium mb-4 text-yellow-300">
          📅 <span className="text-white/90">The new dates for the fest will be announced soon.</span><br />
          {/* <span className="font-bold text-yellow-300 text-xl">May 20–22, 2025</span> */}
        </p>

        <p className="text-base md:text-lg lg:text-xl max-w-3xl text-white/90">
          We request everyone to stay connected and support each other as we prepare
          to come back stronger and united.
        </p>
       </div>
      </div>
    </>
  );
}
