import Image from "next/image";
import Architecture_Diagram from "@/public/assets/expense tracker architecture diagram.png";

export default function ExpenseTrackerCaseStudy() {
  return (
    <div className="w-full px-6 py-16 pt-20 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">Serverless Expense Tracker</h1>
      <p className="text-lg text-gray-600 mb-10">
        A fully serverless expense tracking application built on AWS that allows
        users to securely manage and analyze their spending through scalable
        cloud infrastructure.
      </p>

      {/* Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          The Serverless Expense Management Platform is a cloud-native web
          application designed to help users track and manage their expenses.
          The application uses AWS serverless technologies to provide a
          scalable, cost-efficient backend while delivering a fast and
          responsive frontend. Instead of traditional servers, the system relies
          on event-driven functions, managed authentication, and NoSQL storage
          to handle user data and transactions.
        </p>
      </section>

      {/* Problem */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Problem</h2>
        <p className="text-gray-700 leading-relaxed">
          Many personal finance applications rely on centralized servers that
          require continuous maintenance and scaling. For small applications or
          independent developers, managing infrastructure can increase cost and
          complexity. The challenge was to build an expense management platform
          that could scale automatically while minimizing operational overhead.
        </p>
      </section>

      {/* Solution */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Solution</h2>
        <p className="text-gray-700 leading-relaxed">
          This project uses AWS serverless services to remove the need for
          traditional backend servers. API Gateway routes requests to AWS Lambda
          functions that process business logic, while DynamoDB stores expense
          data efficiently. AWS Cognito manages secure authentication and user
          identity. Static frontend assets are hosted in Amazon S3 and delivered
          globally through CloudFront CDN.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Secure user authentication using AWS Cognito</li>
          <li>Add, update, and delete expense records</li>
          <li>RESTful APIs powered by AWS Lambda and API Gateway</li>
          <li>NoSQL data storage using DynamoDB</li>
          <li>Global content delivery with CloudFront CDN</li>
          <li>Fully serverless architecture for automatic scaling</li>
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
          The application follows a serverless architecture where frontend
          requests are routed through API Gateway, which triggers AWS Lambda
          functions. These functions process the request and interact with
          DynamoDB for storing and retrieving expense data. User authentication
          and authorization are handled by AWS Cognito, while CloudFront and S3
          deliver the frontend globally.
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
          <li>User logs into the application using AWS Cognito.</li>
          <li>The frontend sends requests to API Gateway endpoints.</li>
          <li>API Gateway triggers AWS Lambda functions.</li>
          <li>Lambda processes the request and interacts with DynamoDB.</li>
          <li>
            The response is returned to the frontend with updated expense data.
          </li>
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
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Designing an efficient DynamoDB schema for expense queries</li>
          <li>Managing secure authentication and token validation</li>
          <li>Handling stateless Lambda execution environments</li>
          <li>Structuring API Gateway routes for scalable backend services</li>
        </ul>
      </section>

      {/* Learnings */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Learnings</h2>
        <p className="text-gray-700 leading-relaxed">
          Building this project helped me gain hands-on experience with AWS
          serverless architecture, event-driven backend design, and cloud-native
          application deployment. It also improved my understanding of secure
          authentication flows, NoSQL database modeling, and scalable API
          design.
        </p>
      </section>
    </div>
  );
}
