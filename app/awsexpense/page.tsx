import Image from "next/image";
import Architecture_Diagram from "@/public/assets/expense tracker architecture diagram.png";

export default function ExpenseTrackerCaseStudy() {
  return (
    <div className="w-full px-6 py-16 pt-20 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">Serverless Expense Tracker</h1>
      <p className="text-lg text-gray-600 mb-10">
        A fully serverless expense app on AWS scales to thousands of users and
        costs under $1/month at low traffic.
      </p>

      {/* Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          I built this project to explore what a production-grade application
          looks like when you remove servers entirely. The app allows users to
          log, categorize, and review expenses through a fast Next.js frontend
          backed by AWS Lambda, API Gateway, DynamoDB, and Cognito.
          <br />
          <br />
          The backend scales automatically from 0 to thousands of requests while
          costing almost nothing at idle making it ideal for indie developers
          and small teams.
        </p>
      </section>

      {/* Problem */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Problem</h2>
        <p className="text-gray-700 leading-relaxed">
          Traditional backends (like Express on a VPS) run 24/7, costing
          $10–$15/month even with minimal usage. Add scaling, monitoring, and
          maintenance overhead, and the real cost increases quickly.
          <br />
          <br />
          For an app handling only 50–100 requests per day, this is inefficient.
          I wanted to prove that a fully functional production app could run at
          near-zero cost while still handling real-world scale.
        </p>
      </section>

      {/* Solution */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Solution</h2>
        <p className="text-gray-700 leading-relaxed">
          The entire backend is built using AWS managed services. API Gateway
          routes requests to Lambda functions, which handle business logic.
          DynamoDB stores data using a single-table schema optimized for fast
          queries, and Cognito manages authentication with JWT tokens.
          <br />
          <br />
          The frontend is deployed on S3 and delivered globally through
          CloudFront, ensuring fast load times worldwide. This eliminates server
          maintenance while providing automatic scaling and high availability.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Secure authentication using AWS Cognito (JWT-based)</li>
          <li>Add, edit, and delete expense records with categories</li>
          <li>
            Serverless REST API using Lambda + API Gateway (auto scales to 10k+
            req/sec)
          </li>
          <li>
            DynamoDB single-table design with &lt;10ms query performance (p99)
          </li>
          <li>Frontend hosted on S3 + CloudFront (400+ edge locations)</li>
          <li>Runs at under $1/month at low traffic</li>
          <li>No servers to manage zero maintenance overhead</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
          <div>Next.js</div>
          <div>AWS Lambda</div>
          <div>API Gateway</div>
          <div>DynamoDB</div>
          <div>AWS Cognito</div>
          <div>CloudFront</div>
          <div>S3</div>
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">System Architecture</h2>
        <p className="text-gray-700 mb-6">
          Users authenticate via Cognito and receive a JWT token. Each request
          includes this token, which is validated by API Gateway before reaching
          Lambda blocking unauthorized requests early.
          <br />
          <br />
          Lambda functions process business logic and interact with DynamoDB,
          which returns results in under 10ms. Static assets are served from S3
          and cached globally via CloudFront, delivering sub-100ms load times
          worldwide.
        </p>

        <div className="flex justify-center items-center">
          <Image
            src={Architecture_Diagram}
            alt="Expense Tracker Architecture Diagram"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>User signs up or logs in via AWS Cognito</li>
          <li>JWT token is stored and sent with API requests</li>
          <li>API Gateway validates token before invoking Lambda</li>
          <li>Lambda executes business logic</li>
          <li>DynamoDB processes queries (&lt;10ms p99)</li>
          <li>Response is returned instantly to the frontend</li>
        </ol>
      </section>

      {/* Demo */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Demo</h2>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://youtube.com/embed/CHaWlLaYqrI"
            title="Expense Tracker Demo"
            allowFullScreen
          />
        </div>
      </section>

      {/* Challenges */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>
            <strong>DynamoDB schema design:</strong> No joins or ad-hoc queries
            meant designing access patterns upfront. Used userId as partition
            key and date-based sort key for efficient queries.
          </li>
          <li>
            <strong>Stateless authentication:</strong> Instead of validating JWT
            in every Lambda (~50ms overhead), used API Gateway Cognito
            Authorizer to validate requests before Lambda runs.
          </li>
          <li>
            <strong>Cold start latency:</strong> Reduced cold starts from ~600ms
            to &lt;250ms by keeping Lambda bundles under 1MB and optimizing
            initialization paths.
          </li>
        </ul>
      </section>

      {/* Learnings */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Learnings</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>DynamoDB single-table design and access pattern thinking</li>
          <li>JWT authentication flow using Cognito + API Gateway</li>
          <li>IAM least-privilege design for secure AWS architecture</li>
          <li>Serverless cost optimization in real-world scenarios</li>
          <li>Trade-offs between cold starts and performance</li>
        </ul>
      </section>
    </div>
  );
}
