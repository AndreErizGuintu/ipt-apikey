import { SignedIn, SignedOut, SignOutButton, UserButton } from "@clerk/nextjs";
import { BookOpen, Plus } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import { Input } from "~/components/ui/input";
import Copybutton from "~/components/copy-button";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";

export default async function KeyPage() {
  // Redirect to home if user is not signed in
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  const sampleApiKey = "dasfaasfasfaasfafsfsadfasdsdbasjkdgsdgakldgdauk;";

  return (
    <SignedIn>
      <div>
        <div>
          <div className="flex items-center justify-between bg-gray-800 p-4 text-white">
            <h1 className="text-xl">Api Keys</h1>
            <div className="flex gap-2">
              <div className="flex items-center pr-2">
                <UserButton />
              </div>
              <Link href={"/docs"}>
                <Button
                  variant={"outline"}
                  className="cursor-pointer bg-white text-gray-800"
                >
                  <BookOpen />
                  View Document
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-8">
            <CardTitle>Gen Api Key</CardTitle>
            <Button className="flex items-center" aria-label="Create Api key"> 
              <Plus>Create</Plus>
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-2">
              <Input placeholder="Key-name" aria-label="api key name" />
            </div>
            <div className="rounded-md border p-3">
              <p className="text-sm font-medium">HERE API KEY (visible once)</p>
              <div className="mt-2 flex items-center gap-2">
                <code className="text-sm break-all"> {sampleApiKey}</code>
                <Copybutton value={sampleApiKey} />
              </div>
              <p className="text-muted-foreground mt-2 text-xs">
                Save this securely blablabla
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your Keys</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Key</TableHead>
                  <TableHead>Created at</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* <TableRow>
                  <TableCell>Name of Key</TableCell>
                  <TableCell className="font-mono">{sampleApiKey}</TableCell>
                  <TableCell>8/19/2014</TableCell>
                  <TableCell>
                    <Badge>Active</Badge>
                    <Badge>Revoke</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant={"destructive"} arial-label = "Revoke">Revoke</Button>
                  </TableCell>
                </TableRow> */}
                <TableRow>
                  <TableCell colSpan={5} className="text-muted-foreground text-center text-sm">
                      No api KEy found
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

       
       
      </div>
    </SignedIn>
  );
}
