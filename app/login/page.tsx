import { redirect } from "next/navigation";
import { LoginForm } from "@/components/auth/login-form";
import { getSessionUser } from "@/lib/auth";

export default async function LoginPage() {
  const user = await getSessionUser();

  if (user) {
    redirect(`/panel/${user.role}`);
  }

  return (
    <main className="centered">
      <LoginForm />
    </main>
  );
}
