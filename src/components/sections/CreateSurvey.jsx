import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateSurvey = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    {
      id: 1,
      questionText: '',
      questionType: 'text', // text, multiple-choice, checkbox
      options: [''],
      required: false,
    },
  ]);

  const handleQuestionChange = (id, field, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === id ? { ...q, [field]: value } : q
      )
    );
  };

  const handleOptionChange = (questionId, index, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => {
        if (q.id === questionId) {
          const newOptions = [...q.options];
          newOptions[index] = value;
          return { ...q, options: newOptions };
        }
        return q;
      })
    );
  };

  const addOption = (questionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, options: [...q.options, ''] } : q
      )
    );
  };

  const removeOption = (questionId, index) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => {
        if (q.id === questionId) {
          const newOptions = q.options.filter((_, i) => i !== index);
          return { ...q, options: newOptions };
        }
        return q;
      })
    );
  };

  const addQuestion = () => {
    const newId = questions.length > 0 ? questions[questions.length - 1].id + 1 : 1;
    setQuestions([
      ...questions,
      {
        id: newId,
        questionText: '',
        questionType: 'text',
        options: [''],
        required: false,
      },
    ]);
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend
    console.log('Survey submitted:', questions);
    alert('Survey submitted! Check console for data.');
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-start py-10 text-black">
      <div className="max-w-4xl w-full">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500 text-white font-bold">
            ✓
          </div>
          <div className="h-1 w-16 bg-gray-300 mx-2"></div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500 text-white font-bold">
            2
          </div>
        </div>
        <div className="p-6 bg-white rounded shadow text-black border border-gray-300">
          <button
            onClick={() => navigate('/organizer/create-event')}
            className="mb-4 text-blue-900 hover:text-blue-700 font-bold text-xl"
            aria-label="Back to Create Event"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            &#8592; Back
          </button>
          <h2 className="text-2xl font-bold mb-6">Create Survey</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {questions.map((question, qIndex) => (
              <div key={question.id} className="border p-4 rounded mb-4">
                <div className="flex justify-between items-center mb-2">
                  <input
                    type="text"
                    placeholder={`Question ${qIndex + 1}`}
                    value={question.questionText}
                    onChange={(e) => handleQuestionChange(question.id, 'questionText', e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => removeQuestion(question.id)}
                    className="ml-4 text-red-600 hover:text-red-800 font-bold"
                    aria-label="Remove question"
                  >
                    &times;
                  </button>
                </div>
                <div className="mb-2">
                  <label className="mr-4 font-semibold">Type:</label>
                  <select
                    value={question.questionType}
                    onChange={(e) => handleQuestionChange(question.id, 'questionType', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="text">Text</option>
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="checkbox">Checkbox</option>
                  </select>
                </div>
                {(question.questionType === 'multiple-choice' || question.questionType === 'checkbox') && (
                  <div className="mb-2">
                    <label className="font-semibold block mb-1">Options:</label>
                    {question.options.map((option, index) => (
                      <div key={index} className="flex items-center mb-1">
                        <input
                          type="text"
                          value={option}
                          onChange={(e) => handleOptionChange(question.id, index, e.target.value)}
                          className="flex-grow border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => removeOption(question.id, index)}
                          className="ml-2 text-red-600 hover:text-red-800 font-bold"
                          aria-label="Remove option"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addOption(question.id)}
                      className="mt-1 text-blue-900 hover:text-blue-700 font-semibold"
                    >
                      + Add option
                    </button>
                  </div>
                )}
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={question.required}
                      onChange={(e) => handleQuestionChange(question.id, 'required', e.target.checked)}
                      className="mr-2"
                    />
                    Required
                  </label>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addQuestion}
              className="bg-blue-900 text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition"
            >
              + Add Question
            </button>
            <button
              type="submit"
              className="ml-4 bg-green-600 text-white font-semibold px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Submit Survey
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateSurvey;
