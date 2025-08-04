import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateSurvey = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    {
      id: 1,
      questionText: '',
      questionType: 'short-answer',
      options: [''],
      required: false,
      scaleMin: 1,
      scaleMax: 5,
      rows: [''],
      columns: [''],
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
        questionType: 'short-answer',
        options: [''],
        required: false,
        scaleMin: 1,
        scaleMax: 5,
        rows: [''],
        columns: [''],
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
                    <option value="short-answer">Short Answer</option>
                    <option value="paragraph">Paragraph</option>
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="dropdown">Dropdown</option>
                    <option value="file-upload">File Upload</option>
                    <option value="linear-scale">Linear Scale</option>
                    <option value="star-rating">Star Rating</option>
                    <option value="multiple-choice-grid">Multiple Choice Grid</option>
                    <option value="checkbox-grid">Checkbox Grid</option>
                    <option value="date">Date</option>
                    <option value="time">Time</option>
                  </select>
                </div>
                {/* Render options for multiple choice, checkbox, and dropdown */}
                {(question.questionType === 'multiple-choice' || question.questionType === 'checkbox' || question.questionType === 'dropdown') && (
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
                {/* Render scale settings for linear scale and star rating */}
                {(question.questionType === 'linear-scale' || question.questionType === 'star-rating') && (
                  <div className="mb-2">
                    <label className="font-semibold block mb-1">Scale Range:</label>
                    <div className="flex items-center space-x-2 mb-2">
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={question.scaleMin || 1}
                        onChange={(e) => handleQuestionChange(question.id, 'scaleMin', parseInt(e.target.value))}
                        className="w-16 border border-gray-300 rounded px-2 py-1"
                      />
                      <span>to</span>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={question.scaleMax || 5}
                        onChange={(e) => handleQuestionChange(question.id, 'scaleMax', parseInt(e.target.value))}
                        className="w-16 border border-gray-300 rounded px-2 py-1"
                      />
                    </div>
                    {question.questionType === 'linear-scale' && (
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm mb-1">Lowest label:</label>
                          <input
                            type="text"
                            value={question.lowestLabel || ''}
                            onChange={(e) => handleQuestionChange(question.id, 'lowestLabel', e.target.value)}
                            placeholder="e.g., Very dissatisfied"
                            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-1">Highest label:</label>
                          <input
                            type="text"
                            value={question.highestLabel || ''}
                            onChange={(e) => handleQuestionChange(question.id, 'highestLabel', e.target.value)}
                            placeholder="e.g., Very satisfied"
                            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {/* Render grid settings for multiple choice grid and checkbox grid */}
                {(question.questionType === 'multiple-choice-grid' || question.questionType === 'checkbox-grid') && (
                  <div className="mb-2">
                    <label className="font-semibold block mb-1">Grid Options:</label>
                    <div className="mb-2">
                      <label className="block text-sm mb-1">Rows:</label>
                      {question.rows?.map((row, index) => (
                        <div key={index} className="flex items-center mb-1">
                          <input
                            type="text"
                            value={row}
                            onChange={(e) => {
                              const newRows = [...(question.rows || [])];
                              newRows[index] = e.target.value;
                              handleQuestionChange(question.id, 'rows', newRows);
                            }}
                            className="flex-grow border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newRows = question.rows?.filter((_, i) => i !== index) || [];
                              handleQuestionChange(question.id, 'rows', newRows);
                            }}
                            className="ml-2 text-red-600 hover:text-red-800 font-bold"
                          >
                            &times;
                          </button>
                        </div>
                      )) || (
                        <div className="flex items-center mb-1">
                          <input
                            type="text"
                            onChange={(e) => handleQuestionChange(question.id, 'rows', [e.target.value])}
                            className="flex-grow border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Add first row"
                          />
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          const newRows = [...(question.rows || []), ''];
                          handleQuestionChange(question.id, 'rows', newRows);
                        }}
                        className="mt-1 text-blue-900 hover:text-blue-700 font-semibold"
                      >
                        + Add row
                      </button>
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm mb-1">Columns:</label>
                      {question.columns?.map((column, index) => (
                        <div key={index} className="flex items-center mb-1">
                          <input
                            type="text"
                            value={column}
                            onChange={(e) => {
                              const newColumns = [...(question.columns || [])];
                              newColumns[index] = e.target.value;
                              handleQuestionChange(question.id, 'columns', newColumns);
                            }}
                            className="flex-grow border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newColumns = question.columns?.filter((_, i) => i !== index) || [];
                              handleQuestionChange(question.id, 'columns', newColumns);
                            }}
                            className="ml-2 text-red-600 hover:text-red-800 font-bold"
                          >
                            &times;
                          </button>
                        </div>
                      )) || (
                        <div className="flex items-center mb-1">
                          <input
                            type="text"
                            onChange={(e) => handleQuestionChange(question.id, 'columns', [e.target.value])}
                            className="flex-grow border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Add first column"
                          />
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          const newColumns = [...(question.columns || []), ''];
                          handleQuestionChange(question.id, 'columns', newColumns);
                        }}
                        className="mt-1 text-blue-900 hover:text-blue-700 font-semibold"
                      >
                        + Add column
                      </button>
                    </div>
                  </div>
                )}
                {/* Preview of how the question will appear in the survey */}
                <div className="mt-4 p-4 bg-gray-50 rounded border">
                  <h4 className="font-semibold mb-2">Preview:</h4>
                  <div className="mb-2">
                    <label className="block font-medium mb-1">{question.questionText || `Question ${qIndex + 1}`}</label>
                  </div>
                  
                  {/* Render preview based on question type */}
                  {question.questionType === 'short-answer' && (
                    <input
                      type="text"
                      placeholder="Short answer text"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled
                    />
                  )}
                  
                  {question.questionType === 'paragraph' && (
                    <textarea
                      placeholder="Long answer text"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="4"
                      disabled
                    ></textarea>
                  )}
                  
                  {question.questionType === 'multiple-choice' && (
                    <div className="space-y-2">
                      {question.options.map((option, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="radio"
                            name={`mc-${question.id}`}
                            className="mr-2"
                            disabled
                          />
                          <label>{option || `Option ${index + 1}`}</label>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {question.questionType === 'checkbox' && (
                    <div className="space-y-2">
                      {question.options.map((option, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2"
                            disabled
                          />
                          <label>{option || `Option ${index + 1}`}</label>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {question.questionType === 'dropdown' && (
                    <select
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled
                    >
                      <option value="">Choose...</option>
                      {question.options.map((option, index) => (
                        <option key={index} value={option}>
                          {option || `Option ${index + 1}`}
                        </option>
                      ))}
                    </select>
                  )}
                  
                  {question.questionType === 'file-upload' && (
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.146 5.015 5.086 5 5 5a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-.025-.5"/>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-500">Any file type</p>
                        </div>
                        <input type="file" className="hidden" disabled />
                      </label>
                    </div>
                  )}
                  
                  {question.questionType === 'linear-scale' && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{question.lowestLabel || ''}</span>
                      <div className="flex items-center justify-evenly flex-1 mx-4">
                        {[...Array((question.scaleMax || 5) - (question.scaleMin || 1) + 1)].map((_, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <span className="text-lg font-medium mb-2">{(question.scaleMin || 1) + index}</span>
                            <input type="radio" name={`scale-${question.id}`} className="w-5 h-5" disabled />
                          </div>
                        ))}
                      </div>
                      <span className="text-sm">{question.highestLabel || ''}</span>
                    </div>
                  )}
                  
                  {question.questionType === 'star-rating' && (
                    <div className="flex">
                      {[...Array(question.scaleMax || 5)].map((_, index) => (
                        <svg key={index} className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" disabled>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  )}
                  
                  {(question.questionType === 'multiple-choice-grid' || question.questionType === 'checkbox-grid') && (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr>
                            <th className="border p-2"></th>
                            {question.columns?.map((column, index) => (
                              <th key={index} className="border p-2 text-sm">{column || `Column ${index + 1}`}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {question.rows?.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              <td className="border p-2 text-sm">{row || `Row ${rowIndex + 1}`}</td>
                              {question.columns?.map((_, colIndex) => (
                                <td key={colIndex} className="border p-2 text-center">
                                  {question.questionType === 'multiple-choice-grid' ? (
                                    <input type="radio" name={`grid-${question.id}-${rowIndex}`} disabled />
                                  ) : (
                                    <input type="checkbox" disabled />
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  
                  {question.questionType === 'date' && (
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled
                    />
                  )}
                  
                  {question.questionType === 'time' && (
                    <input
                      type="time"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled
                    />
                  )}
                </div>
                
                <div className="mt-4">
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
