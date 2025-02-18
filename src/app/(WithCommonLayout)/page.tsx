import { getCurrentUser } from "@/services/AuthService/intex";

const HomePage = async () => {
  const user = await getCurrentUser()
  console.log(user)
  return (
    <div>
      <h1>Welcome to NextMark Home Page</h1>
    </div>
  );
};

export default HomePage;
