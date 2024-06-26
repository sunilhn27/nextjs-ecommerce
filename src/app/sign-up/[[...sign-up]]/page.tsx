import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center items-center mt-4">
      <SignIn />
    </section>
  );
}
