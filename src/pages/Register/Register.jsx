import Header from "../../Components/Header";
export default function Register() {
  return (
    <>
      {/* New transparent black div without dimensions */}
      <div
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(5px)' }}
      >
        <Header></Header>
      </div>

      {/* Original Coming Soon Section */}
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-[url('/public/common/bg.jpg')] bg-cover bg-center text-white"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(5px)' }}
      >
        <h1 className="text-3xl md:text-6xl font-bold mb-4">Coming Soon</h1>
      </div>
    </>
  );
}