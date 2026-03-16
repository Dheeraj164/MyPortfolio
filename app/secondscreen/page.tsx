import Image from "next/image";
import Architecture_Diagram from "@/public/assets/secondScreen architecture diagram.png";
import React from "react";
export default function SecondScreenCaseStudy() {
  return (
    <div className="w-full px-6 py-16 pt-20 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">Second Screen App</h1>
      <p className="text-lg text-gray-600 mb-10">
        A real-time display extension system that allows tablets or secondary
        devices to act as an additional screen for a desktop using WebRTC.
      </p>

      {/* Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          The Second Screen App enables users to extend their desktop display to
          another device such as a tablet. Instead of relying on cables or
          proprietary software, this application streams the desktop screen in
          real time using WebRTC. A desktop client built with Electron captures
          the screen and streams it to connected devices through peer-to-peer
          communication. Devices connect using a secure session code, allowing
          quick pairing between the desktop and the secondary device.
        </p>
      </section>

      {/* Problem */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Problem</h2>
        <p className="text-gray-700 leading-relaxed">
          Many professionals and developers benefit from multiple monitors, but
          not everyone has access to extra displays. Tablets and other devices
          are often available but cannot easily function as extended monitors.
          Existing solutions are often proprietary, expensive, or require
          complicated setup processes.
        </p>
      </section>

      {/* Solution */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Solution</h2>
        <p className="text-gray-700 leading-relaxed">
          The Second Screen App provides a lightweight system that converts any
          device with a browser into a secondary display. The desktop
          application captures the screen and streams it using WebRTC, while the
          receiving device simply joins a session using a generated pairing
          code. This eliminates complex configuration and reduces latency
          through peer-to-peer streaming.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Real-time screen streaming using WebRTC</li>
          <li>Low latency peer-to-peer communication</li>
          <li>6-digit session code for quick device pairing</li>
          <li>Electron desktop client for screen capture</li>
          <li>Secure signaling using Supabase</li>
          <li>Simple join flow for tablets and secondary devices</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
          <div>Electron.js</div>
          <div>WebRTC</div>
          <div>React</div>
          <div>React Native</div>
          <div>Supabase</div>
          <div>TypeScript</div>
          <div>STUN Servers</div>
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">System Architecture</h2>
        <p className="text-gray-700 mb-6">
          The system uses WebRTC for peer-to-peer media streaming while Supabase
          acts as a signaling layer for exchanging connection information such
          as offers, answers, and ICE candidates.
        </p>
        <div className="flex justify-center items-center">
          <Image
            src={Architecture_Diagram}
            alt="Second Screen Architecture Diagram"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>User logs into the desktop application.</li>
          <li>
            The desktop starts screen capture using Electron’s desktopCapturer
            API.
          </li>
          <li>A WebRTC session is created and a 6-digit code is generated.</li>
          <li>The secondary device enters the code and joins the session.</li>
          <li>Supabase exchanges signaling data between devices.</li>
          <li>A direct peer-to-peer connection is established.</li>
          <li>The desktop screen begins streaming to the secondary device.</li>
        </ol>
      </section>

      {/* Demo */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Demo</h2>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-xl"
            // src="https://youtube.com/embed/CHaWlLaYqrI"
            src="https://youtube.com/embed/damvIBe9CPk"
            title="Second Screen Demo"
            allowFullScreen
          />
        </div>
      </section>

      {/* Challenges */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Maintaining low latency during continuous screen streaming</li>
          <li>Handling WebRTC signaling and ICE candidate exchange</li>
          <li>Managing session pairing across devices securely</li>
          <li>Optimizing screen capture performance in Electron</li>
        </ul>
      </section>

      {/* Learnings */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Learnings</h2>
        <p className="text-gray-700 leading-relaxed">
          Building this project deepened my understanding of WebRTC,
          peer-to-peer networking, and real-time media streaming. I also gained
          experience designing signaling systems, managing cross-device
          communication, and optimizing performance for real-time applications.
        </p>
      </section>
    </div>
  );
}
