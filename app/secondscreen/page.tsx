import Image from "next/image";
import Architecture_Diagram from "@/public/assets/secondScreen architecture diagram.png";
import React from "react";

export default function SecondScreenCaseStudy() {
  return (
    <div className="w-full px-6 py-16 pt-20 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">Second Screen App</h1>
      <p className="text-lg text-gray-600 mb-10">
        Turn any tablet or phone into a wireless second monitor no cables, no
        drivers, no hassle.
      </p>

      {/* Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Most people who want a second monitor either buy one or go without. I
          wanted a third option one that uses the tablet already sitting on the
          desk. The Second Screen App allows any device with a browser to act as
          a real-time extended display using WebRTC.
          <br />
          <br />
          Devices connect in under 5 seconds using a simple 6-digit code, with
          no proprietary software, no complex setup, and no additional hardware
          required.
        </p>
      </section>

      {/* Problem */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Problem</h2>
        <p className="text-gray-700 leading-relaxed">
          Studies show that a second monitor can improve productivity by up to
          42%. However, external displays cost $150–$400, and wireless
          screen-sharing tools often require subscriptions.
          <br />
          <br />
          Meanwhile, tablets and phones are already available but lack a simple,
          reliable way to function as secondary displays. There was a clear gap
          for a lightweight, free, and cross-platform solution.
        </p>
      </section>

      {/* Solution */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Solution</h2>
        <p className="text-gray-700 leading-relaxed">
          I built a cross-platform system where a desktop Electron app captures
          the screen and streams it using WebRTC. A secondary device simply
          opens a browser, enters a 6-digit code, and instantly receives the
          display.
          <br />
          <br />
          Supabase acts as the signaling layer to exchange WebRTC offers,
          answers, and ICE candidates. Once connected, all data flows
          peer-to-peer eliminating latency overhead, server costs, and
          subscription requirements.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Real-time screen streaming using WebRTC (peer-to-peer)</li>
          <li>Under 150ms end-to-end latency on local networks</li>
          <li>6-digit session code for pairing devices in under 5 seconds</li>
          <li>Works on any device with a browser no install required</li>
          <li>Electron desktop client for screen capture</li>
          <li>Secure signaling using Supabase Realtime</li>
          <li>Session codes expire after 5 minutes or after use</li>
          <li>Built with TypeScript across the full stack</li>
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
          The Electron app captures the screen using the desktopCapturer API and
          creates a WebRTC connection. The offer is stored in Supabase along
          with a session code.
          <br />
          <br />
          The second device retrieves the offer, sends an answer, and both sides
          exchange ICE candidates through Supabase until a direct peer-to-peer
          connection is established typically within 3–5 seconds. After that,
          all streaming happens directly between devices.
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
          <li>User opens the desktop app</li>
          <li>
            Screen capture starts using Electron&apos;s desktopCapturer API
          </li>
          <li>A WebRTC session and 6-digit code are generated</li>
          <li>Secondary device enters the code in browser</li>
          <li>Supabase exchanges offer, answer, and ICE candidates</li>
          <li>Peer-to-peer connection is established in under 5 seconds</li>
          <li>Screen streams live with &lt;150ms latency</li>
        </ol>
      </section>

      {/* Demo */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Demo</h2>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://youtube.com/embed/damvIBe9CPk"
            title="Second Screen Demo"
            allowFullScreen
          />
        </div>
        <div className="mt-5">
          <a
            href="https://youtu.be/damvIBe9CPk"
            target="_blank"
            rel="noopener noreferrer">
            Watch demo on YouTube →
          </a>
        </div>
      </section>

      {/* Challenges */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>
            <strong>ICE candidate timing issues:</strong> Candidates were
            arriving before remote descriptions were set, causing ~30%
            connection failures. Solved by queueing candidates until ready.
          </li>
          <li>
            <strong>Latency & CPU optimization:</strong> Screen capture
            initially used 40–60% CPU. Optimized to 30fps/1080p with controlled
            bitrate, reducing CPU to &lt;20% while maintaining &lt;150ms
            latency.
          </li>
          <li>
            <strong>Session security:</strong> Designed a 6-digit code system
            with expiry and single-use invalidation to balance usability and
            security.
          </li>
        </ul>
      </section>

      {/* Learnings */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Learnings</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            Deep understanding of WebRTC signaling flow (offer/answer/ICE)
          </li>
          <li>Practical experience with peer-to-peer networking</li>
          <li>Using Supabase Realtime as a lightweight signaling layer</li>
          <li>Cross-platform differences in Electron screen capture</li>
          <li>Balancing video quality vs performance in real-time systems</li>
        </ul>
      </section>
    </div>
  );
}
