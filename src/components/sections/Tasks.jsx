export const Tasks = () => {

  const evaluatorsWithTasks = [
    {
      name: "John Vincent Villarin",
      tasks: [
        "Checked the grammar and spelling of the system.",
        "Added new prisoners to test.",
        "Changed the Administrator password.",
        "Reviewed the system's error messages for clarity and helpfulness.",
        "Assessed the accessibility features of the system for users with disabilities.",
        "Documented the issues."
      ],
    },
    {
      name: "Joezel Bruzo",
      tasks: [
        "Edited an existing inmate.",
        "Explored the Prison Management System.",
        "Tried adding a new visitor.",
        "Added a new incident report for an inmate.",
        "Searched and filtered inmates by crime types.",
        "Find help documentation.",
        "Log in and check if the dashboard clearly shows the current prison population.",
      ],
    },
    {
      name: "Jhay Adven Sarte",
      tasks: [
        "Add a new inmate and ensure the required fields are clearly marked.",
        "Edit inmate details (e.g., name or offense) and verify if feedback confirms success.",
        "Move an inmate to a different cell and confirm whether conflicts (overcapacity, security) are prevented.",
        "Attempt to delete an inmate and assess if there's a confirmation or undo option.",
        "Browse inmate profiles—check for consistency in layout and label clarity.",
        "Use a dropdown or search to assign inmates to cells—test if the system supports recognition over recall.",
      ],
    },
    {
      name: "Cristian Jay Sales",
      tasks: [
        "Log a new visitor appointment for an inmate and check validation of input.",
        "Test filtering visitor logs by inmate name and date range.",
        "File a new incident report involving an inmate—check if form structure matches real-world incident forms.",
        "Attempt to submit a report with missing required fields—check if errors are caught early and clearly explained.",
        "Edit a previously submitted report—look for visibility of change history or audit trail.",
        "Check consistency in how incident types (e.g., violence, contraband) are labeled and categorized.",
        "Evaluate system messages for submitting or deleting reports—are they helpful and consistent?",
        "Look for help documentation or tooltips in the incident module.",
      ],
    },
    {
      name: "Alec Campana",
      tasks: [
        "Check if inmate profile updates reflect immediately in the dashboard.",
        "Tried adding a new visitor.",
        "Evaluate the use of icons and labels in the visitor section (e.g., “Add,” “Edit,” “Delete”) for consistency.",
        "Tested the system's functionality.",
        "Evaluated the effectiveness of the system's notifications.",
        "Checked if there is an automatic calculation for the duration of the sentence.",
        "Evaluated the UI/UX design.",
        "Recommended solutions for each issue.",
        "Tried adding a male prisoner to a female cell/block.",
      ],
    },
  ];

  return (
    <section id="Tasks" className="min-h-screen flex flex-col items-center justify-start relative pt-30 pb-10">

      <div className="text-center z-10 px-4">

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent leading-right">
          List of Tasks
        </h1>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-prose mx-auto text-justify leading-relaxed">
          We performed these various tasks during the Heuristic Evaluation of the Prison Management System
        </p>

      </div>

      <div className="w-full max-w-4xl px-4 grid grid-cols-1 gap-8">

        {evaluatorsWithTasks.map((evaluator, idx) => (
          <div key={idx} className="bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-lg flex flex-col">
            <h3 className="text-2xl font-semibold text-pink-300 mb-6">{evaluator.name}</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300 text-lg">
              {evaluator.tasks.map((task, taskIdx) => (
                <li key={taskIdx}>{task}</li>
              ))}
            </ol>
          </div>
        ))}

      </div>

    </section>
  );
};
