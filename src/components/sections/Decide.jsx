export const Decide = () => {

    return ( 

      <section id="Decide" className="min-h-screen flex flex-col items-center justify-start relative pt-30 pb-10">

        <div className="text-center z-10 px-4">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent leading-right">

            DECIDE Framework

          </h1>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-gray-100 tracking-tight text-center leading-snug">

                Introduction
            
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-prose mx-auto text-justify leading-relaxed">
                
                This section presents a heuristic evaluation of the Prison Management System, guided by Jakob Nielsen’s 10 Usability Heuristics. The goal is to systematically assess the interface for potential usability issues, consistency, and user control. By identifying areas for improvement, we aim to enhance the system's overall effectiveness and user experience for administrative personnel and stakeholders alike.
            
            </p>

        </div>
  
        <div className="flex flex-col gap-6 px-4 max-w-3xl w-full mt-10">

          {[

            { title: "D", label: "Determine goals", desc: [

                "To identify usability issues that affect task efficiency, data accuracy, and overall user satisfaction, especially in managing prisoner records, visitation, and cell assignments.",
                "To assess how satisfied users are with the system, and how much they trust its data accuracy, especially in sensitive areas like prisoner records and cell assignments."

            ] },

            { title: "E", label: "Explore the questions", desc: [
                
                "To evaluate usability, we ask targeted questions about the system’s design, behavior, and user interaction.",
                "Can users easily navigate the system and complete key tasks without confusion?",
                "Are there any common errors or issues that users encounter frequently?",
                "Does the system provide adequate feedback and guidance when errors occur?",
                "Are the design elements and terminology used in the system intuitive for the users?",
                "How efficient are users in completing tasks, and are there any bottlenecks or delays?"

            ] },

            { title: "C", label: "Choose evaluation methods", desc: [
                
                "We will use heuristic evaluation based on Nielsen’s 10 usability heuristics, supported by direct user observation and system walkthroughs."
            
            ] },

            { title: "I", label: "Identify practical issues", desc: [
                
                "Evaluation will be conducted using a staging version of the system. Time is limited to one month and one week. Test participants will consist of us, the students, acting as evaluators. No changes will be deployed to live data."
            
            ] },

            { title: "D", label: "Decide how to deal with ethical issues", desc: [
                
                "Since the evaluation will be conducted by student evaluators on a staging version of the system, no real user data will be involved. All testing will be done in a controlled environment with mock data. Participants (students) are aware of their roles, and no sensitive or private information will be collected or shared. All activities follow ethical guidelines set by the course/project."
            
            ] },

            { title: "E", label: "Evaluate, analyze, interpret, and present data", desc: [
                
                "For Evaluation, we used the Nielsen 10 Usability Heuristics Workbook. A summary report will be created highlighting key usability issues and recommended improvements, supported with screenshots and descriptions for clarity."
            
            ] },
          
        ].map((step, index) => (
        
            <div key={index} className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10 shadow-md text-white">
                
                <h2 className="text-2xl font-bold text-pink-400">{step.title} — {step.label}</h2>

                {step.label === "Explore the questions" ? (
                
                <div className="mt-2 text-gray-300 text-sm leading-relaxed space-y-2 pl-6">

                    <ul className="list-disc">

                    <li>{step.desc[0]}</li>

                    </ul>

                    <ol className="list-decimal space-y-2">

                    {step.desc.slice(1).map((item, idx) => (

                        <li key={idx}>{item}</li>

                    ))}

                    </ol>

                </div>

                ) : (

                <ul className="mt-2 text-gray-300 text-sm leading-relaxed list-disc pl-6 space-y-2">

                    {step.desc.map((item, idx) => (

                    <li key={idx}>{item}</li>

                    ))}

                </ul>

                )}

            </div>

            ))}

        </div>

      </section>
    );
  };
  