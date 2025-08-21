import { SignedIn, SignedOut, SignOutButton, UserButton } from "@clerk/nextjs";
import { BookOpen, CookingPot, CopyIcon, Flame, KeyIcon, PieChart, Plus, ShieldIcon } from "lucide-react";
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
  <div className="min-h-screen bg-[#FFF5EB]">
    {/* Header with Filipino-inspired gradient */}
    <header className="bg-gradient-to-r from-[#E74C3C] to-[#F39C12] text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <CookingPot className="text-white" size={24} />
          </div>
          <h1 className="text-2xl font-bold font-serif">LutongPinoyAPI</h1>
        </div>
        
        <div className="flex space-x-4 items-center">
          <UserButton appearance={{
            elements: {
              avatarBox: "w-9 h-9 border-2 border-white",
              userButtonPopoverCard: "bg-white"
            }
          }} />
          <Link href="/docs">
            <button className="bg-white/90 hover:bg-white text-[#E74C3C] px-5 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 shadow-md hover:shadow-lg">
              <BookOpen size={16} />
              API Docs
            </button>
          </Link>
        </div>
      </div>
    </header>

    {/* Main content container */}
    <div className="container mx-auto px-4 py-8 max-w-7xl relative">
      {/* API Key Generator Section */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10 border-2 border-[#FFE0D6] relative z-10">
        <div className="bg-[#E74C3C] px-8 py-5 flex items-center">
          <CookingPot className="text-white mr-3" size={22} />
          <h2 className="text-xl font-bold text-white font-serif">Create New API Key</h2>
        </div>
        <div className="p-7">
          <div className="flex flex-col md:flex-row md:items-end gap-5 mb-7">
            <div className="flex-1">
              <label htmlFor="key-name" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                <KeyIcon className="text-[#E74C3C] mr-2" size={16} />
                Key Name
              </label>
              <input
                id="key-name"
                type="text"
                placeholder="e.g. 'My Adobo App'"
                className="w-full px-5 py-3 border-2 border-[#FFE0D6] rounded-xl focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent text-gray-700 placeholder-gray-400"
                aria-label="API key name"
              />
            </div>
            <button className="bg-gradient-to-r from-[#E74C3C] to-[#F39C12] hover:from-[#C0392B] hover:to-[#D35400] text-white px-7 py-3 rounded-xl font-bold transition-all flex items-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105">
              <Plus size={18} />
              Generate Key
            </button>
          </div>

          {/* API Key Display with Copy Functionality */}
          <div className="bg-[#FFF5F0] rounded-xl border-2 border-dashed border-[#FFD1C2] p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#E74C3C] opacity-10 rounded-bl-full"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-bold text-[#E74C3C] flex items-center">
                  <ShieldIcon className="mr-2" size={16} />
                  YOUR SECRET API KEY
                </p>
                <Copybutton 
                  value={sampleApiKey} 
                />
              </div>
              <div className="bg-white p-4 rounded-lg border border-[#FFE0D6] mb-3 font-mono text-sm break-all text-gray-800">
                {sampleApiKey}
              </div>
              <p className="text-xs text-gray-600 flex items-start">
                <span className="text-[#E74C3C] font-bold mr-1">•</span>
                This key will only be shown once. Store it securely in a password manager.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* API Keys Management Table */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#FFE0D6] relative z-10">
        <div className="bg-[#E74C3C] px-8 py-5 flex items-center">
          <KeyIcon className="text-white mr-3" size={22} />
          <h2 className="text-xl font-bold text-white font-serif">Your API Keys</h2>
        </div>
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#FFE0D6]">
              <thead className="bg-[#F8F1E9]">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Key Name
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Preview
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Created
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#FFE0D6]">
                {/* Table row placeholder - keep this exactly as is */}
                <TableRow>
                  <TableCell colSpan={5} className="text-muted-foreground text-center text-sm py-8">
                      No API keys found
                  </TableCell>
                </TableRow>
                {/* Commented example row - preserve this structure */}
                {/*
                <TableRow>
                  <TableCell>Name of Key</TableCell>
                  <TableCell className="font-mono">sk_test_51N...QKY</TableCell>
                  <TableCell>8/19/2014</TableCell>
                  <TableCell>
                    <Badge>Active</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant={"destructive"} arial-label="Revoke">Revoke</Button>
                  </TableCell>
                </TableRow>
                */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</SignedIn>

  );
}
