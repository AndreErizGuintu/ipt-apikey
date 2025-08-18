import { SignInButton, SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "~/components/ui/button";

export default async function HomePage() {
 const user = await currentUser();

    if (user) {
    redirect("/key");
    }

  return (
    <main>
      <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
        <div>
          <h1>Title</h1>
        </div>

        <div >

           <SignedOut>
           <SignInButton>
            <Button>Sign In</Button>
           </SignInButton>
            </SignedOut>

          <SignedIn>
            <SignOutButton>
              <Button>Sign Out</Button>
            </SignOutButton>
          </SignedIn>

          <SignedIn>
          <Button className="ml-2">
          <Link href="/key">Dashboard</Link>
          </Button> 
          </SignedIn>

          <SignedOut>
            <Button className="ml-2">
          <Link href="/key">Docs</Link>
          </Button>
          </SignedOut>
        </div>   
      </nav>
      <h1>Welcome to the T3 App</h1>
      <p>This is the home page of your T3 app.</p>                                     
    </main>
  );
}
