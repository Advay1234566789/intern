import { motion } from "framer-motion";
import {
  Banknote,
  Briefcase,
  HeartPulse,
  FlaskConical,
  GraduationCap,
  Layers,
} from "lucide-react"; // Icons for the industries

// Import the background image
import backgroundImage from "../assets/backround-industries.jpg";

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <div className="space-y-8">
              {/* Banking & Financial Services */}
              <div className="flex items-center gap-4">
                <Banknote className="text-blue-500 w-10 h-10" />
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Banking & Financial Services
                  </h3>
                  <p className="text-lg text-gray-300">
                    Software solutions can streamline operations, improve
                    security, and enhance customer experience in the banking and
                    financial sectors.
                  </p>
                </div>
              </div>
              {/* Insurance */}
              <div className="flex items-center gap-4">
                <Briefcase className="text-blue-500 w-10 h-10" />
                <div>
                  <h3 className="text-2xl font-semibold text-white">Insurance</h3>
                  <p className="text-lg text-gray-300">
                    Customized software solutions in insurance can optimize
                    claims processing, risk assessment, and policy management.
                  </p>
                </div>
              </div>
              {/* Healthcare */}
              <div className="flex items-center gap-4">
                <HeartPulse className="text-blue-500 w-10 h-10" />
                <div>
                  <h3 className="text-2xl font-semibold text-white">Healthcare</h3>
                  <p className="text-lg text-gray-300">
                    Software applications in healthcare improve patient care,
                    streamline medical records management, and optimize hospital
                    workflows.
                  </p>
                </div>
              </div>
              {/* Life Sciences */}
              <div className="flex items-center gap-4">
                <FlaskConical className="text-blue-500 w-10 h-10" />
                <div>
                  <h3 className="text-2xl font-semibold text-white">Life Sciences</h3>
                  <p className="text-lg text-gray-300">
                    In life sciences, software solutions enhance research and
                    development, clinical trials management, and data analysis.
                  </p>
                </div>
              </div>
              {/* Education */}
              <div className="flex items-center gap-4">
                <GraduationCap className="text-blue-500 w-10 h-10" />
                <div>
                  <h3 className="text-2xl font-semibold text-white">Education</h3>
                  <p className="text-lg text-gray-300">
                    The education sector benefits from software solutions by
                    enabling online learning platforms, student progress tracking,
                    and resource management.
                  </p>
                </div>
              </div>
              {/* Enterprise Resource Management */}
              <div className="flex items-center gap-4">
                <Layers className="text-blue-500 w-10 h-10" />
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Enterprise Resource Management
                  </h3>
                  <p className="text-lg text-gray-300">
                    Comprehensive ERP systems integrate and streamline business
                    processes, improving operational efficiency and decision-making.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={backgroundImage}
              alt="Industries"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
