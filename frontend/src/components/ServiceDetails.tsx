import React from "react";
import { motion } from 'framer-motion'; 

const servicesDetails = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    additionalTitle: "Smart Automation: Transforming Industries with AI",
    description:
      "Artificial Intelligence is revolutionizing industries by automating processes and making data-driven decisions. AI systems can learn from data, adapt to changes, and perform complex tasks faster and more accurately than humans. From customer service chatbots to advanced medical diagnosis, AI has applications across various domains, helping businesses save time, reduce costs, and improve customer experiences.",
    whyItMatters: [
      "Enhanced Decision-Making: AI analyzes large datasets in real-time, providing actionable insights to make informed decisions.",
      "Personalized Customer Experiences: AI-powered tools like recommendation engines tailor services and products to individual preferences, boosting customer satisfaction.",
      "Automation of Repetitive Tasks: AI streamlines operations by handling routine tasks, allowing employees to focus on strategic goals.",
      "Predictive Insights: By learning from historical data, AI forecasts future trends, helping businesses plan effectively.",
      "Improved Efficiency: AI optimizes processes, such as supply chain management or energy usage, saving time and resources.",
      "By integrating AI, businesses can innovate, improve efficiency, and provide cutting-edge solutions to meet evolving demands."
    ]
  },
  {
    id: "data-science",
    title: "Data Science",
    additionalTitle: "Predictive Modelling: Making Data Work for the Future",
    description:
      "Today, companies have access to a lot of customer data. Predictive modelling helps them use that data to make smart guesses about what might happen next. It’s all about looking at past data to predict future events. This can be helpful for things like scheduling equipment maintenance, understanding customer behaviour, or estimating future sales. With predictive modelling, businesses can make better decisions based on what’s likely to happen. It gives them a clearer picture of the future, helping them work smarter and stay ahead.",
    whyItMatters: [
      "Spot Market Trends: Predictive modelling helps businesses track market trends, understand how customers behave, and compare pricing with competitors.",
      "Adjust Pricing Smartly: Companies can adjust prices based on real-time factors like demand or competition to increase profits.",
      "Understand Customers: Predictive tools can help businesses guess what their customers will do next, like what they’ll buy or when they might stop using a service.",
      "Plan Sales Better: Businesses can use predictions to estimate future sales and avoid overstocking or running out of products.",
      "Reduce Downtime: In manufacturing, predictive models can plan equipment maintenance to avoid breakdowns and save costs.",
      "Improve Inventory Management: Using customer data, businesses can stock up on the right products during peak seasons, like keeping more festive items during holidays, ensuring they meet customer demands."
    ]
  },
  {
    id: "blockchain",
    title: "Blockchain", 
    additionalTitle: "Securing Trust: Revolutionizing Systems with Blockchain",
    description:
      "Blockchain is a decentralized, secure technology that ensures transparency, traceability, and trust in digital transactions. It stores data in tamper-proof blocks, making it ideal for applications like supply chain management, digital identity verification, and financial services. Blockchain eliminates the need for intermediaries, reducing costs and enhancing efficiency.",
    whyItMatters: [
      "Transparency: Blockchain provides a public ledger where all transactions are visible and verifiable, fostering trust among stakeholders.",
      "Enhanced Security: The decentralized and encrypted nature of blockchain prevents unauthorized access and data manipulation.",
      "Efficient Transactions: By removing intermediaries, blockchain ensures faster and cost-effective transactions.",
      "Traceability: Every transaction is recorded and immutable, making it easy to track assets, whether in supply chains or digital payments.",
      "Smart Contracts: Blockchain enables automated, self-executing contracts that reduce the need for manual intervention.",
      "Digital Identity: Blockchain enhances privacy and security in identity verification by allowing users to control their data.",
      "Blockchain is redefining how businesses operate by providing secure, transparent, and efficient solutions for various industries."
    ]
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    additionalTitle: "Securing Digital Systems: The Role of Cybersecurity in Software Development",
    description:
      "In an increasingly digital world, the importance of cybersecurity for software solutions cannot be overstated. Cyber threats are evolving rapidly, and organizations must adopt robust measures to protect their software systems, data, and users. Effective cybersecurity strategies not only safeguard sensitive information but also enhance trust and ensure business continuity.",
    whyItMatters: [
      "Data Protection: Protecting sensitive customer and business data from breaches, leaks, and unauthorized access is a top priority. Cybersecurity solutions ensure data integrity and confidentiality.",
      "Application Security: Secure software development practices identify vulnerabilities in code, preventing potential exploitation by hackers. This reduces risks such as SQL injection, cross-site scripting (XSS), and other application-level threats.",
      "Threat Detection and Prevention: Advanced cybersecurity tools continuously monitor systems to detect and neutralize threats in real time, reducing response times and mitigating damage.",
      "Compliance and Regulation: Adherence to industry standards such as GDPR, HIPAA, and ISO 27001 is essential. Cybersecurity measures ensure compliance and avoid legal and financial repercussions.",
      "Business Continuity: Cyberattacks like ransomware can disrupt operations. Robust cybersecurity strategies ensure resilience, enabling businesses to recover quickly and maintain operations.",
      "Customer Trust: Strong cybersecurity measures enhance customer confidence by demonstrating commitment to protecting their personal and financial information."
    ]
  },
  {
    id: "iot",
    title: "IoT Solutions",
    description:
      "Businesses today need to monitor their operations in real time to stay competitive. IoT solutions enable companies to collect data from connected devices, analyse it, and make informed decisions. From predictive maintenance to inventory tracking, IoT systems transform businesses by increasing efficiency, reducing costs, and improving productivity.",
    whyItMatters: [
      "Real-Time Monitoring: IoT systems collect real-time data from sensors, machines, and devices to track performance and detect issues early.",
      "Predictive Maintenance: IoT-enabled sensors predict equipment failures, allowing companies to schedule maintenance proactively and avoid costly downtime.",
      "Improved Asset Management: Businesses can track and monitor assets such as machinery, vehicles, and inventory remotely, ensuring better utilization and security.",
      "Enhanced Customer Experience: IoT devices collect data to personalize services, improve response times, and increase customer satisfaction.",
      "Energy Efficiency: Smart sensors help monitor energy usage and optimize consumption, reducing operational costs and promoting sustainability.",
      "Data-Driven Insights: IoT platforms analyse large datasets, providing actionable insights that drive better decision-making and business growth."
    ]
  },
  {
    id: "business-automation",
    title: "Business Automation",
    additionalTitle: "Transforming Business Efficiency with Automation",
    description:
      "Modern businesses often face challenges such as inefficient workflows, high operational costs, and limited scalability. Business automation solves these problems by streamlining repetitive tasks, enhancing accuracy, and allowing organizations to focus on growth and innovation.",
    whyItMatters: [
      "Streamline Workflow Approvals: Automation simplifies approvals, task assignments, and notifications, reducing delays and bottlenecks in operations.",
      "Eliminate Manual Errors: Robotic Process Automation (RPA) can handle repetitive tasks like invoice processing, order management, and data extraction with greater accuracy, minimizing human errors.",
      "Enhance Department Collaboration: Integrated systems connect tools and platforms, enabling seamless communication and better coordination across departments.",
      "Improve Decision-Making with Real-Time Insights: Automated processes provide visibility into real-time operations, helping businesses track performance and make informed decisions.",
      "Save Costs and Scale Efficiently: Automation allows businesses to grow without a proportional increase in resources, significantly reducing operational expenses.",
      "Boost Employee Productivity: By automating mundane tasks, employees can focus on high-value activities like strategy, innovation, and customer engagement."
    ]
  },
  {
    id: "app-dev-management",
    title: "App Development",
    additionalTitle: "Empowering Growth through Custom Applications",
    description:
      "In today’s digital era, businesses need mobile and web applications to enhance customer engagement, streamline operations, and boost growth. App development empowers companies to deliver seamless user experiences, improve accessibility, and stay competitive in a fast-paced market.",
    whyItMatters: [
      "Enhanced User Experience: Custom apps offer intuitive interfaces, improving usability and customer satisfaction.",
      "Increased Accessibility: Mobile apps enable 24/7 access to services, enhancing convenience and user engagement.",
      "Scalability and Flexibility: Apps are built to scale with business growth, supporting evolving needs and demands.",
      "Streamlined Operations: Apps integrate with business tools to automate workflows, reducing manual efforts and improving efficiency.",
      "Personalized Services: Data-driven insights allow businesses to offer tailored solutions and recommendations to users.",
      "Competitive Advantage: Well-designed apps help businesses stand out, attract new customers, and retain existing ones.",
      "Revenue Growth: Apps support e-commerce, subscriptions, and in-app purchases, driving sales and profitability."
    ]
  }
];

interface ServiceDetailsProps {
  serviceId: string;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ serviceId }) => {
  const service = servicesDetails.find((service) => service.id === serviceId);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <section className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:grid lg:grid-cols-2 lg:gap-12"
        >
          <div className="relative mb-16 lg:mb-0">
            <h1 className="text-5xl font-extrabold text-white">{service.title}</h1>
            <h2 className="mt-2 text-2xl text-gray-300">{service.additionalTitle}</h2>
            <p className="mt-6 text-lg text-gray-400">{service.description}</p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold text-white">Why It Matters</h3>
              <ul className="space-y-2 text-lg text-gray-300">
                {service.whyItMatters.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-2 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;
