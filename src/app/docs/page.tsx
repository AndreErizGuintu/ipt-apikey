import { UserButton } from "@clerk/nextjs";
import { AlertTriangle, BookOpen, Code, CookingPot, Key, KeyIcon, ListOrdered } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function DocsPage() {
    return (
      <div className="flex h-screen bg-[#FFF5EB]">
  {/* Sidebar Navigation */}
  <div className="w-64 bg-gradient-to-b from-[#E74C3C] to-[#F39C12] text-white p-4 flex flex-col">
    <div className="mb-8">
      <h1 className="text-xl font-bold flex items-center gap-2">
        <BookOpen size={20} />
        LutongPinoyAPI Docs
      </h1>
      <p className="text-white/80 text-sm mt-1">Authentic Filipino Recipes</p>
    </div>
    
    <nav className="flex-1">
      <ul className="space-y-1">
        <li>
          <a href="#introduction" className="block w-full text-left px-4 py-2 rounded-md bg-white/20 font-medium">
            <BookOpen size={16} className="inline mr-2" />
            Introduction
          </a>
        </li>
        <li>
          <a href="#authentication" className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/10 transition-colors">
            <KeyIcon size={16} className="inline mr-2" />
            Authentication
          </a>
        </li>
        <li>
          <a href="#endpoints" className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/10 transition-colors">
            <ListOrdered size={16} className="inline mr-2" />
            API Endpoints
          </a>
        </li>
        <li>
          <a href="#examples" className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/10 transition-colors">
            <Code size={16} className="inline mr-2" />
            Code Examples
          </a>
        </li>
        <li>
          <a href="#errors" className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/10 transition-colors">
            <AlertTriangle size={16} className="inline mr-2" />
            Error Handling
          </a>
        </li>
      </ul>
    </nav>
    
    <div className="pt-4 border-t border-white/20">
      <Link href="/key">
        <Button className="w-full bg-white text-[#E74C3C] hover:bg-gray-100 font-bold">
          <Key size={16} className="mr-2" />
          Manage API Keys
        </Button>
      </Link>
    </div>
  </div>

  {/* Main Content Area */}
  <div className="flex-1 flex flex-col">
    {/* Header - Matches your homepage styling */}
    <div className="bg-gradient-to-r from-[#E74C3C] to-[#F39C12] text-white shadow-lg p-4 flex justify-between items-center">
      <h2 className="text-lg font-bold font-serif">API Documentation Guide</h2>
      <div className="flex gap-2">
        <div className="flex items-center pr-2">
          <UserButton appearance={{
            elements: {
              avatarBox: "w-9 h-9 border-2 border-white",
              userButtonPopoverCard: "bg-white"
            }
          }} />
        </div>
        <Link href="/key">
          <Button
            variant={"outline"}
            className="cursor-pointer bg-white/90 hover:bg-white text-[#E74C3C] px-4 font-bold"
          >
            <Key size={16} className="mr-2" />
            API Key
          </Button>
        </Link>
      </div>
    </div>

    {/* Content Container */}
    <div className="flex-1 overflow-auto p-6 bg-[#FFF5EB]">
      {/* Introduction Section */}
      <section id="introduction" className="max-w-4xl mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#FFE0D6]">
        <div className="bg-[#E74C3C] px-6 py-4 flex items-center">
          <BookOpen className="text-white mr-3" size={22} />
          <h2 className="text-xl font-bold text-white font-serif">Introduction to LutongPinoyAPI</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-6">
            A comprehensive REST API for accessing authentic Filipino recipes, ingredients, 
            and cooking techniques. Our API provides structured data to power your culinary applications.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#FFF5F0] p-4 rounded-lg border border-[#FFE0D6]">
              <h3 className="font-semibold mb-2 text-[#E74C3C]">📚 500+ Recipes</h3>
              <p className="text-sm text-gray-600">Traditional and modern Filipino dishes</p>
            </div>
            <div className="bg-[#FFF5F0] p-4 rounded-lg border border-[#FFE0D6]">
              <h3 className="font-semibold mb-2 text-[#E74C3C]">⚡ RESTful API</h3>
              <p className="text-sm text-gray-600">Standard HTTP methods and responses</p>
            </div>
            <div className="bg-[#FFF5F0] p-4 rounded-lg border border-[#FFE0D6]">
              <h3 className="font-semibold mb-2 text-[#E74C3C]">🔐 Secure</h3>
              <p className="text-sm text-gray-600">API key authentication with rate limiting</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-4 text-gray-800">Getting Started</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Obtain your API key from the dashboard</li>
            <li>Review the authentication requirements</li>
            <li>Explore available endpoints</li>
            <li>Integrate with your application</li>
          </ol>
        </div>
      </section>

      {/* Authentication Section */}
      <section id="authentication" className="max-w-4xl mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#FFE0D6]">
        <div className="bg-gradient-to-r from-[#E74C3C] to-[#F39C12] px-6 py-4 flex items-center">
          <KeyIcon className="text-white mr-3" size={22} />
          <h2 className="text-xl font-bold text-white font-serif">API Authentication</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-6">
            All API requests require authentication using your API key. Include it in the 
            Authorization header of every request.
          </p>

          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <pre className="text-orange-200 overflow-x-auto">
              <code>
            {`// Example using fetch
            fetch('https://api.lutongpinoy.com/recipes', {
              headers: {
                'Authorization': 'Bearer YOUR_API_KEY_HERE',
                'Content-Type': 'application/json'
              }
            })`}
              </code>
            </pre>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
            <p className="text-yellow-700 flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span>
              <span><strong>Important:</strong> Keep your API key secure and never expose it in client-side code.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Endpoints Section */}
      <section id="endpoints" className="max-w-4xl mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#FFE0D6]">
        <div className="bg-gradient-to-r from-[#E74C3C] to-[#F39C12] px-6 py-4 flex items-center">
          <ListOrdered className="text-white mr-3" size={22} />
          <h2 className="text-xl font-bold text-white font-serif">API Endpoints</h2>
        </div>
        <div className="p-6">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <CookingPot className="text-[#E74C3C] mr-2" size={20} />
              Get All Recipes
            </h3>
            <div className="bg-gray-100 p-3 rounded mb-3 font-mono text-sm">
              GET https://api.lutongpinoy.com/recipes
            </div>
            <p className="text-gray-700 mb-3">Returns a list of all available recipes.</p>
            
            <h4 className="font-medium mb-2 text-gray-800">Example Response:</h4>
            <div className="bg-gray-800 rounded-lg p-4">
              <pre className="text-green-200 overflow-x-auto text-sm">
{`{
  "data": [
    {
      "id": "adobo-123",
      "name": "Chicken Adobo",
      "category": "main-dish",
      "cookingTime": 45
    }
  ]
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="max-w-4xl mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#FFE0D6]">
        <div className="bg-gradient-to-r from-[#E74C3C] to-[#F39C12] px-6 py-4 flex items-center">
          <Code className="text-white mr-3" size={22} />
          <h2 className="text-xl font-bold text-white font-serif">Code Examples</h2>
        </div>
        <div className="p-6">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">JavaScript Fetch Example</h3>
            <div className="bg-gray-800 rounded-lg p-4">
              <pre className="text-blue-200 overflow-x-auto text-sm">
{`// Get recipe by ID
async function getRecipe(recipeId) {
  const response = await fetch(
    \`https://api.lutongpinoy.com/recipes/\${recipeId}\`, 
    {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
      }
    }
  );
  return await response.json();
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Error Handling Section */}
      <section id="errors" className="max-w-4xl mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#FFE0D6]">
        <div className="bg-gradient-to-r from-[#E74C3C] to-[#F39C12] px-6 py-4 flex items-center">
          <AlertTriangle className="text-white mr-3" size={22} />
          <h2 className="text-xl font-bold text-white font-serif">Error Handling</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-6">The API uses standard HTTP status codes to indicate success or failure:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700">401 Unauthorized</h4>
              <p className="text-sm text-red-600">Invalid or missing API key</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700">404 Not Found</h4>
              <p className="text-sm text-red-600">Requested resource doesn't exist</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700">429 Too Many Requests</h4>
              <p className="text-sm text-red-600">Rate limit exceeded</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700">500 Internal Server Error</h4>
              <p className="text-sm text-red-600">Server encountered an error</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
    )
}