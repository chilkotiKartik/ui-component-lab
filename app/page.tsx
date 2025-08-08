import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 px-6 py-16 lg:px-8 lg:py-24">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full opacity-80 -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-300 rounded-full opacity-60 translate-y-32 -translate-x-16"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                  Unlock your<br />
                  potential —<br />
                  <span className="text-orange-600">Learn by doing.</span>
                </h1>
              </div>
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full"
              >
                Book Free Pilot Workshop
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/hero-illustration.png"
                alt="Three people working together with gears"
                width={400}
                height={300}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Hands-on Learning */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto">
                <div className="w-10 h-10 bg-yellow-400 rounded-sm flex items-center justify-center">
                  <div className="w-6 h-6 bg-teal-600 rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-black text-lg">Handson</h3>
                <h3 className="font-bold text-black text-lg">Learning</h3>
              </div>
            </div>

            {/* Curriculum by IIT Alumni */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-6 bg-teal-800 rounded-t-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-black text-lg">Curriculum</h3>
                <h3 className="font-bold text-black text-lg">by IIT Alumni</h3>
              </div>
            </div>

            {/* Interactive Sessions */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                <div className="w-10 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-6 h-1 bg-red-500 rounded"></div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-black text-lg">Interactive</h3>
                <h3 className="font-bold text-black text-lg">Sessions</h3>
              </div>
            </div>

            {/* Expert Guidance */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto">
                <div className="w-10 h-10 border-4 border-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-black text-lg">Expert</h3>
                <h3 className="font-bold text-black text-lg">Guidance</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Courses Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-teal-600 mb-12">
            Our Courses
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Design Thing */}
            <Card className="bg-yellow-100 border-0 p-6">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Design Thing</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Learn creative problem-solving through engaging projects
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Curriculum by IIT Alumni */}
            <Card className="bg-yellow-100 border-0 p-6">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                  <div className="w-8 h-6 bg-white rounded-t-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Curriculum by</h3>
                  <h3 className="text-xl font-bold text-black mb-2">IIT Alumni</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    solving through engaging projects
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Expert Guidance */}
            <Card className="bg-yellow-100 border-0 p-6">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Expert Guidance</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Learn creative problem-solving through engaging projects
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/about-illustration.png"
                alt="Person presenting at a board"
                width={300}
                height={400}
                className="w-full max-w-sm"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-black">About</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    Learn creative problem-solving through engaging projects
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Design Thinking</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn creative problem-solving through engaging projects
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Design Thinking</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn creative problem-solving through engaging projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
