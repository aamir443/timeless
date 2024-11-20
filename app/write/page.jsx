"use client";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./logoutPage.module.css";  // Optional: Add styles for the page

const page = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      // Sign out when the page is loaded
      signOut({ redirect: false }).then(() => {
        // Redirect to homepage or login after logout
        router.push("/login");
      });
    } else {
      // If user is already not authenticated, you can redirect to homepage or login
      router.push("/login");
    }
  }, [status, router]);

  return (
    <div className={styles.container}>
      <h2>Logging out...</h2>
    </div>
  );
};

export default page;
