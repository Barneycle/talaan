import { useState } from 'react';

import visibility1 from "../../assets/visibility1.png";
import visibility2 from "../../assets/visibility2.png";
import mismatch1 from "../../assets/mismatch1.png";
import mismatch2 from "../../assets/mismatch2.png";
import control from "../../assets/control.png";
import consistency from "../../assets/consistency.png";
import error1 from "../../assets/error1.png";
import error2 from "../../assets/error2.png";
import recog1 from "../../assets/recog1.png";
import recog2 from "../../assets/recog2.png";
import flexi1 from "../../assets/flexi1.png";
import flexi2 from "../../assets/flexi2.png";
import hurd1 from "../../assets/hurd1.png";
import WorkbookVillarin from "../../assets/WorkbookVillarin.pdf";
import WorkbookSales from "../../assets/WorkbookSales.pdf";
import WorkbookSarte from "../../assets/WorkbookSarte.pdf";
import WorkbookBruzo from "../../assets/WorkbookBruzo.pdf";
import WorkbookCampana from "../../assets/WorkbookCampana.pdf";

export const Evaluation = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPDF, setSelectedPDF] = useState(null);
  const openImage = (imgSrc) => setSelectedImage(imgSrc);
  const closeImage = () => setSelectedImage(null);

  const rows = [

    {

      heuristic: "1. Visibility of System Status",
      issue: [ "Feedback notifications (e.g., success or error messages) are too small and easily overlooked.",
              "When attempting to add a visitor, the inmate dropdown is empty, and even when the user types a valid inmate name, no suggestions or options appear. The system does not provide any feedback or error messages, leaving the user unsure if it’s a bug, if there are no inmates in the system, or if there’s an input error."
            ],
      recommendation: ["Make notifications larger, more noticeable, and use color or icons to reinforce visibility.",
                        "Display a loading indicator while the inmate list is being fetched. If no inmates are available, show a clear message like: “No inmates found. Please register inmates first.” Allow partial matching and show suggestions as users type. Consider adding error logging or validation to prevent this from happening silently.",
        ],
      images: [visibility1, visibility2],

    },

    {

      heuristic: "2. Match Between System and the Real World",
      issue: ["Typographical error: 'Vistor' and 'Adminstrator' instead of 'Visitor' and 'Administrator' in the sidebar and front page. Undermines credibility.",
              "Users should be able to generate a daily report showing inmate movements (transfers, releases).",
              
      ],
      recommendation: ["Correct the spelling and conduct proofreading for other possible typos in the UI.",

        ],
      images: [mismatch1, mismatch2],

    },

    {

      heuristic: "3. User Control and Freedom",
      issue: ["When saving or updating data, the system does not prompt the user with a confirmation message, increasing the risk of unintentional changes. No clear option to cancel or go back when editing entries. Users are forced to continue or lose data.", 

      ],
      recommendation: ["Add a confirmation dialog (e.g., “Are you sure you want to save changes?”) before committing updates or new entries, to give users a chance to review their action. Add clearly visible cancel/back buttons and confirmation before leaving forms.",
                        "Implement Undo/Redo functionality or at least allow users to review changes before submission.",
                        "Add an option to change language/s.",
      
                      ],
      images: [control],

    },

    {

      heuristic: "4. Consistency and Standards",
      issue: ["No significant issues found. Labels and actions appear consistent with platform conventions.", 

      ],
      recommendation: ["Maintain consistency by following standard design patterns.",

      ],
      images: [consistency],

    },

    {

      heuristic: "5. Error Prevention",
      issue: ["Login error is vague — message says “incorrect username or password” regardless of which is wrong.",
              "The system allows a male prisoner to be assigned to a women’s cell block, and vice versa. There is no validation to prevent this mismatch between prisoner sex and cell block assignment. This could lead to operational issues and confusion, especially if prisoners are placed in inappropriate or unsafe locations. ",
              "The system also allows users to input and save a prisoner with a name that already exists in the database without any warning or prompt. This can result in duplicate records, leading to confusion, data inconsistency, and possible errors in identity verification or prisoner tracking.",
      ],
      recommendation: ["Separate error messages for username and password input validation.",
                       "Implement validation rules that prevent a prisoner from being assigned to a cell block that doesn’t match their sex (e.g., if 'Sex: Male' is selected, only male cell blocks should be available for selection). Display error messages or warnings when such mismatches occur, prompting the user to correct the selection. Lock cell block options based on the selected sex of the prisoner, so only the appropriate choices are available. Add a duplicate-check mechanism when entering a prisoner name. If a matching name already exists, show a clear warning such as: “A prisoner with this name already exists. Please confirm if this is a new entry or check existing records.” Allow users to proceed only after acknowledging the warning, or suggest linking to the existing prisoner record if applicable.",
                        "Add a warning message that alerts users when they try to enter duplicate data, such as: 'This inmate already exists in the system. Do you want to continue?'",
                      ],
      images: [error1, error2],

    },

    {

      heuristic: "6. Recognition Rather than Recall",
      issue: ["Labels and field names are generally visible. No need to memorize previous data.",
              "The system does not automatically calculate the sentence end date after the user enters the sentence length. Instead, the user has to manually input both the start and end dates, which requires them to recall and enter the correct information. This increases the cognitive load on users and can lead to mistakes, such as entering inconsistent or incorrect dates.",
              "Ensure all input fields have clear and visible labels so users can easily understand what information is required, reducing confusion and preventing data entry errors.",
      
            ],
      recommendation: ["Continue making labels clear and consistent. Consider tooltips for new users.",
                       "Automatically calculate the sentence end date based on the sentence start date and duration entered by the user. Provide the user with the ability to modify the start date, but lock the end date after it’s auto-calculated. Ensure the system validates that the end date logically aligns with the start date and duration.",
                      
                      ],
      images: [recog1, recog2],

    },

    {

      heuristic: "7. Flexibility and Efficiency of Use",
      issue: ["No keyboard shortcuts or ability to personalize dashboard.",
              "The system requires users to manually input the prisoner code for each new prisoner. This can be time-consuming and prone to errors, especially when dealing with a large number of prisoners. There is no option for the system to auto-generate the prisoner code based on a predefined pattern, which slows down data entry.",
              "The system lacks shortcuts, templates, or auto-fill features for repetitive tasks, such as assigning the same cell block, sentence type, or other details for multiple prisoners. This forces users to enter the same information repeatedly, which decreases efficiency for experienced users.",

            ],
      recommendation: ["Add accelerators (e.g., Ctrl+S), templates, and allow dashboard module rearrangement.",
                        "Implement an auto-generation feature for the prisoner code, where the system generates the code based on a sequential or logical pattern. Provide the option to save common entries as templates (e.g., common cell blocks or sentence details), allowing users to quickly apply them to new records. Introduce shortcuts or an advanced mode for expert users, enabling them to complete repetitive tasks more efficiently.",
                      
                      ],
      images: [flexi1, flexi2],

    },

    {

      heuristic: "8. Aesthetic and Minimalist Design",
      issue: ["The system's design adheres to minimalist principles, showing only relevant information and tools needed to perform the current task. The interface avoids unnecessary elements and keeps the focus on the essential features for the user. Buttons, icons, and text fields are appropriately spaced and organized, allowing the user to quickly understand and navigate the system.",
      ],
      recommendation: ["The design can be updated. A modern and sleek look could do wonders. Make the sidebar hidden when the home page or the dashboard is selected, also add a navbar. A toggleable navbar depending on screen size and platform.",
                        "Font style can be changed as well into a more sleek and modern look but with a bit of elegance like Roboto or Lato.",
                      
                      ],
      images: [],

    },

    {

      heuristic: "9. Help Users Recognize, Diagnose, and Recover from Errors",
      issue: ["When a user attempts to log in and enters an incorrect username or password, the system displays a generic error message: 'Incorrect username or password.'",
      ],
      recommendation: ["Separate the error message to indicate which part of the login credentials is incorrect. For example: If the username is incorrect: 'The username you entered does not exist. Please check and try again.' If the password is incorrect: 'The password you entered is incorrect. Please try again or reset your password.' ",
                        "After a failed login attempt, the system should clear the password field so the user can try entering the correct password without manually deleting the previous entry.",
                        "For users who are unsure whether the username or password is correct, the system should offer a password recovery link or username reminder option that users can easily access. The system should not show a generic error such as 'Incorrect username or password' as it doesn't help users resolve the issue efficiently.",
                        "Help users fix mistakes easily by showing suggestions or automatically correcting small errors when possible.",
                      ],
      images: [hurd1],

    },

    {

      heuristic: "10. Help and Documentation",
      issue: ["The system lacks easily accessible help or documentation to guide users when they encounter difficulties or have questions about certain features. For example, if a user is unsure about the required format for entering prisoner details, or if they need clarification on a specific process (like adding a visitor), there is no clear way to access help or documentation within the system. This lack of support can lead to user frustration, mistakes, and inefficiency, as users may not know where to find the answers to their questions.",

      ],
      recommendation: ["The system should include tooltips or help icons next to form fields or buttons that offer brief explanations of what users need to do. For instance, hovering over the 'Add Prisoner' button or the 'Prisoner Cell Block' field could display an explanation or a guideline on the expected data format.",
                        "Include a help section in the main navigation or dashboard where users can find answers to common questions. This could be in the form of FAQs, step-by-step guides, or video tutorials. Example help topics could include: 1. How to add a new prisoner 2. How to assign a prisoner to a cell block 3. What to do if a prisoner’s data is incorrect 4. How to reset the password.",
                        "Add a search bar within the help section, so users can quickly find answers to specific questions (e.g., 'how to add a visitor', 'how to assign a cell block'). This can help users save time by quickly locating the relevant documentation. ",
                        "Include a contact support option within the system (e.g., an email address or live chat feature) that users can reach out to if they encounter issues not covered in the help documentation. ",
                        "When an error occurs (e.g., an invalid prisoner name or missing information), the system should offer a link to relevant help topics that explain how to fix the error. For example, if a user attempts to assign a prisoner to the wrong cell block, the error message could include: 'For more information, refer to the Assigning Prisoners to Cell Blocks section of the help documentation.'",
                        "There should be an option to archive current and old inmate records. Not just inmates but guards and all other staffs as well.",
                      ],
      images: [],

    },

    {

      isPdfRow: true,
      pdfFiles: [
        { name: "Heuristic Evaluation Workbook - Villarin", path: WorkbookVillarin },
        { name: "Heuristic Evaluation Workbook - Sales", path: WorkbookSales },
        { name: "Heuristic Evaluation Workbook - Sarte", path: WorkbookSarte },
        { name: "Heuristic Evaluation Workbook - Bruzo", path: WorkbookBruzo },
        { name: "Heuristic Evaluation Workbook - Campana", path: WorkbookCampana },
      ]

    }

  ];

  return (

    <section id="Evaluation" className="min-h-screen flex flex-col items-center justify-start relative pt-30 pb-10" >

      <div className="text-center z-10 px-4">

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent leading-right">

          Evaluation Result

        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-gray-100 tracking-tight text-center leading-snug">

          Overview

        </h2>

        <p className="text-gray-400 text-lg mb-8 max-w-prose mx-auto text-justify leading-relaxed">

          This heuristic evaluation was conducted by a group of student evaluators to assess the usability of the prison management system prototype. Using Nielsen’s 10 Usability Heuristics, the team identified interface issues and areas for improvement to enhance user experience. The evaluation focused on helping the system better meet the needs of its users: prison staff and system administrators.
        
        </p>
        
      </div>

      <div className="overflow-x-auto w-[80%] px-4">

<table className="min-w-full text-sm text-white bg-white/5 backdrop-blur-md rounded-xl overflow-hidden">

          <thead className="bg-pink-500/10 text-pink-300 uppercase text-xs">
            
            <tr>

              <th className="px-4 py-3 text-left">Heuristic</th>
              <th className="px-4 py-3 text-left">Issue Description</th>
              <th className="px-4 py-3 text-left">Recommendation</th>
              <th className="px-4 py-3 text-left">Screenshot</th>
            
            </tr>

          </thead>

          <tbody className="divide-y divide-white/10">

            {rows.map((row, idx) => (

              row.isPdfRow ? (
                
                <tr key="pdf-row">

                  <td colSpan="4" className="px-4 py-3">

                    <h3 className="text-2xl font-semibold text-pink-300 mb-2">Heuristic Evaluation Workbook: </h3>

                    <div className="flex flex-wrap gap-4">

                      {row.pdfFiles.map((pdf, pdfIdx) => (

                        <div key={pdfIdx} className="flex items-center gap-2">

                          <span className="text-pink-300 cursor-pointer hover:underline text-lg p-5" onClick={() => setSelectedPDF(pdf.path)} >

                            {pdf.name}

                          </span>

                        </div>

                      ))}

                    </div>

                  </td>

                </tr>

              ) : (

                <tr key={idx}>
                  
                  <td className="px-4 py-3 align-top">{row.heuristic}</td>
                  
                  <td className="px-10 py-3 align-top">
                    
                    {Array.isArray(row.issue) ? ( 
                      
                      <ul className="list-disc list-inside space-y-1"> 
                        
                        {row.issue.map((item, i) => ( 

                          <li key={i}>{item}</li> 

                        ))}

                      </ul>

                    ) : ( row.issue )}

                  </td>

                  <td className="px-4 py-3 align-top">

                    {Array.isArray(row.recommendation) ? (

                      <ul className="list-disc list-inside space-y-1">

                        {row.recommendation.map((item, i) => ( <li key={i}>{item}</li> ))}

                      </ul> ) : ( row.recommendation )}

                  </td>

                  <td className="px-4 py-3 align-top flex flex-wrap gap-2">

                    {row.images.map((imgSrc, imgIdx) => (

                      <div key={imgIdx} className="relative">

                        <img src={imgSrc} alt={`Screenshot for ${row.heuristic} #${imgIdx + 1}`} onClick={() => openImage(imgSrc)} className="w-40 h-auto rounded-md shadow-md cursor-pointer hover:scale-105 transition-transform" />

                      </div> 
                    
                    ))}
                  
                  </td>

                </tr>

              ) ))}

          </tbody>

        </table>

      </div>

      {selectedImage && (

        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={closeImage} >
          
          <img src={selectedImage} alt="Enlarged" className="max-w-[1500px] max-h-[90vh] rounded-lg shadow-2xl" />

        </div>

      )}

      {selectedPDF && (

        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-0">
          
          <div className="w-full h-full bg-gray-900 rounded-lg shadow-xl flex flex-col">

            <div className="flex justify-between items-center p-4 border-b border-gray-700">

              <h3 className="text-lg font-medium text-white">PDF Preview</h3>

              <button onClick={() => setSelectedPDF(null)} className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-700 transition-colors">

                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />

                </svg>

              </button>

            </div>

            <div className="flex-1 overflow-hidden">

              <iframe src={`${selectedPDF}#view=fitH`} className="w-full h-full" title="PDF Preview" frameBorder="0" />

            </div>

          </div>
          
        </div>

      )}

    </section>

  );

};
