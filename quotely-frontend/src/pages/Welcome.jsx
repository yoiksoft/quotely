import LoginCard from "./../components/LoginCard";

export default function Welcome() {
  return (
    <div className={"flex flex-col h-screen justify-center items-center"}>
      <img className="w-64 h-64 transform -rotate-3" src="/Kwot_App.png" />
      <div className="mt-8">
        <LoginCard />
      </div>
    </div>
  );
}
