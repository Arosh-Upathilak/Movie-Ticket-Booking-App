import SplashScreen from "@/screens/SplashScreen";
import { Redirect } from "expo-router";
import { useState } from "react";


export default function Index() {
  const [loading, setLoading] = useState<boolean>(false);
   const [loggedInUser, setLoggedInUser] = useState<boolean | null>(null);
  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <Redirect href={!loggedInUser ? "/(routes)/login-user" : "/(tabs)"} />
      )}
    </>
  );
}
