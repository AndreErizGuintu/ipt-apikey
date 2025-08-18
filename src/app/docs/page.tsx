import { UserButton } from "@clerk/nextjs";
import { BookOpen, Key } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function DocsPage() {
    return(

        <div className="flex items-center justify-between bg-gray-800 p-4 text-white">
            <h1 className="text-xl">Api Guide</h1>
            <div className="flex gap-2">
              <div className="flex items-center pr-2">
                <UserButton />
              </div>
              <Link href={"/key"}>
                <Button
                  variant={"outline"}
                  className="cursor-pointer bg-white text-gray-800"
                >
                  <Key />
                  ApiKey
                </Button>
              </Link>
            </div>
          </div>
    );
}